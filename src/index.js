import hyperlinePlugins from './lib/plugins'

exports.onRendererWindow = function (window) {
  window.stripPlugins = (window.stripPlugins || []).concat(hyperlinePlugins)
}
