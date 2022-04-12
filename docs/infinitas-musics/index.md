---
title: "beatmania IIDX infinitas 楽曲一覧"
layout: "single-nosidebar"
---
<link rel="stylesheet" href="./musics.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
<script type="text/javascript" src="./musiclist.js" defer></script>
<script type="text/javascript" src="./scripts/musics.js" defer></script>
<div id="musicsearch" class="table-outer">
	<input id="formtab-1" name="formtab" class="formtabinput" type="checkbox" value="1" data-checkgroup="formtab" />
	<input id="formtab-2" name="formtab" class="formtabinput" type="checkbox" value="2" data-checkgroup="formtab" />
	<input id="formtab-3" name="formtab" class="formtabinput" type="checkbox" value="3" data-checkgroup="formtab" />
	<input id="formtab-4" name="formtab" class="formtabinput" type="checkbox" value="4" data-checkgroup="formtab" />
	<input id="formtab-5" name="formtab" class="formtabinput" type="checkbox" value="5" data-checkgroup="formtab" />
	<input id="formtab-6" name="formtab" class="formtabinput" type="checkbox" value="6" data-checkgroup="formtab" />
	<input id="formtab-7" name="formtab" class="formtabinput" type="checkbox" value="7" data-checkgroup="formtab" />
	<input id="formtab-8" name="formtab" class="formtabinput" type="checkbox" value="8" data-checkgroup="formtab" />
	<label for="formtab-1" class="tab_item">条件：譜面</label>
	<label for="formtab-2" class="tab_item">条件：楽曲</label>
	<label for="formtab-3" class="tab_item">条件：実績</label>
	<label for="formtab-4" class="tab_item">楽曲数・BIT</label>
	<label for="formtab-5" class="tab_item">設定：表示</label>
	<label for="formtab-6" class="tab_item">設定：データ</label>
	<label for="formtab-7" class="tab_item">使い方</label>
	<label for="formtab-8" class="tab_item">(管理用1)</label>
	<div id="formtab-1_content" class="tab_content">
		<div id="scorefilterbox"></div>
	</div>
	<div id="formtab-2_content" class="tab_content">
		<div class="inblock fieldname">バージョン</div>
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
				<select id="releasedate-min" name="releasedate-min"></select>
				<div></div>
			</div>
			<div class="inblock pad-lr5">～</div>
			<div class="releasedate-menu selectbutton inblock">
				<select id="releasedate-max" name="releasedate-max"></select>
				<div></div>
			</div>
		</div>
		<div class="clearfix">
			<div class="fieldname">BIT配信開始月</div>
			<div class="releasedate-menu selectbutton inblock">
				<select id="bitdate-min" name="bitdate-min"></select>
				<div></div>
			</div>
			<div class="inblock pad-lr5">～</div>
			<div class="releasedate-menu selectbutton inblock">
				<select id="bitdate-max" name="bitdate-max"></select>
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
			<div class="notes-menu"><input id="opt_bpm_max" name="opt_bpm_max" type="text" placeholder="9999" class="input-60" /></div>
			<div class="inblock pad-lr5">&nbsp;</div>
			<div class="vname bpm_opt">
				<input id="opt_bpm_changing" name="opt_bpm_changing" type="number" class="opt" value="0" />
				<label for="opt_bpm_changing">可変&nbsp;:&nbsp;-</label>
			</div>
		</div>
		<div class="clearfix"><span>※可変 … 曲中にBPM変化のある曲・譜面毎にBPMが違う曲</span></div>
	</div>
	<div id="formtab-3_content" class="tab_content">
		<div class="clearfix">
			<div class="fieldname">解禁状況</div>
			<div class="selectbutton inblock">
				<select id="unlocked" name="unlocked" disabled>
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
		<div id="recordfilterbox"></div>
	</div>
	<div id="formtab-4_content" class="table-outer tab_content">
		<div class="info-lastupdated"></div>
		<table class="infotable">
			<colgroup span="1" class="section1"></colgroup>
			<colgroup span="1" class="section2"></colgroup>
			<colgroup span="1" class="total"></colgroup>
			<colgroup span="5" class="scoreinfo single"></colgroup>
			<colgroup span="4" class="scoreinfo double"></colgroup>
			<thead>
				<tr>
					<th rowspan="2" colspan="2">&nbsp;</th>
					<th rowspan="2" class="total">曲数 / 譜面数</th>
					<th colspan="5" class="sp">譜面数：single</th>
					<th colspan="4" class="dp">譜面数：double</th>
				</tr>
				<tr>
					<th class="sp level all">合計</th>
					<th class="sp level spb">B</th>
					<th class="sp level spn">N</th>
					<th class="sp level sph">H</th>
					<th class="sp level spa">A</th>
					<th class="dp level all">合計</th>
					<th class="dp level dpn">N</th>
					<th class="dp level dph">H</th>
					<th class="dp level dpa">A</th>
				</tr>
			</thead>
		</table>
	</div>
	<div id="formtab-5_content" class="tab_content">
		<div class="clearfix">
			<div class="settings-check"><input id="searchopen" name="searchopen" type="checkbox" value="1" /></div>
			<div class="inblock"><label for="searchopen">検索後に全てのフォルダを開く</label></div>
		</div>
		<div class="clearfix">
			<div class="settings-check"><input id="singleopen" name="singleopen" type="checkbox" value="1" checked /></div>
			<div class="inblock"><label for="singleopen">フォルダを開く時に他のフォルダを閉じる</label></div>
		</div>
		<div class="clearfix">
			<div class="settings-check"><input id="extendopen" name="extendopen" type="checkbox" value="1" /></div>
			<div class="inblock"><label for="extendopen">フォルダを開く時に楽曲詳細も開く</label></div>
		</div>
		<div class="clearfix">
			<div class="settings-check">&nbsp;</div>
			<div class="fieldname">フォルダ</div>
			<div class="inblock selectbutton">
				<select id="search-folder" name="search-folder">
					<option value="VER" selected>Version</option>
					<option value="SPLV">SP-レベル</option>
					<option value="SPNLV">SP-N-レベル</option>
					<option value="SPHLV">SP-H-レベル</option>
					<option value="SPALV">SP-A-レベル</option>
					<option value="DPLV">DP-レベル</option>
					<option value="DPNLV">DP-N-レベル</option>
					<option value="DPHLV">DP-H-レベル</option>
					<option value="DPALV">DP-A-レベル</option>
					<option value="SPNNOTES">SP-N-ノート数</option>
					<option value="SPHNOTES">SP-H-ノート数</option>
					<option value="SPANOTES">SP-A-ノート数</option>
					<option value="DPNNOTES">DP-N-ノート数</option>
					<option value="DPHNOTES">DP-H-ノート数</option>
					<option value="DPANOTES">DP-A-ノート数</option>
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
					<option value="SPNLV">SP-N-レベル</option>
					<option value="SPHLV">SP-H-レベル</option>
					<option value="SPALV">SP-A-レベル</option>
					<option value="DPNLV">DP-N-レベル</option>
					<option value="DPHLV">DP-H-レベル</option>
					<option value="DPALV">DP-A-レベル</option>
					<option value="SPNNOTES">SP-N-ノート数</option>
					<option value="SPHNOTES">SP-H-ノート数</option>
					<option value="SPANOTES">SP-A-ノート数</option>
					<option value="DPNNOTES">DP-N-ノート数</option>
					<option value="DPHNOTES">DP-H-ノート数</option>
					<option value="DPANOTES">DP-A-ノート数</option>
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
					<option value="SPNLV">SP-N-レベル</option>
					<option value="SPHLV">SP-H-レベル</option>
					<option value="SPALV" selected>SP-A-レベル</option>
					<option value="DPNLV">DP-N-レベル</option>
					<option value="DPHLV">DP-H-レベル</option>
					<option value="DPALV">DP-A-レベル</option>
					<option value="SPNNOTES">SP-N-ノート数</option>
					<option value="SPHNOTES">SP-H-ノート数</option>
					<option value="SPANOTES">SP-A-ノート数</option>
					<option value="DPNNOTES">DP-N-ノート数</option>
					<option value="DPHNOTES">DP-H-ノート数</option>
					<option value="DPANOTES">DP-A-ノート数</option>
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
					<option value="SPNLV">SP-N-レベル</option>
					<option value="SPHLV" selected>SP-H-レベル</option>
					<option value="SPALV">SP-A-レベル</option>
					<option value="DPNLV">DP-N-レベル</option>
					<option value="DPHLV">DP-H-レベル</option>
					<option value="DPALV">DP-A-レベル</option>
					<option value="SPNNOTES">SP-N-ノート数</option>
					<option value="SPHNOTES">SP-H-ノート数</option>
					<option value="SPANOTES">SP-A-ノート数</option>
					<option value="DPNNOTES">DP-N-ノート数</option>
					<option value="DPHNOTES">DP-H-ノート数</option>
					<option value="DPANOTES">DP-A-ノート数</option>
				</select>
				<div></div>
				<select id="search-sort-order3" name="search-sort-order3" class="search-sort-order">
					<option value="UP" selected>昇順</option>
					<option value="DOWN">降順</option>
				</select>
				<div></div>
			</div>
		</div>
		<div class="clearfix">
			<div class="settings-check">&nbsp;</div>
			<div class="fieldname">DJLevel</div>
			<div class="inblock selectbutton">
				<select id="showdjlevel" name="showdjlevel">
					<option value="0" selected>通常表示</option>
					<option value="1">+-表示</option>
					<option value="2">+表示</option>
					<option value="3">-表示</option>
					<option value="4">%表示</option>
					<option value="-1">表示しない</option>
				</select>
				<div></div>
			</div>
		</div>
	</div>
	<div id="formtab-6_content" class="tab_content">
		<div class="clearfix">
			<div>
			データ保存設定の利用にあたり、以下について同意されたものとみなします。<br />
			<ul>
