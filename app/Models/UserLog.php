<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserLog extends Model
{
    protected $table = 'user_log';

    protected $fillable = ['user_id', 'type', 'url', 'content', 'ip'];

    protected $guarded = ['id'];

    public $timestamps = true;
}
