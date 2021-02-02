---
title: "beatmania IIDX infinitas 楽曲一覧"
layout: "single-nosidebar"
---

<!--
<div id="ret"></div>

<p>Drive API Quickstart</p>

Add buttons to initiate auth sequence and sign out
<button id="authorize_button" style="display: none;">Authorize</button>
<button id="signout_button" style="display: none;">Sign Out</button>
<button id="get_button">Get File</button>

<pre id="content" style="white-space: pre-wrap;"></pre>
-->

<link rel="stylesheet" href="./musics.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
<script type="text/javascript" src="./scripts/musics.js"></script>
<script type="text/javascript" src="./musiclist.js"></script>
<script type="text/javascript" src="https://apis.google.com/js/api.js" async defer
    onload="this.onload=function(){};handleClientLoad()"
    onreadystatechange="if (this.readyState === 'complete') this.onload()">
</script>

<div id="toastbox"></div>

<!-- <div class="table-outer">
    <table class="infotable">
        <thead>
            <tr>
                <th rowspan="2" class="release">更新日</th>
                <th rowspan="2" class="genre">曲数<br />譜面数</th>
                <th colspan="5" class="sp">譜面数：single</th>
                <th colspan="4" class="dp">譜面数：double</th>
                <th rowspan="2" class="dp">登録人数</th>
            </tr>
            <tr>
                <th class="sp level all">合計</th>
                <th class="sp level spb">B</th>
                <th class="sp level spn">N</th>
                <th class="sp level sph">H</th>
                <th class="sp level spa">A</th>
                <th class="sp level all">合計</th>
                <th class="dp level dpn">N</th>
                <th class="dp level dph">H</th>
                <th class="dp level dpa">A</th>
            </tr>
        </thead>
    </table>
</div> -->