<!--
				<li>google Driveに保存する場合<br />
					<ul>
						<li class="warn">2021/03/10時点で開発中のため、googleログイン時に警告画面が表示される可能性があります！</li>
						<li>「ファイルID」を記憶しておくためにcookieを利用すること。</li>
						<li>「ファイルID」を知りうる第三者がファイルを閲覧できること。</li>
						<li>google Driveで権限設定を誤っていた場合に、「ファイルID」を知りうる第三者にファイルを改ざんされる恐れがあること。</li>
						<li>google Driveで編集を行った場合の動作は保証しません。</li>
					</ul>
				</li>
-->
				<li>ローカルストレージに保存する場合<br />
					<ul>
						<li>ブラウザの設定からサイトデータを削除した場合にはデータが削除されます。</li>
						<li>ブラウザの同期機能ではデータの同期は出来ません。</li>
						<li>複数のブラウザでデータを共有する場合はファイルとして保存してください。</li>
					</ul>
				</li>
				<li>ファイルとして保存する場合<br />
					<ul>
						<li>ファイルを手動で編集した際の動作は保証しません。</li>
					</ul>
				</li>
			</ul>
			以上のことに同意していただいた上でのデータ保存設定をご利用ください。<br />
			データ保存設定についての説明は作成中です。<br />
			</div>
		</div>
		<hr class="clearfix" />
		<div class="clearfix">
			<div class="fieldname"></div><div id="json-message" class="inblock"></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"></div><div class="inblock"><a id="newtext" class="btn btn--info">データを新規作成</a></div>
		</div>
		<div class="clearfix">
			<div class="fieldname">DJ NAME</div><div id="userJSON_djname" class="inblock"></div>
		</div>
		<div class="clearfix">
			<div class="fieldname">作成日時</div><div id="userJSON_created" class="inblock"></div>
		</div>
		<div class="clearfix">
			<div class="fieldname">更新日時</div><div id="userJSON_updated" class="inblock"></div>
		</div>
		<hr class="clearfix" />
		<div class="clearfix">
			<div class="fieldname">ファイル</div>
			<div class="inblock">
				<div class="clearfix">
					<input id="localfile" name="localfile" type="file" class="hidden" /><label for="localfile" class="btn btn--info"> ファイル選択 </label>
					<a id="downloadButton" class="btn btn--info hidden">JSON ダウンロード</a>
				</div>
				<div class="clearfix">
					<div id="localfilename"></div>
				</div>
			</div>
		</div>
		<hr class="clearfix" />
		<div class="clearfix">
			<div class="fieldname">LocalStorage</div>
			<div class="inblock">
				<div class="clearfix">
					<a href="#musicsearch" id="localStorageEnable" class="btn btn--info">LocalStorage有効化</a>
					<a href="#musicsearch" id="localStorageRead" class="btn btn--info hidden">読込</a>
					<a href="#musicsearch" id="localStorageSave" class="btn btn--info hidden">保存</a>
					<a href="#musicsearch" id="localStorageDisable" class="btn btn--info hidden">LocalStorage無効化</a>
				</div>
			</div>
		</div>
