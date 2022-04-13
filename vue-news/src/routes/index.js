import Vue from 'vue';
import VueRouter from 'vue-router';
import contents from './contents.js';

Vue.use(VueRouter);

export const router = new VueRouter
({
    mode: 'history', // http://localhost:8080/#/ 처음 띄우면 이렇게 뜨는데, uri에 #을 없애준다.
    routes: [
        {
            path: '/',
            redirect: '/news' // uri 가 없이 / 로 들어오면 /news로 리다이렉트 해준다. 
        },
        ...contents                           
    ]
})