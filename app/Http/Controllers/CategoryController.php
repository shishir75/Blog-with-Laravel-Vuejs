<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::with( 'posts' )->get();

        return response()->json( [
            'categories' => $categories,
        ], 200 );
    }

    public function show( $id )
    {
        $posts = Post::with( 'user', 'category' )->where( 'category_id', $id )->latest()->get();

        return response()->json( [
            'posts' => $posts,
        ], 200 );
    }
}
