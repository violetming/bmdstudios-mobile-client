<template>
  <div>
    
    <!-- 标题栏 -->
    <van-nav-bar title="百慕大影城">
      <template #right>
        <van-popover placement="bottom-end" v-model:show="showPopover" :actions="actions">
          <template #reference>
            <van-icon name="apps-o" size="25" />
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    <!-- 广告栏由第三方插件自动导入 -->
    <app-header></app-header>
    <van-sticky>
    <!-- top-nav顶部导航栏 -->
    <div class="top-nav">
      <div class="city">北京</div>
      <span class="arrow"></span>
      <van-tabs color="#f03d37" class="tabs" v-model:active="active">
        <van-tab title="热映"></van-tab>
        <van-tab title="待映"></van-tab>
        <van-tab title="经典"></van-tab>
      </van-tabs>
      <van-icon color="#f03d37" size="25" style="font-weight:bold" name="search" />
    </div>
    </van-sticky>
    <!-- 内容区域 -->
    <movie-item 
    :movie="item"
    v-for="item in MovieList" :key="item.id">

    </movie-item>

  </div>
</template>

<script setup lang="ts">
/* 标题栏 */
import { onMounted } from "vue";
import { ref } from "vue";
import httpApi from '@/http'
import Movie from '@/types/Movie'
import { watch } from "vue";

/**页面初始化时，加载热映类别(cid=1)的首页电影列表数据 */
const MovieList=ref<Movie[]>()
onMounted(()=>{
  console.log('@@@@@@@');
  const params={cid:1,page:1,pagesize:20}
  httpApi.movieApi.queryByCategory(params).then(res=>{
    console.log(res);
    MovieList.value=res.data.data.result
  })

})

/**控制右上角popover弹窗 */
const showPopover = ref(false);
const actions = [
  { text: "首页" },
  { text: "组件" },
  { text: "热点" },
  { text: "商城" }
];
/* 顶部导览栏 */
// 下拉菜单
const value1 = ref(0);
const option1 = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ];
    
/**控制顶部导航 监听顶部导航的变化 从而发送请求，加载数据 */

const active = ref(0);
watch(active,(newVal,oldVal)=>{
  console.log(`导航从${oldVal}切换到了${newVal}`);
})



</script>

<style scoped lang="scss">
.top-nav{
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  .arrow{
    border: 5px solid transparent;
    border-top-color:black ;
    margin: 7px 0 0 3px;
  }
  .tabs{
    flex: 1;
    margin:0 20px;
  }
}


</style>
