module.exports = roll;

function roll(options) {
  options = options || { };
  options.width = options.width || 640;
  options.height = options.height || 480;
  options.title = options.title || '';
  var content = getHTMLContent(options);
  document.open();
  document.write(content);
  document.close();
  document.title = options.title;
}

function getHTMLContent(options) {
  return [
"<!DOCTYPE html>",
"<html>",
"<head>",
"<style>",
" .center { position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }",
" iframe { visibility: hidden; }",
" body { padding:0; background: black; margin:0;position:absolute; width: 100%; height: 100%;}",
" svg path,svg rect{  fill: #FF6700; }",
" </style>",
"</head>",
"<body>",
"    <div id='player'>",
"    </div>",
'    <svg id="loading" class="center" version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">',
'      <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(69.4346 25 25)">',
'        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>',
'      </path>',
'    </svg>',
"    <script>",
"      var tag = document.createElement('script');",
"      tag.src = 'https://www.youtube.com/iframe_api';",
"      var firstScriptTag = document.getElementsByTagName('script')[0];",
"      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);",
"      var player;",
"      function onYouTubeIframeAPIReady() {",
"        player = new YT.Player('player', {",
"          height: '" + options.height + "',",
"          width: '" + options.width + "',",
"          videoId: 'dQw4w9WgXcQ',",
"          origin: location.origin,",
"          events: {",
"            'onReady': onPlayerReady,",
"            'onStateChange': onPlayerStateChange",
"          }",
"        });",
"      }",
"      // 4. The API will call this function when the video player is ready.",
"      function onPlayerReady(event) {",
"        event.target.playVideo();",
"      }",
"      function onPlayerStateChange(event) {",
"        if (event.data == YT.PlayerState.PLAYING) {",
" var playerElement = document.getElementById('player');",
" playerElement.setAttribute('class', 'center');",
"          playerElement.style.visibility = 'visible';",
"          document.getElementById('loading').style.visibility = 'hidden';",
"        }",
"      }",
"    </script>",
"  </body>",
"</html>"
  ].join('\n');

}
