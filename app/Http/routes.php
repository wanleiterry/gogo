<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');

Route::group(['prefix' => 'auth'], function () {
    // Route::get('login', 'Auth\AuthController@getLogin');
    Route::post('login.json', 'Auth\AuthController@postLogin');
    Route::get('logout.json', 'Auth\AuthController@getLogout');
    Route::post('register.json', 'Auth\AuthController@postRegister');
});

Route::group(['prefix' => 'password'], function() {
    Route::post('email.json', 'Auth\PasswordController@postEmail');
});

Route::group(['prefix' => 'goods'], function () {
    Route::get('list.json', 'Goods\GoodsController@getGoodsList');
});

Route::any('{all}', 'HomeController@index')->where('all', '.*');
