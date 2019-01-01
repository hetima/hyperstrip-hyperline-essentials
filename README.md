# hyperstrip-hyperline-essentials

This is [Hyper](https://hyper.is/) / [HyperStrip](https://github.com/hetima/hyperstrip) plugin that ported from [HyperLine](https://github.com/Hyperline/hyperline).

includes `hostname`, `ip`, `memory`, `battery`, `cpu`, `network`, `time` and `uptime`.

![screenshot](https://user-images.githubusercontent.com/33700/50569259-18009600-0da4-11e9-9de8-b8faeea44c7e.png)
# Installation

edit `~/.hyper.js` or other usual ways.

```js
plugins: [
  'hyperstrip',
  'hyperstrip-hyperline-essentials',
],
```

# Configuration

edit `~/.hyper.js` for items what you want to use (Every plugin has `hyperline-` prefix).

```js
  config: {
    hyperstrip: {
      statusBar: {
        plugins: [
          'hyperline-hostname',
          'hyperline-ip',
          'hyperline-memory',
          'hyperline-battery',
          'hyperline-cpu',
          'hyperline-network',
          'hyperline-time',
          'hyperline-uptime',
        ]
      }
    },
```

`hyperline-time` has brief configuration `format` depends on [Moment.js](https://momentjs.com/).

```js
'hyperline-time', { format: 'LTS' },
```

# Author
hyperstrip-hyperline-essentials
- hetima

based on HyperLine
- Nick Tikhonov [@nicktikhonov](https://github.com/nicktikhonov)
- Tim Neutkens [@timneutkens](https://github.com/timneutkens)
- Stefan Ivic [@stefanivic](https://github.com/stefanivic)
- Henrik Dahlheim [@henrikdahl](https://github.com/henrikdahl)
