<template>
  <!-- 아래 태그의 ref 속성은 이 컴포넌트에서만 접근할 수 있어서 
  다른 컴포넌트의 ref 속성값과 동일해도 상관없다. 
  하지만 class나 id 값을 자바스크립트에서 사용하면 다른 컴포넌트의 태그와
  값이 겹칠 수 있고, 그럴 경우 오류가 발생할 수 있다.
  -->
  <canvas ref="myChart" id="myChart"></canvas>
</template>

<script>
export default {
    mounted(){
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const data = {
            labels: labels,
            datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {}
        };

        const myChart = new this.$_Chart(
            this.$refs.myChart,
            // document.getElementById('myChart'),
            config
        );        
    }
}
</script>

<style>

</style>