<div id="musicsearch" class="table-outer">
    <input id="formtab-1" name="formtab" class="formtabinput" type="checkbox" value="1" data-checkgroup="formtab" /><label for="formtab-1" class="tab_item">条件：譜面</label>
    <input id="formtab-2" name="formtab" class="formtabinput" type="checkbox" value="2" data-checkgroup="formtab" /><label for="formtab-2" class="tab_item">条件：その他</label>
    <input id="formtab-3" name="formtab" class="formtabinput" type="checkbox" value="3" data-checkgroup="formtab" /><label for="formtab-3" class="tab_item">表示設定</label>
    <input id="formtab-4" name="formtab" class="formtabinput" type="checkbox" value="4" data-checkgroup="formtab" /><label for="formtab-4" class="tab_item">データ設定</label>
    <input id="formtab-5" name="formtab" class="formtabinput" type="checkbox" value="5" data-checkgroup="formtab" /><label for="formtab-5" class="tab_item">楽曲数・BIT</label>
    <input id="formtab-6" name="formtab" class="formtabinput" type="checkbox" value="6" data-checkgroup="formtab" /><label for="formtab-6" class="tab_item">？？？</label>
    <input id="formtab-7" name="formtab" class="formtabinput" type="checkbox" value="7" data-checkgroup="formtab" /><label for="formtab-7" class="tab_item">？？？</label>
    <input id="formtab-8" name="formtab" class="formtabinput" type="checkbox" value="8" data-checkgroup="formtab" /><label for="formtab-8" class="tab_item">？？？</label>
    <div id="formtab-1_content" class="tab_content">
        <div id="scorefilterbox"></div>
    </div>
    <div id="formtab-2_content" class="tab_content">
        <div class="inblock fieldname">シリーズ</div>
        <div id="changeselect-series-ALL" class="changeselect"></div>
        <div id="changeselect-series-CS" class="changeselect"></div>
        <hr class="clearfix" />
        <div id="seriesbox"></div>
        <hr class="clearfix" />
        <div class="inblock fieldname">配信条件</div>
        <div id="changeselect-releasetype-ALL" class="changeselect"></div>
        <div id="changeselect-releasetype-championship" class="changeselect"></div>
        <div id="changeselect-releasetype-Pack" class="changeselect"></div>
        <hr class="clearfix" />
        <div id="releasetypebox"></div>
        <hr class="clearfix" />
        <div class="clearfix">
            <div class="fieldname">配信開始月</div>
            <div class="releasedate-menu selectbutton inblock">
                <select id="releasedate-min" name="releasedate-min">
                    <option value="2000-01-01" selected>未指定</option>
                </select>
                <div></div>
            </div>
            <div class="inblock pad-lr5">～</div>
            <div class="releasedate-menu selectbutton inblock">
                <select id="releasedate-max" name="releasedate-max" disabled>
                </select>
                <div></div>
            </div>
        </div>
        <div class="clearfix">
            <div class="fieldname">BIT配信開始月</div>
            <div class="releasedate-menu selectbutton inblock">
                <select id="bitdate-min" name="bitdate-min">
                    <option value="2000-01-01" selected>未指定</option>
                </select>
                <div></div>
            </div>
            <div class="inblock pad-lr5">～</div>
            <div class="releasedate-menu selectbutton inblock">
                <select id="bitdate-max" name="bitdate-max" disabled>
                </select>
                <div></div>
            </div>
        </div>
        <div class="clearfix">
            <div class="fieldname">入手可否</div>
            <div class="selectbutton inblock">
                <select id="available" name="available">
                    <option value="ALL" selected>全て</option>
                    <option value="yes">現在入手可能</option>
                    <option value="no">現在入手不可</option>
                </select>
                <div></div>
            </div>
        </div>
        <div class="clearfix">
            <div class="fieldname">解禁状況</div>
            <div class="selectbutton inblock">
                <select id="unlocked" name="unlocked">
                    <option value="ALL" selected>全て</option>
                    <option value="yes">全譜面解禁済</option>
                    <option value="partiallyyes">1譜面以上解禁済</option>
                    <option value="partially">解禁中</option>
                    <option value="partiallyno">1譜面以上未解禁</option>
                    <option value="no">未解禁</option>
                </select>
                <div></div>
            </div>
        </div>
        <hr class="clearfix" />
        <div class="clearfix">
            <div class="fieldname">曲名</div>
            <div class="inblock"><input id="title" name="title" type="text" placeholder="曲名を部分一致検索…" class="input-260" autocomplete="on" list="titlelist" /><datalist id="titlelist"></datalist></div>
        </div>
        <div class="clearfix">
            <div class="fieldname">ジャンル</div>
            <div class="inblock"><input id="genre" name="genre" type="text" placeholder="ジャンル名を部分一致検索…" class="input-260" autocomplete="on" list="genrelist" /><datalist id="genrelist"></datalist></div>
        </div>
        <div class="clearfix">
            <div class="fieldname">アーティスト</div>
            <div class="inblock"><input id="artist" name="artist" type="text" placeholder="アーティスト名を部分一致検索…" class="input-260" autocomplete="on" list="artistlist" /><datalist id="artistlist"></datalist></div>
        </div>
        <div class="clearfix">
            <div class="fieldname">BPM</div>
            <div class="notes-menu"><input id="opt_bpm_min" name="opt_bpm_min" type="text" placeholder="0" class="input-60" /></div>
            <div class="inblock pad-lr5">～</div>
            <div class="notes-menu"><input id="opt_bpm_max" name="opt_bpm_max" type="text" placeholder="999" class="input-60" /></div>
            <div class="inblock pad-lr5">&nbsp;</div>
            <div class="vname bpm_opt">
                <input id="opt_bpm_changing" name="opt_bpm_changing" type="number" class="opt hidden" value="0" />
                <label for="opt_bpm_changing">可変&nbsp;:&nbsp;-</label>
            </div>
        </div>
        <div class="clearfix"><span>※可変 … 曲中にBPM変化のある曲・譜面毎にBPMが違う曲</span></div>
    </div>
    <div id="formtab-3_content" class="tab_content">
        <div class="clearfix">
            <div class="settings-check"><input id="searchopen" name="searchopen" type="checkbox" value="1" /></div>
            <div class="inblock"><label for="searchopen">検索後に全てのフォルダを開く</label></div>
        </div>
        <div class="clearfix">
            <div class="settings-check"><input id="singleopen" name="singleopen" type="checkbox" value="1" checked /></div>
            <div class="inblock"><label for="singleopen">フォルダを開く時に他のフォルダを閉じる</label></div>
        </div>
        <div class="clearfix">
            <div class="settings-check">&nbsp;</div>
            <div class="fieldname">フォルダ</div>
            <div class="inblock selectbutton">
                <select id="search-folder" name="search-folder">
                    <option value="VER" selected>Version</option>
                    <option value="SPNLV">SP-NORMAL-レベル</option>
                    <option value="SPHLV">SP-HYPER-レベル</option>
                    <option value="SPALV">SP-ANOTHER-レベル</option>
                    <option value="DPNLV">DP-NORMAL-レベル</option>
                    <option value="DPHLV">DP-HYPER-レベル</option>
                    <option value="DPALV">DP-ANOTHER-レベル</option>
                    <option value="SPNNOTES">SP-NORMAL-ノート数</option>
                    <option value="SPHNOTES">SP-HYPER-ノート数</option>
                    <option value="SPANOTES">SP-ANOTHER-ノート数</option>
                    <option value="DPNNOTES">DP-NORMAL-ノート数</option>
                    <option value="DPHNOTES">DP-HYPER-ノート数</option>
                    <option value="DPANOTES">DP-ANOTHER-ノート数</option>
                    <option value="BPM">BPM</option>
                    <option value="RELT">配信条件</option>
                    <option value="RELY">リリース年</option>
                    <option value="RELYM">リリース月</option>
                    <option value="BITY">BIT解禁年</option>
                    <option value="BITYM">BIT解禁月</option>
                </select>
                <div></div>
            </div>
        </div>
        <div class="clearfix">
            <div class="settings-check">&nbsp;</div>
            <div class="fieldname">楽曲ソート順1</div>
            <div class="inblock selectbutton">
                <select id="search-sort1" name="search-sort1" class="search-sort">
                    <option value="TITLE">曲名</option>
                    <option value="ARTIST">アーティスト名</option>
                    <option value="GENRE">ジャンル名</option>
                    <option value="BPM">BPM</option>
                    <option value="VERSION" selected>バージョン</option>
                    <option value="RELEASE">リリース日</option>
                    <option value="BITDATE">BIT解禁日</option>
                    <option value="SPNLV">SP-NORMAL-レベル</option>
                    <option value="SPHLV">SP-HYPER-レベル</option>
                    <option value="SPALV">SP-ANOTHER-レベル</option>
                    <option value="DPNLV">DP-NORMAL-レベル</option>
                    <option value="DPHLV">DP-HYPER-レベル</option>
                    <option value="DPALV">DP-ANOTHER-レベル</option>
                    <option value="SPNNOTES">SP-NORMAL-ノート数</option>
                    <option value="SPHNOTES">SP-HYPER-ノート数</option>
                    <option value="SPANOTES">SP-ANOTHER-ノート数</option>
                    <option value="DPNNOTES">DP-NORMAL-ノート数</option>
                    <option value="DPHNOTES">DP-HYPER-ノート数</option>
                    <option value="DPANOTES">DP-ANOTHER-ノート数</option>
                </select>
                <div></div>
                <select id="search-sort-order1" name="search-sort-order1" class="search-sort-order">
                    <option value="UP" selected>昇順</option>
                    <option value="DOWN">降順</option>
                </select>
                <div></div>
            </div>
        </div>
        <div class="clearfix">
            <div class="settings-check">&nbsp;</div>
            <div class="fieldname">楽曲ソート順2</div>
            <div class="inblock selectbutton">
                <select id="search-sort2" name="search-sort2" class="search-sort">
                    <option value="TITLE">曲名</option>
                    <option value="ARTIST">アーティスト名</option>
                    <option value="GENRE">ジャンル名</option>
                    <option value="BPM">BPM</option>
                    <option value="VERSION">バージョン</option>
                    <option value="RELEASE">リリース日</option>
                    <option value="BITDATE">BIT解禁日</option>
                    <option value="SPNLV">SP-NORMAL-レベル</option>
                    <option value="SPHLV">SP-HYPER-レベル</option>
                    <option value="SPALV" selected>SP-ANOTHER-レベル</option>
                    <option value="DPNLV">DP-NORMAL-レベル</option>
                    <option value="DPHLV">DP-HYPER-レベル</option>
                    <option value="DPALV">DP-ANOTHER-レベル</option>
                    <option value="SPNNOTES">SP-NORMAL-ノート数</option>
                    <option value="SPHNOTES">SP-HYPER-ノート数</option>
                    <option value="SPANOTES">SP-ANOTHER-ノート数</option>
                    <option value="DPNNOTES">DP-NORMAL-ノート数</option>
                    <option value="DPHNOTES">DP-HYPER-ノート数</option>
                    <option value="DPANOTES">DP-ANOTHER-ノート数</option>
                </select>
                <div></div>
                <select id="search-sort-order2" name="search-sort-order2" class="search-sort-order">
                    <option value="UP" selected>昇順</option>
                    <option value="DOWN">降順</option>
                </select>
                <div></div>
            </div>
        </div>
        <div class="clearfix">
            <div class="settings-check">&nbsp;</div>
            <div class="fieldname">楽曲ソート順3</div>
            <div class="inblock selectbutton">
                <select id="search-sort3" name="search-sort3" class="search-sort">
                    <option value="TITLE">曲名</option>
                    <option value="ARTIST">アーティスト名</option>
                    <option value="GENRE">ジャンル名</option>
                    <option value="BPM">BPM</option>
                    <option value="VERSION">バージョン</option>
                    <option value="RELEASE">リリース日</option>
                    <option value="BITDATE">BIT解禁日</option>
                    <option value="SPNLV">SP-NORMAL-レベル</option>
                    <option value="SPHLV" selected>SP-HYPER-レベル</option>
                    <option value="SPALV">SP-ANOTHER-レベル</option>
                    <option value="DPNLV">DP-NORMAL-レベル</option>
                    <option value="DPHLV">DP-HYPER-レベル</option>
                    <option value="DPALV">DP-ANOTHER-レベル</option>
                    <option value="SPNNOTES">SP-NORMAL-ノート数</option>
                    <option value="SPHNOTES">SP-HYPER-ノート数</option>
                    <option value="SPANOTES">SP-ANOTHER-ノート数</option>
                    <option value="DPNNOTES">DP-NORMAL-ノート数</option>
                    <option value="DPHNOTES">DP-HYPER-ノート数</option>
                    <option value="DPANOTES">DP-ANOTHER-ノート数</option>
                </select>
                <div></div>
                <select id="search-sort-order3" name="search-sort-order3" class="search-sort-order">
                    <option value="UP" selected>昇順</option>
                    <option value="DOWN">降順</option>
                </select>
                <div></div>
            </div>
        </div>
    </div>
    <div id="formtab-4_content" class="tab_content">
        <div class="clearfix">
            <div>
            データ保存設定の利用にあたり、以下について同意されたものとみなします。<br />
            <ul>
                <li>入力された「ID」「参照・編集パス」および「楽曲解禁状況」をサーバ上に保存すること。</li>
                <li>現時点で登録された「ID」「参照・編集パス」の変更・削除が出来ないこと。</li>
                <li>保存された「楽曲解禁状況」を「ID」「参照パス」を知りうる第三者が閲覧できること。</li>
                <li>ログイン状況の管理のため、cookieを利用すること。</li>
                <li>検索条件 / 表示設定を保持するため、cookieを利用すること。</li>
            </ul>
            </div>
        </div>
        <hr class="clearfix" />
        <div class="clearfix sg1">
            <div class="fieldname">ID</div>
            <div class="inblock"><input id="id" name="id" type="text" placeholder="希望するID" class="input-200" /></div>
        </div>
        <div class="clearfix sg1">
            <div class="fieldname">┣参照パス</div>
            <div class="inblock"><input id="readpassword" name="readpassword" type="text" placeholder="参照用パスワード" class="input-200" /></div>
        </div>
        <div class="clearfix sg1">
            <div class="fieldname">┗編集パス</div>
            <div class="inblock"><input id="writepassword" name="writepassword" type="password" placeholder="編集用パスワード" class="input-200" /></div>
        </div>
        <div class="clearfix sg1">
            <input id="setmyid" name="setmyid" type="checkbox" class="hidden" />
            <label for="setmyid">上記IDでログイン or 新規登録</label>
        </div>
        <!-- <hr class="clearfix sg2" />
        <div class="clearfix sg2 rival">
            <div class="fieldname">ライバル1</div>
            <div class="inblock"><input id="rival1" name="rival1" type="text" placeholder="ライバルのID…" class="input-200" disabled /></div>
        </div>
        <div class="clearfix sg2 rival">
            <div class="fieldname">┗参照パス</div>
            <div class="inblock"><input id="rival1pass" name="rival1pass" type="text" placeholder="ライバルの参照パス…" class="input-200" disabled /></div>
        </div>
        <hr class="clearfix sg2" />
        <div class="clearfix sg2 rival">
            <div class="fieldname">ライバル2</div>
            <div class="inblock"><input id="rival2" name="rival2" type="text" placeholder="ライバルのID…" class="input-200" disabled /></div>
        </div>
        <div class="clearfix sg2 rival">
            <div class="fieldname">┗参照パス</div>
            <div class="inblock"><input id="rival2pass" name="rival2pass" type="text" placeholder="ライバルの参照パス…" class="input-200" disabled /></div>
        </div>
        <hr class="clearfix sg2" />
        <div class="clearfix sg2 rival">
            <div class="fieldname">ライバル3</div>
            <div class="inblock"><input id="rival3" name="rival3" type="text" placeholder="ライバルのID…" class="input-200" disabled /></div>
        </div>
        <div class="clearfix sg2 rival">
            <div class="fieldname">┗参照パス</div>
            <div class="inblock"><input id="rival3pass" name="rival3pass" type="text" placeholder="ライバルの参照パス…" class="input-200" disabled /></div>
        </div>
        <hr class="clearfix sg2" />
        <div class="clearfix sg2 rival">
            <div class="fieldname">ライバル4</div>
            <div class="inblock"><input id="rival4" name="rival4" type="text" placeholder="ライバルのID…" class="input-200" disabled /></div>
        </div>
        <div class="clearfix sg2 rival">
            <div class="fieldname">┗参照パス</div>
            <div class="inblock"><input id="rival4pass" name="rival4pass" type="text" placeholder="ライバルの参照パス…" class="input-200" disabled /></div>
        </div>
        <hr class="clearfix sg2" />
        <div class="clearfix sg2 rival">
            <div class="fieldname">ライバル5</div>
            <div class="inblock"><input id="rival5" name="rival5" type="text" placeholder="ライバルのID…" class="input-200" disabled /></div>
        </div>
        <div class="clearfix sg2 rival">
            <div class="fieldname">┗参照パス</div>
            <div class="inblock"><input id="rival5pass" name="rival5pass" type="text" placeholder="ライバルの参照パス…" class="input-200" disabled /></div>
        </div>
        <div class="clearfix sg2 rival">
            <input id="setrivalid" name="setmyid" type="checkbox" class="hidden" disabled />
            <label for="setrivalid">ライバル情報更新</label>
        </div> -->
        <hr class="sg2 clearfix" />
        <div id="purchasebox" class="sg2 purchase"></div>
    </div>
    <div id="formtab-5_content" class="table-outer tab_content">
        <table class="infotable">
            <thead>
                <tr>
                    <th rowspan="2" class="type">&nbsp;</th>
                    <th rowspan="2" class="release">更新日</th>
                    <th rowspan="2" class="genre">曲数 / 譜面数</th>
                    <th colspan="5" class="sp">譜面数：single</th>
                    <th colspan="4" class="dp">譜面数：double</th>
                    <!-- <th rowspan="2" class="dp">登録人数</th> -->
                </tr>
                <tr>
                    <th class="sp level all">合計</th>
                    <th class="sp level spb">B</th>
                    <th class="sp level spn">N</th>
                    <th class="sp level sph">H</th>
                    <th class="sp level spa">A</th>
                    <th class="sp level all">合計</th>
                    <th class="dp level dpn">N</th>
                    <th class="dp level dph">H</th>
                    <th class="dp level dpa">A</th>
                </tr>
            </thead>
        </table>
    </div>
