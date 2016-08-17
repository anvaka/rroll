# rroll

Render rickroll page. [Demo](https://anvaka.github.io/

Update: [YouTube changed URL to his video to have RICKROLL in it](https://www.youtube.com/watch?v=dQw4w9WgXcQ). I guess it's sign of respect...

# usage

``` js
var roll = require('rroll');
roll();
```

You can also specify dimensions of video player (in pixels):

``` js
var roll = require('rroll');
roll({
  width: 640,
  height: 480
});
```

Finally you can also set page title:

``` js
var roll = require('rroll');
roll({
  width: 640,
  height: 480,
  title: 'My awesome page'
});
```

# install

With [npm](https://www.youtube.com/watch?v=dQw4w9WgXcQ) do:

```
npm install rroll
```

# license

Code is licensed under MIT. The video is served from YouTube and belongs to the
publisher.
