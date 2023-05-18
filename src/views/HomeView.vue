<template>

  <div>
    <!-- 二级路由占位符 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <div style="height:60px"></div>
    <!-- 底部选项卡 -->
    <van-tabbar 
    route
    v-model="active" 
    active-color="#f03d37">
    <van-tabbar-item replace to="/home/index" >
      首页
      <template #icon="props">
        <img :src="require(`@/assets/tabs/index_${props.active?1:0}.png`)">
      </template> 
    </van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/home/video" >
      视频
      <template #icon="props">
        <img v-if="props.active" src="@/assets/tabs/me_1.png">
        <img v-else src="@/assets/tabs/me_0.png">

      </template> 
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o" replace to="/home/show" >
      演出
      <template #icon="props">
        <img v-show="props.active" src="@/assets/tabs/show_1.png">
        <img v-show="!props.active" src="@/assets/tabs/show_0.png">
      </template> 
    </van-tabbar-item>
    <van-tabbar-item icon="setting-o" replace to="/home/me" >
      我的
      <template #icon="props">
        <img :src="`/tabs/video_${props.active?1:0}.png`">

      </template> 
    </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref(0);
</script>

<style scoped>

</style>