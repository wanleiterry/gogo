<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class LoginRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'     => 'required',
            'password' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required'     => json_encode(array('message'=>'用户名必填','type'=>'LoginRequest')),
            'password.required' => json_encode(array('message'=>'密码必填','type'=>'LoginRequest')),
        ];
    }
}
