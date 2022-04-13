import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex); // vuex는 플러그인 형태로 제공되므로, vue에서 사용한다는 설정 필요.

// vuex는 상태관리 도구이다.
// 상태는 여러 컴포넌트 간에 공유되는 데이터 속성이다.

export const store  = new Vuex.Store
({
    state: { // 컴포넌트 간 공유되는 데이터
        list: [],
        user: {},
        item: {}
    },
    getters: { // store에서 computed와 동일한 의미를 가진다.
        fetchedUser({user}) {
            return user;
        },
        fetchedItem({item}) {
            return item;
        }
    },
    mutations,
    actions, // 비동기 호출을 한다.
});