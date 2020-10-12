<template>
  <div>
      <van-cell-group>
  <van-field v-model="user.username" label="用户名" placeholder="请输入用户名" />
  <van-field v-model="user.password" label="密码" type="password" placeholder="请输入密码" />
</van-cell-group>
<van-button type="primary" @click="login" block>登录</van-button>
  </div>
</template>

<script>
import {setToken} from "../utils/auth"
import axios from "../utils/axios"
export default {
data(){
    return{
        user:{
            type:"customer"
        },
    };
},
methods:{
    login(){
        axios.post("/user/login",this.user).then(res=>{
            setToken(res.data.token);
            //登录成功 跳转到首页
            this.$router.push({path:"/"})
            alert("登录成功")
        })
    }
}
}
</script>

<style>

</style>