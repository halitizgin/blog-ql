<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 mt-20">
        <h2 class="text-4xl"><router-link :to="{ name: 'index' }"><span class="hover:underline">All Posts</span></router-link></h2>
        <div v-if="$apollo.loading || error">
            Loading...
        </div>
        <div v-else>
            <div class="text-lg text-gray-600">
                By <router-link :to="{ name: 'user', params: { id: post.author.id } }"><span class="hover:underline">{{ post.author.name }}</span></router-link> In <router-link :to="{ name:'topic', params: { slug: post.topic.slug } }"><span class="hover:underline">{{ post.topic.name }}</span></router-link> · {{ $filter.timeago(post.created_at) }}
            </div>
            <h1 class="text-5xl mt-10 font-bold mb-12">{{ post.title }}</h1>
            <p class="text-gray-700 pb-3 mb-12 whitespace-pre-line">{{ post.content }}</p>
            <div class="mb-24 flex">
                <div class="mr-6">
                    <img :src="'/storage/faces/' + post.author.avatar" class="w-16 h-16 rounded-full" alt="">
                </div>
                <div class="flex flex-col justify-center">
                    <div class="text-xl text-gray-600">Written By <router-link :to="{ name: 'user', params: { id: post.author.id } }"><span class="hover:underline">{{ post.author.name }}</span></router-link> </div>
                    <div class="text-gray-600">Published in <router-link :to="{ name:'topic', params: { slug: post.topic.slug } }"><span class="hover:underline">{{ post.topic.name }}</span></router-link> on {{ $filter.longDate(post.created_at) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    data: {
        error: false
    },
    apollo: {
        post: {
            query: gql`
                query ($id: ID!) 
                {
                    post(id: $id)
                    {
                        id
                        title
                        lead
                        content
                        created_at
                        author
                        { 
                            id 
                            name
                            avatar
                        }
                        topic
                        {
                            name
                            slug
                        }
                    }
                }
            `,
            variables(){
                return {
                    id: this.$route.params.id
                }
            },
            error(){
                this.error = true;
                this.$router.push({ name: '404' });
            }
        }
    },
}
</script>