<!--
		<hr class="clearfix" />
		<div class="clearfix">
			<div class="fieldname">GoogleDrive</div>
			<div class="inblock">
				<div class="clearfix">
					<a id="googleapiEnable" class="btn btn--info">API有効化</a>
					<a id="googleSignin" class="btn btn--info hidden">ログイン</a>
					<a id="gdfileget" class="btn btn--info hidden">ファイル読込</a>
					<a id="googleSignout" class="btn btn--info hidden">ログアウト</a>
					<a id="googleapiDisable" class="btn btn--info hidden">API無効化</a>
				</div>
				<input id="gdid" name="gdid" type="text" placeholder="googleDrive FileID…" class="input-200" disabled />
			</div>
		</div>
-->
		<hr class="sg2 clearfix" />
		<div class="clearfix">
			<div class="fieldname">購入済パック</div>
			<hr class="clearfix" />
			<div id="purchasebox" class="sg2 purchase"></div>
		</div>
		<hr class="sg2 clearfix" />
		<div class="clearfix">
			<div class="fieldname">検索・表示<br />お気に入り</div>
			<div class="inblock">
				<div class="clearfix">
					<select id="searchFavorite" name="searchFavorite">
						<option value="" class="new" selected>(新規作成)</option>
					</select>
					<input id="searchFavoriteNewName" name="searchFavoriteNewName" type="text" placeholder="新規お気に入り名" class="input-200 hidden" />
					<a href="#musicsearch" id="searchFavoriteRead" class="btn btn--info">読込</a>
					<a href="#musicsearch" id="searchFavoriteSave" class="btn btn--info">保存</a>
					<a href="#musicsearch" id="searchFavoriteDelete" class="btn btn--danger">削除</a>
				</div>
			</div>
		</div>
	</div>
	<div id="formtab-7_content" class="tab_content">
		<div class="clearfix">
			<ol>
				<li><h3>[検索条件全般について]</h3>
					全ての検索条件はAND検索になります。<br />
					OR検索は現時点では出来ません。<br />
				</li>
				<li><h3>[条件：譜面]</h3>
					譜面毎のレベル・特殊ノート・ノート数で表示対象を絞り込めます。<br />
					<ul>
						<li><h4>[レベル]</h4>
							「無」～「12」までの表示したいレベルを指定できます。<br />
							例）<br />
							「SPB：1～3」を指定 ⇒ Single・Beginner譜面のある楽曲を表示<br />
							「SPA：12～12」を指定 ⇒ Single・Another譜面のレベルが12の楽曲を表示<br />
							「SPA：1～12、DPA：無～無」 を指定 ⇒ Single・Another譜面があり、Double・Another譜面の無い楽曲を表示<br />
						</li>
						<li><h4>[特殊ノート]</h4>
							「CN(チャージノート)」「BSS(バックスピンスクラッチ)」「HCN(ヘルチャージノート)」を指定できます。<br />
							「HCN」についてはHCNとHBSSのどちらかを含むかどうかで判定しています。<br />
							例）<br />
							「SPN CN：有」を指定 ⇒ Single・Normal譜面にCNのある楽曲を表示<br />
							「SPH CN：有、SPH BSS：有」を指定 ⇒ Single・Hyper譜面にCN・BSSのある楽曲を表示<br />
							「SPN BSS：有、SPH BSS：無」を指定 ⇒ Single・Normal譜面にBSSがあり、Single・Hyper譜面にBSSの無い楽曲を表示<br />
						</li>
						<li><h4>[ノート数]</h4>
							ノート数を指定できます。<br />
							例）<br />
							「SPH 1000～(空白)、SPA (空白)～1300」を指定 ⇒ Single・Hyper譜面が1000ノーツ以上でSingle・Another譜面が1300ノーツ以下の楽曲を表示<br />
						</li>
					</ul>
				</li>
				<li><h3>[条件：楽曲]</h3>
					楽曲のシリーズ・配信条件・配信開始月などの情報で表示対象を絞り込めます。<br />
					<ul>
						<li><h4>[バージョン]</h4>
							「1st style」～「INFINITAS」まで、バージョン毎に楽曲を指定できます。<br />
							ボタンの背景色が青色がON・背景色無しがOFFです。<br />
						</li>
						<li><h4>[配信条件]</h4>
							配信条件毎に楽曲を指定できます。<br />
							ボタンの背景色が青色がON・背景色無しがOFFです。<br />
						</li>
						<li><h4>[配信開始月・BIT配信開始月]</h4>
							配信開始月・BIT配信開始月で楽曲を指定できます。<br />
							例）<br />
							「配信開始月 2016/01～2016/12」を指定 ⇒ 配信開始月が2016年1月～2016年12月の楽曲を表示<br />
							「BIT配信開始月 2018/01～未指定」を指定 ⇒ BITによる配信開始月が2018年1月以降の楽曲を表示<br />
						</li>
						<li><h4>[入手可否]</h4>
							現時点での入手可否で楽曲を指定できます。<br />
							例）<br />
							「入手可否 現在入手可能」を指定 ⇒ 現時点でいづれかの解禁方法で解禁できる楽曲を表示<br />
							「入手可否 現在入手不可」を指定 ⇒ 現時点で解禁不可の楽曲を表示<br />
						</li>
						<li><h4>[曲名・ジャンル・アーティスト]</h4>
							曲名・ジャンル名・アーティスト名を部分一致で検索して楽曲を指定できます。<br />
						</li>
						<li><h4>[BPM]</h4>
							楽曲のBPMで楽曲を指定できます。(可変BPMの楽曲を除く)<br />
							可変BPMの楽曲については、可変の有無で指定できます。
						</li>
					</ul>
				</li>
				<li><h3>[条件：成績]</h3>
					譜面毎のDJ LEVEL・EXスコア・MISS COUNT・クリアランプで表示対象を絞り込めます。<br />
					事前に「設定：データ」でデータを新規作成しておくことが必要です。<br />
					<ul>
						<li><h4>[DJ LEVEL]</h4>
							EXスコアから産出されるDJ LEVELで楽曲を指定できます。
						</li>
						<li><h4>[EXスコア]</h4>
							EXスコアで楽曲を指定できます。
						</li>
						<li><h4>[MISS COUNT]</h4>
							MISS COUNTで楽曲を指定できます。
						</li>
						<li><h4>[クリアランプ]</h4>
							クリアランプで楽曲を指定できます。
						</li>
					</ul>
				</li>
				<li><h3>[楽曲数・BIT]</h3>
					検索結果の楽曲・譜面数と、BIT解禁の譜面数・必要BITが確認できます。<br />
					<br />
