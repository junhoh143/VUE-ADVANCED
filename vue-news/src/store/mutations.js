export default { // export default 는 아래 블록 내용을 전부 export 한다.
        SET_LIST(state, list) {            
            state.list = list;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_ITEM(state, item) {
            state.item = item;
        }
}