<template>
    <div v-if="containsTitle">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    </div>
    <div v-for="index in count" :key="index" role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center mt-10">
        <div class="w-full p-8"> 
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mt-4"></div>
        </div>
        <span class="sr-only">Loading...</span>
    </div>
</template>

<script>
export default {
    props: {
        count: Number,
        containsTitle: Boolean
    }
}
</script>