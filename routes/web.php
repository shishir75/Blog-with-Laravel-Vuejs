<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get( '/', function () {
    return view( 'welcome' );
} );

Auth::routes();

// Route::get( '/{anypath}', 'HomeController@index' )->where( 'path', '.*' ); // it should be in this position to work

Route::group( ['middleware' => 'auth', 'namespace' => 'Admin', 'as' => 'admin.'], function () {
    Route::resource( 'category', 'CategoryController' );
    Route::resource( 'post', 'PostController' );
} );
