<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define( Post::class, function ( Faker $faker ) {
    $title = $faker->sentence;

    return [
        'category_id' => rand( 1, 10 ),
        'user_id'     => rand( 1, 10 ),
        'comment_id'  => rand( 1, 10 ),
        'title'       => $title,
        'slug'        => Str::slug( $title ),
        'description' => $faker->paragraph,
        'photo'       => $faker->imageUrl,
    ];
} );
