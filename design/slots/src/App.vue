<template>
  <div>
    <ul>
      <item-view>아이템 1</item-view>
      <item-view>아이템 2</item-view>
      <item-view>아이템 3</item-view>
      <item-view>아이템 4</item-view>
      <item-view>아이템 5</item-view>
    </ul>
  </div>
</template>

<script>
import ItemView from './ItemView.vue';

export default {
  components: {
    ItemView,
  },
}
</script>