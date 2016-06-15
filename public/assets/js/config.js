requirejs.config({
    urlArgs: 'rand=' + (new Date()).getTime(), // for development
    baseUrl: '/assets/js',
    paths: {
        angular: 'libs/angular',
        jquery: 'libs/jquery',
        'ui.router': 'libs/angular-ui-router',
        'ui.bootstrap':'libs/ui-bootstrap-tpls',
        'ui.select':'libs/select',
        'ui.sortable':'libs/sortable',
        'jquery-ui':'libs/jquery-ui',
        ngProgress: 'libs/ngprogress',
        xeditable: 'libs/xeditable',
        ckeditor: 'libs/ckeditor/ckeditor',
        ngCkeditor: 'libs/ng-ckeditor',
        ngDragDrop:'libs/angular-dragdrop',
        ngResource:'libs/angular-resource',
        ngClipboard:'libs/ngClip',
        ZeroClipboard:'libs/ZeroClipboard',
        flashAlert: 'libs/angular-flash-alert',
        ngAnimate: 'libs/angular-animate',
        moment: 'libs/moment',
        daterangepicker: 'libs/daterangepicker',
        ngDateRange: 'libs/ng-bs-daterangepicker',
        iframetransport: 'libs/jquery.iframe-transport',
        fileupload: 'libs/jquery.fileupload',
        ngPopover:'libs/ngPopover',
        colorPicker:'libs/colorpicker',
        clockPicker:'libs/bootstrap-clockpicker',
        ngSanitize:'libs/angular-sanitize',
        lhgcalendar: 'libs/lhgcalendar',
        'mwl.confirm':'libs/angular-bootstrap-confirm/angular-bootstrap-confirm',
        baiduMap:'http://api.map.baidu.com/getscript?v=2.0&ak=D951aa1675b2f5c2de34d1dba2662350',
        wxLogin:'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        'ui.router': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'ui.select': {
            deps: ['angular']
        },
        'ngProgress': {
            deps: ['angular']
        },
        xeditable: {
            deps: ['angular']
        },
        ngCkeditor: {
            deps: ['angular', 'ckeditor']
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        ngDragDrop: {
            deps: ['angular','jquery-ui']
        },
        'ui.sortable':{
            deps: ['angular','jquery-ui']
        },
        ngResource:{
            deps: ['angular']
        },
        flashAlert:{
            deps: ['angular']
        },
        ngAnimate:{
            deps: ['angular']
        },
        ngPopover:{
            deps: ['angular']
        },
        daterangepicker: {
            deps: ['moment', 'jquery']
        },
        ngDateRange: {
            deps: ['angular', 'daterangepicker']
        },
        fileupload: {
            deps: ['jquery-ui', 'iframetransport']
        },
        colorPicker:{
            deps: ['jquery']
        },
        clockPicker:{
            deps: ['jquery']
        },
        ngSanitize:{
            deps: ['angular']
        },
        'mwl.confirm':{
            deps: ['ui.bootstrap', 'ngSanitize']
        }
    },
    packages: [
        {
            name: 'echarts',
            location: 'libs/echarts',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: 'libs/zrender',
            main: 'zrender'
        }
    ]
});