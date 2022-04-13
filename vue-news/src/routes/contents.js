import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
// import createListView from '../views/CreateListView';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import bus from '../utils/bus.js';
import {store} from '../store/index.js';

export default  [
{
            path: '/news', // path : url 주소
            name: 'news',
            component: NewsView, // component : url 주소로 갔을 때 표시되는 컴포넌트
            // component: createListView('NewsView')
            beforeEnter: (to, from, next) => {

                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(response => {
                        console.log(response);
                        next();
                    })
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView')
            beforeEnter: (to, from, next) => {

                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(response => {
                        console.log(response);
                        next();
                    })
            }            
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView')
            beforeEnter: (to, from, next) => {

                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(response => {
                        console.log(response);
                        next();
                    })
            }            
        },                
        {
            path: '/item', // http://localhost:8080/item?id=30928105
            name: 'item',
            component: ItemView,
            beforeEnter: (to, from, next) => {

                bus.$emit('start:spinner');

                store.dispatch('FETCH_ITEM', to.query.id)
                    .then(response => {
                        console.log(response);
                        next();
                    })
            }                
        },                
        {
            path: '/user/:id', // id를 파라미터로 넘긴다.
            name: 'user',
            component: UserView,
            beforeEnter: (to, from, next) => {

                bus.$emit('start:spinner');

                store.dispatch('FETCH_USER', to.params.id)
                    .then(response => {
                        console.log(response);
                        next();
                    })
            }                
        }
]