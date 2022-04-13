import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            bus.$emit('start:spinner');

            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    console.log('fetched');
                })
                .catch(error => console.log(error));
                
            setTimeout(() => {
                bus.$emit('end:spinner');
            }, 200);
        },          
        render(createElement) { // 하위에 컴포넌트를 생성한다.
            return createElement(ListView);
        }
    }
}