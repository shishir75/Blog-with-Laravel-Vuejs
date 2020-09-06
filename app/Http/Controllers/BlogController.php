<?php

namespace App\Http\Controllers;

use App\Post;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with( 'user', 'category' )->latest()->get();

        return response()->json( [
            'posts' => $posts,
        ], 200 );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show( $id )
    {
        $post = Post::with( 'user', 'category' )->where( 'id', $id )->first();

        return response()->json( [
            'post' => $post,
        ], 200 );
    }
}
