<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Post;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::factory(5)->create();

        Topic::create(['name' => 'Featured Sites', 'slug' => 'featured']);
        Topic::create(['name' => 'Useful Links', 'slug' => 'links']);
        Topic::create(['name' => 'Guides & Tutorials', 'slug' => 'tutorials']);
    
        Post::factory(20)->create();
    }
}
