<!DOCTYPE html>
<html lang="ja">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge, chrome=1" />
      <title>Vuebnb</title>
      <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css" />
      <link rel="stylesheet" href="{{ asset('css/vue-style.css') }}" type="text/css">
      <script>
         window.vuebnb_server_data = "{!! addslashes(json_encode($data)) !!}";
         window.csrf_token = "{{ csrf_token() }}";
      </script>
   </head>
   <body>
      <div id="app"></div>

      <script src="{{ asset('js/app.js') }}"></script>
   </body>
</html>
