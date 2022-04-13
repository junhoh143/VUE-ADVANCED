<template>
  <input type="checkbox" :value="value" @click="toggleCheckBox">
</template>

<script>
export default {
  // v-model 의 값 연동은 주고 받을 때
  // html 태그에서 값이 변경되면 input 이벤트를 통해 값을 올리고,
  // html 태그에 값을 입력할 때는, html 태그의 value 속성에 값을 대입한다.

  props: ['value'],
  methods :{
    toggleCheckBox(){
      this.$emit('input', !this.value)
    }
  }
  
}
</script>