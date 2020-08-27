<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'posts', function ( Blueprint $table ) {
            $table->id();
            $table->unsignedBigInteger( 'category_id' );
            $table->unsignedBigInteger( 'user_id' );
            $table->unsignedBigInteger( 'comment_id' )->nullable();
            $table->string( 'title' )->unique();
            $table->string( 'slug' )->unique();
            $table->string( 'photo' )->nullable();
            $table->text( 'description' )->nullable();
            $table->timestamps();

            $table->foreign( 'user_id' )->references( 'id' )->on( 'users' );
            $table->foreign( 'category_id' )->references( 'id' )->on( 'categories' );
        } );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists( 'posts' );
    }
}
