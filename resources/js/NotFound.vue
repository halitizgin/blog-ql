<template>
    <div class="w-screen h-screen bg-gray-200 flex justify-center">
        <div class="text-center text-gray-600 self-center">
            <h1 class="text-6xl font-sans">404</h1>
            <h3 class="text-4xl font-sans">This page cannot be found!</h3>
        </div>
        <div class="absolute bottom-0 mb-12 text-gray-600 text-center text-xl">
            <span class="opacity-50">Take me to</span>&nbsp;
            <a href="#" class="border-b" @click="$router.push({ name: 'index' })">Home</a>
        </div>
    </div>
</template>