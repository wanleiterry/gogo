<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'username' => 'admin',
            'realname' => '管理员',
            'email'    => str_random(8).'@gmail.com',
            'mobile'   => '18356208429',
            'password' => bcrypt('secret'),
            'is_admin' => 1,
        ]);
    }
}
