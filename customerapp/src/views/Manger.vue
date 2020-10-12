<template>
  <div>
      <router-view></router-view>
      <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="/manger/home">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/manger/order">订单</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/manger/user">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active:0,
        }
    }
}
</script>

<style>

</style>