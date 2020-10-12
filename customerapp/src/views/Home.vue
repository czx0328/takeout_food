<template>
  <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe> -->
<van-swipe :autoplay="2000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>

</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
export default {
  data(){
    return{
      images: [
        'http://www.coco-tea.com.cn/images/product/%E7%99%BD%E8%89%B2%E6%81%8B%E4%BA%BA/%E8%8A%92%E6%9E%9C%E6%AC%A7%E8%95%BE460x460.png',
        'http://www.coco-tea.com.cn/images/product/%E9%86%87%E9%A6%99%E5%A5%B6%E8%8C%B6/%E5%A5%B6%E8%8C%B6%E4%B8%89%E5%85%84%E5%BC%9F460x460.png',
        'http://www.coco-tea.com.cn/images/product/%E9%B2%9C%E6%9E%9C%E9%B2%9C%E8%8C%B6/%E8%8A%92%E6%9E%9C%E7%BB%BF%E8%8C%B6230x230.png',
        'http://www.coco-tea.com.cn/images/product/%E9%B2%9C%E6%9E%9C%E9%B2%9C%E8%8C%B6/%E9%B2%9C%E7%99%BE%E9%A6%99%E5%8F%8C%E5%93%8D%E7%82%AE460x460.png',
        'http://www.coco-tea.com.cn/images/product/%E5%AD%A3%E8%8A%82%E9%99%90%E5%AE%9A/%E9%B2%9C%E8%8A%8B%E8%96%8F%E7%B1%B3%E7%89%9B%E5%A5%B6460x460.png',
      ],
    }
  },
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>