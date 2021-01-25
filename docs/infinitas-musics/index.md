---
after_footer_scripts:
  - https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
  - ./scripts/musics.js
title: "beatmania IIDX infinitas 楽曲一覧"
---
<div id="ret"></div>

<p>Drive API Quickstart</p>

<!--Add buttons to initiate auth sequence and sign out-->
<button id="authorize_button" style="display: none;">Authorize</button>
<button id="signout_button" style="display: none;">Sign Out</button>
<button id="get_button" >Get File</button>

<pre id="content" style="white-space: pre-wrap;"></pre>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
<script type="text/javascript" src="./scripts/musics.js"></script>
<script async defer src="https://apis.google.com/js/api.js"
    onload="this.onload=function(){};handleClientLoad()"
    onreadystatechange="if (this.readyState === 'complete') this.onload()">
</script>
