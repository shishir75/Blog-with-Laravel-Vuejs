<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get( '/', function () {
    return view( 'public.index' );
} );

Auth::routes();

Route::get( '/home', 'HomeController@index' )->name( 'home' );

Route::get( '/{anypath}', 'HomeController@index' )->where( 'path', '.*' ); // it should be in this position to work

Route::group( ['middleware' => 'auth', 'namespace' => 'Admin', 'as' => 'admin.', 'prefix' => 'api'], function () {
    Route::resource( 'category', 'CategoryController' );
    Route::resource( 'post', 'PostController' );
} );

// Frontend Route
Route::group( ['prefix' => 'public'], function () {
    Route::resource( 'blog', 'BlogController' );
} );
