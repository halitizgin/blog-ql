import './bootstrap';
import { createApp, h } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import PostList from './PostList.vue';
import Post from './Post.vue';
import TopicPostList from './TopicPostList.vue';
import UserPostList from './UserPostList.vue';
import NotFound from './NotFound.vue';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';
import moment from 'moment';

const routes = [
    { 
        path: '/',
        name: 'index',
        component: PostList 
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
    {
        path: '/topic/:slug',
        name: 'topic',
        component: TopicPostList
    },
    {
        path: '/user/:id',
        name: 'user',
        component: UserPostList
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    cache,
    uri: "http://127.0.0.1:8000/graphql"
});

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient
});

const app = createApp({});
app.config.globalProperties.$filter = {
    timeago(value){
        return moment(value).fromNow();
    },
    longDate(value){
        return moment(value).format("MMMM Do YYYY");
    }
}

app.use(router);
app.use(apolloProvider);
app.mount("#app");