</div>

<form id="searchbuttonform" enctype="application/x-www-form-urlencoded" onsubmit="return false;">
    <div class="buttons center">
        <input id="filter-button" name="filter-button" type="submit" value="検索" form="musicsearch" disabled />
        <input id="formreset" name="formreset" type="reset" value="検索条件リセット" />
    </div>
</form>

<div id="debug"></div>
<div id="search-init"></div>
<div id="search-message"></div>

<div class="table-outer">
    <table class="musiclist">
        <caption></caption>
        <colgroup span="1" class="release"></colgroup>
        <colgroup span="1" class="version"></colgroup>
        <colgroup span="4" class="musicinfo"></colgroup>
        <colgroup span="4" class="scoreinfo single"></colgroup>
        <colgroup span="3" class="scoreinfo double"></colgroup>
        <thead>
            <tr>
                <th rowspan="2" class="release">配信</th>
                <th rowspan="2" class="version">Ver</th>
                <th rowspan="2" class="genre">ジャンル</th>
                <th rowspan="2" class="artist">アーティスト</th>
                <th rowspan="2" class="title">曲名</th>
                <th rowspan="2" class="bpm">BPM</th>
                <th colspan="4" class="sp">single</th>
                <th colspan="3" class="dp">double</th>
            </tr>
            <tr>
                <th class="sp level spb">B</th>
                <th class="sp level spn">N</th>
                <th class="sp level sph">H</th>
                <th class="sp level spa">A</th>
                <th class="dp level dpn">N</th>
                <th class="dp level dph">H</th>
                <th class="dp level dpa">A</th>
            </tr>
        </thead>
    </table>
</div>