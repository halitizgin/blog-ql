<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laravel Vue.js Graphql Project</title>
  @vite('resources/css/app.css')
  @vite('resources/css/loading.css')
</head>
  <body>
      <div id="app">
        <router-view></router-view>
      </div>
      @vite("resources/js/app.js")
  </body>
</html>