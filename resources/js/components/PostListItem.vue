<template>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
            <div class="p-8">
                <router-link :to="{ name: 'post', params: { id: post.id } }">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline">{{ post.title }}</div>
                </router-link>
                <p class="mt-2 text-slate-500">{{ post.lead }}</p>
                <div class="text-sm text-gray-600 mt-5">
                    By <router-link :to="{ name: 'user', params: { id: post.author.id } }"><span class="hover:underline">{{ post.author.name }}</span></router-link> &nbsp;In <router-link :to="{ name:'topic', params: { slug: post.topic.slug } }"><span class="hover:underline">{{ post.topic.name }}</span></router-link> · {{ $filter.timeago(post.created_at) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>