<!--                    <ul>
						<li><h4>[DJ LEVEL]</h4>
						</li>
						<li><h4>[EXスコア]</h4>
						</li>
						<li><h4>[MISS COUNT]</h4>
						</li>
						<li><h4>[クリアランプ]</h4>
						</li>
					</ul> -->
				</li>
				<li><h3>[設定：表示]</h3>
					検索結果をどのように表示するかを設定できます。<br />
					<br />
<!--                    <ul>
						<li><h4>[]</h4>
						</li>
						<li><h4>[]</h4>
						</li>
						<li><h4>[]</h4>
						</li>
						<li><h4>[]</h4>
						</li>
					</ul> -->
				</li>
				<li><h3>[設定：データ]</h3>
					データ保存・読込と、購入済みパックの設定・よく使う検索条件の保存・呼び出しができます。<br />
<!--                    <ul>
						<li><h4>[]</h4>
						</li>
						<li><h4>[]</h4>
						</li>
						<li><h4>[]</h4>
						</li>
						<li><h4>[]</h4>
						</li>
					</ul> -->
				</li>
			</ol>
		</div>
	</div>
	<div id="formtab-8_content" class="tab_content">
		<div class="clearfix">
			<div class="fieldname"><label for="new_genre">ジャンル</label></div>
			<div class="inblock"><input id="new_genre" name="new_genre" type="text" placeholder="ジャンル名…" class="input-260" /></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_title">曲名</label></div>
			<div class="inblock"><input id="new_title" name="new_title" type="text" placeholder="曲名…" class="input-260" /></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_artist">アーティスト</label></div>
			<div class="inblock"><input id="new_artist" name="new_artist" type="text" placeholder="アーティスト名…" class="input-260" /></div>
		</div>
		<hr class="clearfix" />
		<div class="clearfix">
			<div class="fieldname"><label for="new_releasetype">配信条件</label></div>
			<div class="inblock">
				<input id="new_releasetype" name="new_releasetype" type="text" placeholder="配信条件…" class="input-260" list="releasetypelist" />
				<datalist id="releasetypelist">
					<option value="Monthly" />
					<option value="BIT" />
					<option value="Default" />
					<option value="DJP" />
					<option value="Championship" />
					<option value="Pack" />
					<option value="PackSS" />
					<option value="PackPM" />
					<option value="PackJU" />
					<option value="PackBPL" />
				</datalist>
			</div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_releasedate">配信開始日</label></div>
			<div class="inblock"><input id="new_releasedate" name="new_releasedate" type="date" placeholder="配信開始日…" class="input-260" /></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_bitdate">BIT解禁日</label></div>
			<div class="inblock"><input id="new_bitdate" name="new_bitdate" type="date" placeholder="BIT解禁日…" class="input-260" /></div>
		</div>
		<hr class="clearfix" />
		<div class="clearfix">
			<div class="fieldname"><label for="new_SPB_Lv">SPB</label></div>
			<div class="inblock"><input id="new_SPB_Lv" name="new_SPB_Lv" type="text" placeholder="LV" class="input-60" /></div>
			<div class="inblock"><input id="new_SPB_notes" name="new_SPB_notes" type="text" placeholder="note" class="input-60" /></div>
			<div class="inblock"><input id="new_SPB_notesCN" name="new_SPB_notesCN" type="text" placeholder="noteCN" class="input-60" /></div>
			<div class="inblock"><input id="new_SPB_notesBSS" name="new_SPB_notesBSS" type="text" placeholder="noteBSS" class="input-60" /></div>
			<div class="inblock"><input id="new_SPB_BPM" name="new_SPB_BPM" type="text" placeholder="BPM" class="input-60" /></div>
			<div class="vname addmusic"><input id="new_SPB_CN" name="new_SPB_CN" type="checkbox" class="releasetype-checkbox" /><label for="new_SPB_CN">CN</label></div>
			<div class="vname addmusic"><input id="new_SPB_BSS" name="new_SPB_BSS" type="checkbox" class="releasetype-checkbox" /><label for="new_SPB_BSS">BSS</label></div>
			<div class="vname addmusic"><input id="new_SPB_HCN" name="new_SPB_HCN" type="checkbox" class="releasetype-checkbox" /><label for="new_SPB_HCN">HCN</label></div>
			<div class="vname addmusic"><input id="new_SPB_HBSS" name="new_SPB_HBSS" type="checkbox" class="releasetype-checkbox" /><label for="new_SPB_HBSS">HBSS</label></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_SPN_Lv">SPN</label></div>
			<div class="inblock"><input id="new_SPN_Lv" name="new_SPN_Lv" type="text" placeholder="LV" class="input-60" /></div>
			<div class="inblock"><input id="new_SPN_notes" name="new_SPN_notes" type="text" placeholder="note" class="input-60" /></div>
			<div class="inblock"><input id="new_SPN_notesCN" name="new_SPN_notesCN" type="text" placeholder="noteCN" class="input-60" /></div>
			<div class="inblock"><input id="new_SPN_notesBSS" name="new_SPN_notesBSS" type="text" placeholder="noteBSS" class="input-60" /></div>
			<div class="inblock"><input id="new_SPN_BPM" name="new_SPN_BPM" type="text" placeholder="BPM" class="input-60" /></div>
			<div class="vname addmusic"><input id="new_SPN_CN" name="new_SPN_CN" type="checkbox" class="releasetype-checkbox" /><label for="new_SPN_CN">CN</label></div>
			<div class="vname addmusic"><input id="new_SPN_BSS" name="new_SPN_BSS" type="checkbox" class="releasetype-checkbox" /><label for="new_SPN_BSS">BSS</label></div>
			<div class="vname addmusic"><input id="new_SPN_HCN" name="new_SPN_HCN" type="checkbox" class="releasetype-checkbox" /><label for="new_SPN_HCN">HCN</label></div>
			<div class="vname addmusic"><input id="new_SPN_HBSS" name="new_SPN_HBSS" type="checkbox" class="releasetype-checkbox" /><label for="new_SPN_HBSS">HBSS</label></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_SPH_Lv">SPH</label></div>
			<div class="inblock"><input id="new_SPH_Lv" name="new_SPH_Lv" type="text" placeholder="LV" class="input-60" /></div>
			<div class="inblock"><input id="new_SPH_notes" name="new_SPH_notes" type="text" placeholder="note" class="input-60" /></div>
			<div class="inblock"><input id="new_SPH_notesCN" name="new_SPH_notesCN" type="text" placeholder="noteCN" class="input-60" /></div>
			<div class="inblock"><input id="new_SPH_notesBSS" name="new_SPH_notesBSS" type="text" placeholder="noteBSS" class="input-60" /></div>
			<div class="inblock"><input id="new_SPH_BPM" name="new_SPH_BPM" type="text" placeholder="BPM" class="input-60" /></div>
			<div class="vname addmusic"><input id="new_SPH_CN" name="new_SPH_CN" type="checkbox" class="releasetype-checkbox" /><label for="new_SPH_CN">CN</label></div>
			<div class="vname addmusic"><input id="new_SPH_BSS" name="new_SPH_BSS" type="checkbox" class="releasetype-checkbox" /><label for="new_SPH_BSS">BSS</label></div>
			<div class="vname addmusic"><input id="new_SPH_HCN" name="new_SPH_HCN" type="checkbox" class="releasetype-checkbox" /><label for="new_SPH_HCN">HCN</label></div>
			<div class="vname addmusic"><input id="new_SPH_HBSS" name="new_SPH_HBSS" type="checkbox" class="releasetype-checkbox" /><label for="new_SPH_HBSS">HBSS</label></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_SPA_Lv">SPA</label></div>
			<div class="inblock"><input id="new_SPA_Lv" name="new_SPA_Lv" type="text" placeholder="LV" class="input-60" /></div>
			<div class="inblock"><input id="new_SPA_notes" name="new_SPA_notes" type="text" placeholder="note" class="input-60" /></div>
			<div class="inblock"><input id="new_SPA_notesCN" name="new_SPA_notesCN" type="text" placeholder="noteCN" class="input-60" /></div>
			<div class="inblock"><input id="new_SPA_notesBSS" name="new_SPA_notesBSS" type="text" placeholder="noteBSS" class="input-60" /></div>
			<div class="inblock"><input id="new_SPA_BPM" name="new_SPA_BPM" type="text" placeholder="BPM" class="input-60" /></div>
			<div class="vname addmusic"><input id="new_SPA_CN" name="new_SPA_CN" type="checkbox" class="releasetype-checkbox" /><label for="new_SPA_CN">CN</label></div>
			<div class="vname addmusic"><input id="new_SPA_BSS" name="new_SPA_BSS" type="checkbox" class="releasetype-checkbox" /><label for="new_SPA_BSS">BSS</label></div>
			<div class="vname addmusic"><input id="new_SPA_HCN" name="new_SPA_HCN" type="checkbox" class="releasetype-checkbox" /><label for="new_SPA_HCN">HCN</label></div>
			<div class="vname addmusic"><input id="new_SPA_HBSS" name="new_SPA_HBSS" type="checkbox" class="releasetype-checkbox" /><label for="new_SPA_HBSS">HBSS</label></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_DPN_Lv">DPN</label></div>
			<div class="inblock"><input id="new_DPN_Lv" name="new_DPN_Lv" type="text" placeholder="LV" class="input-60" /></div>
			<div class="inblock"><input id="new_DPN_notes" name="new_DPN_notes" type="text" placeholder="note" class="input-60" /></div>
			<div class="inblock"><input id="new_DPN_notesCN" name="new_DPN_notesCN" type="text" placeholder="noteCN" class="input-60" /></div>
			<div class="inblock"><input id="new_DPN_notesBSS" name="new_DPN_notesBSS" type="text" placeholder="noteBSS" class="input-60" /></div>
			<div class="inblock"><input id="new_DPN_BPM" name="new_DPN_BPM" type="text" placeholder="BPM" class="input-60" /></div>
			<div class="vname addmusic"><input id="new_DPN_CN" name="new_DPN_CN" type="checkbox" class="releasetype-checkbox" /><label for="new_DPN_CN">CN</label></div>
			<div class="vname addmusic"><input id="new_DPN_BSS" name="new_DPN_BSS" type="checkbox" class="releasetype-checkbox" /><label for="new_DPN_BSS">BSS</label></div>
			<div class="vname addmusic"><input id="new_DPN_HCN" name="new_DPN_HCN" type="checkbox" class="releasetype-checkbox" /><label for="new_DPN_HCN">HCN</label></div>
			<div class="vname addmusic"><input id="new_DPN_HBSS" name="new_DPN_HBSS" type="checkbox" class="releasetype-checkbox" /><label for="new_DPN_HBSS">HBSS</label></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_DPH_Lv">DPH</label></div>
			<div class="inblock"><input id="new_DPH_Lv" name="new_DPH_Lv" type="text" placeholder="LV" class="input-60" /></div>
			<div class="inblock"><input id="new_DPH_notes" name="new_DPH_notes" type="text" placeholder="note" class="input-60" /></div>
			<div class="inblock"><input id="new_DPH_notesCN" name="new_DPH_notesCN" type="text" placeholder="noteCN" class="input-60" /></div>
			<div class="inblock"><input id="new_DPH_notesBSS" name="new_DPH_notesBSS" type="text" placeholder="noteBSS" class="input-60" /></div>
			<div class="inblock"><input id="new_DPH_BPM" name="new_DPH_BPM" type="text" placeholder="BPM" class="input-60" /></div>
			<div class="vname addmusic"><input id="new_DPH_CN" name="new_DPH_CN" type="checkbox" class="releasetype-checkbox" /><label for="new_DPH_CN">CN</label></div>
			<div class="vname addmusic"><input id="new_DPH_BSS" name="new_DPH_BSS" type="checkbox" class="releasetype-checkbox" /><label for="new_DPH_BSS">BSS</label></div>
			<div class="vname addmusic"><input id="new_DPH_HCN" name="new_DPH_HCN" type="checkbox" class="releasetype-checkbox" /><label for="new_DPH_HCN">HCN</label></div>
			<div class="vname addmusic"><input id="new_DPH_HBSS" name="new_DPH_HBSS" type="checkbox" class="releasetype-checkbox" /><label for="new_DPH_HBSS">HBSS</label></div>
		</div>
		<div class="clearfix">
			<div class="fieldname"><label for="new_DPA_Lv">DPA</label></div>
			<div class="inblock"><input id="new_DPA_Lv" name="new_DPA_Lv" type="text" placeholder="LV" class="input-60" /></div>
			<div class="inblock"><input id="new_DPA_notes" name="new_DPA_notes" type="text" placeholder="note" class="input-60" /></div>
			<div class="inblock"><input id="new_DPA_notesCN" name="new_DPA_notesCN" type="text" placeholder="noteCN" class="input-60" /></div>
			<div class="inblock"><input id="new_DPA_notesBSS" name="new_DPA_notesBSS" type="text" placeholder="noteBSS" class="input-60" /></div>
			<div class="inblock"><input id="new_DPA_BPM" name="new_DPA_BPM" type="text" placeholder="BPM" class="input-60" /></div>
			<div class="vname addmusic"><input id="new_DPA_CN" name="new_DPA_CN" type="checkbox" class="releasetype-checkbox" /><label for="new_DPA_CN">CN</label></div>
			<div class="vname addmusic"><input id="new_DPA_BSS" name="new_DPA_BSS" type="checkbox" class="releasetype-checkbox" /><label for="new_DPA_BSS">BSS</label></div>
			<div class="vname addmusic"><input id="new_DPA_HCN" name="new_DPA_HCN" type="checkbox" class="releasetype-checkbox" /><label for="new_DPA_HCN">HCN</label></div>
			<div class="vname addmusic"><input id="new_DPA_HBSS" name="new_DPA_HBSS" type="checkbox" class="releasetype-checkbox" /><label for="new_DPA_HBSS">HBSS</label></div>
		</div>
		<hr class="clearfix" />
		<div class="clearfix"><textarea id="new_comment" name="new_comment" placeholder="コメントを入力…" class="textarea-100p height-8"></textarea></div>
		<div class="clearfix"><textarea id="new_json" name="new_json" placeholder="ここにJSONが表示されます…" class="textarea-100p height-8"></textarea></div>
	</div>
	<label for="formtab-1" class="tab_item formtab-bottom">条件：譜面</label>
	<label for="formtab-2" class="tab_item formtab-bottom">条件：楽曲</label>
	<label for="formtab-3" class="tab_item formtab-bottom">条件：実績</label>
	<label for="formtab-4" class="tab_item formtab-bottom">楽曲数・BIT</label>
	<label for="formtab-5" class="tab_item formtab-bottom">設定：表示</label>
	<label for="formtab-6" class="tab_item formtab-bottom">設定：データ</label>
	<label for="formtab-7" class="tab_item formtab-bottom">使い方</label>
	<label for="formtab-8" class="tab_item formtab-bottom">(管理用1)</label>
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
	<table id='musiclist' class="musiclist">
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
