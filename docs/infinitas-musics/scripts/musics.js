let PROJECT_ID = 'infinitas-musiclist';

// Array of API discovery doc URLs for APIs used by the quickstart
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
let SCOPES = 'https://www.googleapis.com/auth/drive';

let authorizeButton = document.getElementById('authorize_button');
let signoutButton = document.getElementById('signout_button');
let getButton = document.getElementById('get_button');

/**
 *  APIクライアント初期化および初期化後のサインイン処理
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyAFlNZZYOEoljQlhk8xHqLI5Y56jjThpQs',
        clientId: '889812503286-msunuum7pcq6gscuv8mfmvlqid4hkgm7.apps.googleusercontent.com',
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // 初期化直後のサインイン状態取得
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // サインイン状態により表示変更
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        // ボタン押下時の処理追加
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
        getButton.onclick = handleGetClick;
    }, function(error) {
        appendPre(JSON.stringify(error, null, 2));
    });
};

/**
 * サインイン処理のコールバック関数
 * サインイン状態により画面表示を変更する
 * @param {boolean} isSignedIn 
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        listFiles();
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
};

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
};

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
};

/**
 *  Sign out the user upon button click.
 */
function handleGetClick(event) {
    getFile('1Gh6A8eIwCyuRTtqvI6IY5PVQ6rvwGisL');
};

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    let pre = document.getElementById('content');
    let textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

/**
 * Print files.
 */
function listFiles() {
    let getListParams = {
        'q': 'mimeType=\'application/vnd.google-apps.folder\' or name=\'user.json\'',
        'pageSize': 50,
        //'fields': "nextPageToken, files(id, name, parents, webContentLink)"
        'fields': "*"
    };
    gapi.client.drive.files.list(getListParams).then(function(response) {
        appendPre('Files:');
        let files = response.result.files;
        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                let webContentLink = '';
                webContent = '';
                extStr = '.json';
                if ( file.name.lastIndexOf(extStr)+extStr.length===file.name.length) {
                    webContentLink = file.webContentLink;
                    gapi.client.drive.files.get({
                        fileId: file.id,
                        alt: 'media'
                    }).then(function(objFile){
                        let data = "<br />\n" + JSON.stringify(objFile.result);
                        console.log(data);
                    });
                };
                appendPre(file.name + ' (' + file.id + ') ' + webContentLink);
            };
        } else {
            appendPre('No files found.');
        };
    });
};

/**
 * ファイルの内容を取得する
 * @param {string} fid ファイルID
 */
function getFile(fid) {
    gapi.client.drive.files.get({
        fileId: fid,
        alt: 'media'
    }).then(function(obj){
        console.log(obj.result);
        appendPre('Get Complete. See Console Logs.');
    },function(error) {
        appendPre(JSON.stringify(error, null, 2));
    });
};

/**
 * ファイル更新処理
 * @param {string} fileId ファイルID
 * @param {blob} contentBlob アップロードしたい内容
 * @param {function} callback コールバック関数
 */
function updateFileContent(fileId, contentBlob, callback) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState != XMLHttpRequest.DONE) {
        return;
      }
      callback(xhr.response);
    };
    xhr.open('PATCH', 'https://www.googleapis.com/upload/drive/v3/files/' + fileId + '?uploadType=media');
    xhr.setRequestHeader('Authorization', 'Bearer ' + gapi.auth.getToken().access_token);
    xhr.send(contentBlob);
}

// ファイル更新処理のサンプル
function updateFileContentSample() {
    let docId = '1PQbBPUDjJWadYJU6zGAxRtKtL4rmPWb2'; // 更新ファイルのID
    let content = JSON.stringify({ // 更新ファイルの内容
        "kind": "drive#file",
        "id": docId,
        "name": "testfromapi.json",
        "mimeType": "text/plain"
      },null,4);
    let contentBlob = new  Blob([JSON.stringify(content,null,"\t")], {
      'type': 'text/plain'
    });
    updateFileContent(docId, contentBlob, function(response) {
      console.log(response);
    });
}

/**
 * webページロード完了後の処理
 */
function handleClientLoad() {
    // googleAPIクライアントの初期化
    gapi.load('client:auth2', initClient);


};

