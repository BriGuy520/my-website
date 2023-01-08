const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  
  app.use(createProxyMiddleware('/api/signup', {
    target: 'http://localhost:5000'
  }));

  app.use(createProxyMiddleware('/api/signin', {
    target: 'http://localhost:5000'
  }));

  app.use(createProxyMiddleware('/api/**', {
    target: 'http://localhost:5000'
  }));
  
  app.use(createProxyMiddleware('/api/blog/*', {
    target: 'http://localhost:5000'
  }))

  app.use(createProxyMiddleware('/api/blog/*/comment', {
    target: 'http://localhost:5000'
  }));

  app.use(createProxyMiddleware('/api/blog/*/like', {
    target: 'http://localhost:5000'
  }))

  app.use(createProxyMiddleware('/api/comment/*/like', {
    target: 'http://localhost:5000'
  }));

  app.use(createProxyMiddleware('/auth/google', {
    target: 'http://localhost:5000'
  }))

  app.use(createProxyMiddleware('/auth/twitter', {
    target: 'http://localhost:5000'
  }));

  app.use(createProxyMiddleware('/auth/facebook', {
    target: 'http://localhost:5000'
  }));

  app.use(createProxyMiddleware('/auth/github', {
    target: 'http://localhost:5000'
  }));
}