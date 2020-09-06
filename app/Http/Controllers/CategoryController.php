<?php

namespace App\Http\Controllers;

use App\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::with( 'posts' )->get();

        return response()->json( [
            'categories' => $categories,
        ], 200 );
    }
}
