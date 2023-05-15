<template>
  <div>
    <!-- 底部选项卡 -->
    <van-tabbar v-model="active" active-color="#f03d37">
    <van-tabbar-item >
      首页
      <template #icon="props">
        <img :src="props.active?icon.active:icon.inactive">
      </template> 
    </van-tabbar-item>
    <van-tabbar-item icon="search">视频</van-tabbar-item>
    <van-tabbar-item icon="friends-o">演出</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref(0);
const icon={
  active:'src/assets/tabs/index_1.png',
  inactive:'src/assets/tabs/index_0.png'
}
</script>

<style scoped>

</style>