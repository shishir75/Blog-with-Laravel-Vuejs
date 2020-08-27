<?php

namespace App;

use App\Category;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo( Category::class );
    }

    public function user()
    {
        return $this->belongsTo( User::class );
    }
}
