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
            'name'     => 'admin',
            'email'    => str_random(8).'@gmail.com',
            'mobile'   => '18356208429',
            'password' => bcrypt('secret'),
            'is_admin' => 1,
        ]);
    }
}
