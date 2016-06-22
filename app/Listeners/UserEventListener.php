<?php

namespace App\Listeners;

use App\Events\Event;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Models\UserLog;
use Illuminate\Support\Facades\Request;

class UserEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Event  $event
     * @return void
     */
    public function handle(Event $event)
    {
        if(($method = $event->type) && ($user = $event->user)) {
            $this->$method($user);
        }
    }

    private function onUserLogin($user)
    {
        $data = [
            'user_id' => $user->id,
            'url'     => Request::url(),
            'content' => $user->username.'登录系统。',
            'ip'      => Request::getClientIp()
        ];
        UserLog::create($data);
    }

    private function onUserLogout($user)
    {
        $data = [
            'user_id' => $user->id,
            'url'     => Request::url(),
            'content' => $user->username.'登出系统。',
            'ip'      => Request::getClientIp()
        ];
        UserLog::create($data);
    }
}
