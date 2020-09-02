<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Post;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class PostController extends Controller
{
    public function __construct()
    {
        if ( !Request::ajax() ) {
            return abort( 404 );
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with( ['category', 'user'] )->latest()->get();

        return response()->json( [
            'posts' => $posts,
        ], 200 );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store( PostRequest $request )
    {
        $strpos = strpos( $request->photo, ';' );
        $subString = Str::substr( $request->photo, 0, $strpos );
        $extention = explode( '/', $subString )[1];

        $image_name = time() . "." . $extention;

        $img = Image::make( $request->photo )->resize( 200, 200 );
        $path = public_path() . "/upload/";
        $img->save( $path . $image_name );

        $post = new Post();
        $post->user_id = auth()->user()->id;
        $post->category_id = $request->category_id;
        $post->title = $request->title;
        $post->slug = Str::slug( $request->title );
        $post->description = $request->description;
        $post->photo = $image_name;
        $post->save();

        return ['message' => 'Post Created'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show( Post $post )
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit( Post $post )
    {
        return response()->json( [
            'post' => $post,
        ], 200 );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update( PostRequest $request, Post $post )
    {
        if ( $request->photo != $post->photo ) {

            // Delete Old Photo
            $path = public_path() . "/upload/";
            $old_image = $path . $post->photo;
            if ( file_exists( $old_image ) ) {
                @unlink( $old_image );
            }

            // Save New Photo
            $strpos = strpos( $request->photo, ';' );
            $subString = Str::substr( $request->photo, 0, $strpos );
            $extention = explode( '/', $subString )[1];

            $image_name = time() . "." . $extention;

            $img = Image::make( $request->photo )->resize( 200, 200 );
            $img->save( $path . $image_name );

        } else {
            $image_name = $post->photo;
        }

        $post->user_id = auth()->user()->id;
        $post->category_id = $request->category_id;
        $post->title = $request->title;
        $post->slug = Str::slug( $request->title );
        $post->description = $request->description;
        $post->photo = $image_name;
        $post->save();

        return ['message' => 'Post Updated'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id )
    {
        $post = Post::findOrFail( $id );

        $image_path = public_path() . "/upload/";
        $image = $image_path . $post->photo;

        if ( file_exists( $image ) ) {
            @unlink( $image );
        }
        $post->delete();
    }
}
