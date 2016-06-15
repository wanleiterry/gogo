var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCss = require('gulp-minify-css');
var requirejsOptimize = require("gulp-requirejs-optimize");
var uglify = require('gulp-uglify');
var elixir = require('laravel-elixir');
var templateCache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-minify-html');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
//css
elixir.extend('scss', function() {
    gulp.task('scss', function() {
        gulp.src('public/assets/sass/app.scss')
            .pipe(sass())
            .pipe(minifyCss())
            .pipe(gulp.dest('./public/css'));
    });
    return this.queueTask('scss');
});

//js
elixir.extend('js', function() {
    gulp.task('js', function() {
        gulp.src('public/assets/js/libs/require.js')
            .pipe(uglify())
            .pipe(gulp.dest("public/js"));

        gulp.src('public/assets/js/core/global.js')
            .pipe(requirejsOptimize({
                name: 'core/global',
                mainConfigFile: "public/assets/js/config.js",
                baseUrl: 'public/assets/js',
                exclude: ['exclude']
            }))
            .pipe(gulp.dest("public/js"));

        gulp.src('public/assets/js/core/libs.js')
            .pipe(requirejsOptimize({
                name: 'core/libs',
                mainConfigFile: "public/assets/js/config.js",
                baseUrl: 'public/assets/js',
                exclude: ['core/global', 'exclude']
            }))
            .pipe(gulp.dest("public/js"));

        gulp.src('public/assets/js/bootstrap.js')
            .pipe(requirejsOptimize({
            	name: 'bootstrap',
                optimize: 'none',
                mainConfigFile: "public/assets/js/config.js",
                baseUrl: 'public/assets/js',
                exclude: ['core/global', 'core/libs', 'exclude']
            }))
            .pipe(gulp.dest("public/js"));
    });
    return this.queueTask('js');
});

//html
elixir.extend('html', function() {
    gulp.task('html', function () {
        var opts={
            root : 'assets/js/apps/',
            standAlone:true,
            templateHeader :'angular.module("<%= module %>"<%= standalone %>,[]).run(["$templateCache", function($templateCache) {'
        }

        return gulp.src(['public/assets/js/apps/**/templates/*.html','public/assets/js/apps/**/templates/**/*.html'])
            .pipe(minifyHTML())
            .pipe(templateCache('templates.js',opts))
            .pipe(gulp.dest("public/js"));
    });
    return this.queueTask('html');
});

elixir(function(mix) {
    mix.copy('bower_components/font-awesome/css/font-awesome.min.css', 'public/css/font-awesome.css')
        .copy('bower_components/font-awesome/fonts', 'public/fonts')
        .copy('bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.css')
        .copy('bower_components/requirejs/require.js', 'public/assets/js/libs/require.js')
        .copy('bower_components/jquery/dist/jquery.js', 'public/assets/js/libs/jquery.js')
        .copy('bower_components/bootstrap/dist/js/bootstrap.js', 'public/assets/js/libs/bootstrap.js')
        .copy('bower_components/angularjs/angular.js', 'public/assets/js/libs/angular.js')
        .copy('bower_components/angular-ui-router/release/angular-ui-router.js', 'public/assets/js/libs/angular-ui-router.js')
        .copy('bower_components/angular-bootstrap/ui-bootstrap.js', 'public/assets/js/libs/ui-bootstrap.js')
        .copy('bower_components/angular-bootstrap/ui-bootstrap-tpls.js', 'public/assets/js/libs/ui-bootstrap-tpls.js')
        .copy('bower_components/ng-ckeditor/ng-ckeditor.js', 'public/assets/js/libs/ng-ckeditor.js')
        .copy('bower_components/jquery-ui/jquery-ui.js', 'public/assets/js/libs/jquery-ui.js')
        .copy('bower_components/angular-dragdrop/src/angular-dragdrop.js', 'public/assets/js/libs/angular-dragdrop.js')
        .copy('bower_components/angular-resource/angular-resource.js', 'public/assets/js/libs/angular-resource.js')
        .copy('bower_components/zeroclipboard/dist/ZeroClipboard.swf','public/assets/js/libs/zeroclipboard/ZeroClipboard.swf')
        .copy('bower_components/zeroclipboard/dist/ZeroClipboard.js','public/assets/js/libs/ZeroClipboard.js')
        .copy('bower_components/angular-flash-alert/src/angular-flash.js','public/assets/js/libs/angular-flash-alert.js')
        .copy('bower_components/angular-animate/angular-animate.js','public/assets/js/libs/angular-animate.js')
        .copy('bower_components/echarts/src','public/assets/js/libs/echarts')
        .copy('bower_components/zrender/src','public/assets/js/libs/zrender')
        .copy('bower_components/angular-xeditable/dist/js/xeditable','public/assets/js/libs/xeditable')
        .copy('bower_components/angular-loading-bar/build/loading-bar.js','public/assets/js/libs/loading-bar.js')
        .copy('bower_components/angular-sanitize/angular-sanitize.js','public/assets/js/libs/angular-sanitize.js')
        .copy('bower_components/angular-validation/dist','public/assets/js/libs/angular-validation')
        .copy('bower_components/clockpicker/dist/bootstrap-clockpicker.js','public/assets/js/libs/bootstrap-clockpicker.js')
        .scss()
        .js()
        .html()
        .version([
            'css/app.css'
            ,'css/bootstrap.css'
            ,'css/font-awesome.css'
            ,'js/require.js'
            ,'js/global.js'
            ,'js/libs.js'
            ,'js/bootstrap.js'
            ,'js/templates.js'
        ]);
});