<template>
 <div>
  <el-badge value="new" class="item">
  <el-button size="small" :plain="true" @click="open">评论</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small" @click="repy">回复</el-button>
</el-badge>
 <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
           <img :src="item.idView" class="image">
        </el-carousel-item>
      </el-carousel>
<br>
<el-tag>了解数据的流程如下</el-tag>

<el-steps :active="active" finish-status="success">
  <el-step title="用户下单完毕"></el-step>
  <el-step title="后台接收数据"></el-step>
  <el-step title="后台进行操作"></el-step>
</el-steps>
<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
</div>

</template>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.image{
  width: 610px;
  size:100% 100%;
}
</style>
<script>
  export default {
    data(){
      return {
        imagesbox:[{id:0,idView:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1152691348,1895795124&fm=26&gp=0.jpg"},   
           {id:1,idView:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1577266931,1101345447&fm=26&gp=0.jpg"},

          {id:2,idView:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2409513373,2951473040&fm=26&gp=0.jpg"}],
           active: 0
      }
    },
    methods: {
      open() {
        this.$message('评论消息在评论列表中');
      },
      repy() {
        this.$alert('暂无回复消息', '回复', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
       next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>