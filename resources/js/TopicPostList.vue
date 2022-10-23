<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 my-10">
        <div v-if="$apollo.loading || error">
            <Loading :count="5" :containsTitle="true"></Loading>
        </div>
        <div v-else>
            <h2 class="text-4xl"><router-link :to="{ name: 'index' }"><span class="hover:underline">All Posts</span></router-link> / {{ topic.name }} </h2>
            <PostListItem v-for="post in topic.posts" :key="post.id" :post="post" class="mt-10"></PostListItem>
        </div>
    </div>
</template>

<script>
import PostListItem from './components/PostListItem.vue';
import Loading from './components/Loading.vue';
import gql from 'graphql-tag';
export default {
    data: {
        error: false
    },
    components: {
        PostListItem,
        Loading
    },
    apollo: {
        topic: {
            query: gql`
                query($slug: String!)
                {
                    topic(slug: $slug)
                    {
                        name
                        slug
                        posts
                        {
                            id
                            title
                            lead
                            created_at
                            author
                            {
                                id
                                name
                            }
                            topic
                            {
                                name
                                slug
                            }
                        }
                    }
                }
            `,
            variables(){
                return {
                    slug: this.$route.params.slug
                }
            },
            error(){
                this.error = true;
                this.$router.push({ name: '404' });
            }
        }
    }
}
</script>