<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use Illuminate\Support\Facades\Request;

// use Illuminate\Http\Request;

class CategoryController extends Controller
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
        $categories = Category::latest()->get();

        return response()->json( [
            'categories' => $categories,
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
    public function store( CategoryRequest $request )
    {
        $category = new Category();
        $category->name = $request->name;
        $category->save();

        return ['message' => "Category Created"];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show( Category $category )
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit( $id )
    {
        $category = Category::findOrFail( $id );

        return response()->json( [
            'category' => $category,
        ], 200 );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update( CategoryRequest $request, $id )
    {
        $category = Category::findOrFail( $id );
        $category->name = $request->name;
        $category->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id )
    {
        $category = Category::findOrFail( $id );

        //dd( $category );
        $category->delete();
    }
}
