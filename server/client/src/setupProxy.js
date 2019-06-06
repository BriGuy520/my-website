const proxy = require('http-proxy-middleware');

module.exports = function(app){
  
  app.use(proxy('/api/signup', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/api/signin', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/api/**', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/*', {
    target: 'http://localhost:5000'
  }))
  
  app.use(proxy('/api/blog/*', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/api/blog/*/comment', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/api/blog/*/like', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/api/comment/*/like', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/auth/google', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/auth/twitter', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/auth/facebook', {
    target: 'http://localhost:5000'
  }))

  app.use(proxy('/auth/github', {
    target: 'http://localhost:5000'
  }))
}