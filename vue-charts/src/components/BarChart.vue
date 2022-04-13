<template>
  <canvas ref="myChart" id="myChart" width="400" height="400"></canvas>
</template>

<script>
export default {
    props: ['propsdata'],
  mounted() {
      //   const ctx = document.getElementById('myChart');
      const ctx = this.$refs.myChart;
      const myChart = new this.$_Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: this.propsdata,
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
  }
}
</script>

<style>

</style>