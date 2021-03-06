const { h } = require('hyperapp')
const listView = require('./listView')
const itemView = require('./itemView')

const views = module.exports = {
  '/': listView('top'),
  '/top': listView('top'),
 '/top/:page': listView('top'),
 '/new': listView('new'),
 '/new/:page': listView('new'),
 '/show': listView('show'),
 '/show/:page': listView('show'),
 '/ask': listView('ask'),
 '/ask/:page': listView('ask'),
 '/jobs': listView('job'),
 '/jobs/:page': listView('job'),
 '/item/:id': itemView,
 '*': (model, actions) => <div>404</div>
}

