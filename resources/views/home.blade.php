<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>gogo后台</title>
    <base href="/">
    @if (App::environment('production'))
        <link href="{{ env('STATIC_DOMAIN') . elixir('css/bootstrap.css') }}" rel="stylesheet">
        <link href="{{ env('STATIC_DOMAIN') . elixir('css/font-awesome.css') }}" rel="stylesheet">
        <link href="{{ env('STATIC_DOMAIN') . elixir('css/app.css') }}" rel="stylesheet">
    @else
        <link href="{{ env('STATIC_DOMAIN') . 'css/bootstrap.css' }}" rel="stylesheet">
        <link href="{{ env('STATIC_DOMAIN') . 'css/font-awesome.css' }}" rel="stylesheet">
        <link href="{{ env('STATIC_DOMAIN') . 'css/app.css' }}" rel="stylesheet">
    @endif


</head>
<body ng-controller="bodyController">

<div top-bar></div>

<div ui-view class="viewer"></div>

<div flash-message="5000"></div>

    <script>
        var _global = {!! $global !!};
    </script>
@if (App::environment('production'))

    <script src="{{ env('STATIC_DOMAIN') . elixir('js/require.js') }}"></script>
    <script src="{{ env('STATIC_DOMAIN') . elixir('js/global.js') }}"></script>
    <script src="{{ env('STATIC_DOMAIN') . elixir('js/libs.js') }}"></script>
    <script src="{{ env('STATIC_DOMAIN') . elixir('js/bootstrap.js') }}"></script>
    <script>
        requirejs.config({
            baseUrl: "{{env('STATIC_DOMAIN') . '/build/js' }}",
            paths: {
                templates:'{{substr( elixir('js/templates.js') , 10 , -3) }}',
                ckeditor: 'ckeditor/ckeditor',
                baiduMap:'http://api.map.baidu.com/getscript?v=2.0&ak=D951aa1675b2f5c2de34d1dba2662350',
                wxLogin:'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin'
            }
        });
        require(['bootstrap'],function(bootstrap){});
    </script>
@else
    <script src="{{ env('STATIC_DOMAIN') . '/assets/js/libs/jquery.js' }}"></script>
    <script src="{{ env('STATIC_DOMAIN') . '/assets/js/libs/jquery-ui.js' }}"></script>
    <script src="{{ env('STATIC_DOMAIN') . '/assets/js/libs/require.js' }}"></script>
    <script src="{{ env('STATIC_DOMAIN') . '/assets/js/config.js' }}"></script>
    <script>
        requirejs.config({
            baseUrl: '/assets/js',
            shim: {
                templates: {
                    deps: ['angular']
                }
            }
        });
        require(['bootstrap'],function(bootstrap){});
    </script>
@endif

</body>
</html>
