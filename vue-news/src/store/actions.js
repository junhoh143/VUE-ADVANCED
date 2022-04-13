import { 
    fetchList,
    fetchUserInfo,
    fetchItemDetail,
} from '../api/index.js';

export default { // 비동기 호출을 한다.
        async FETCH_LIST({commit}, pageName) {
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;                
        },    
        async FETCH_USER({commit}, username)
        {
            const response = await fetchUserInfo(username);
            commit('SET_USER', response.data);
            return response;
        },
        async FETCH_ITEM({commit}, id)
        {
            const response = await fetchItemDetail(id);
            commit('SET_ITEM', response.data);
            return response;
        },
    }