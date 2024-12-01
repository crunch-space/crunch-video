<!-- Dom模板 -->
<template>
  <div  class="box" id="eplay" >
    <!-- Dom内容 -->
       <div class="head1 flex">
      <div class="flex" @click="back()">
        <img class="headlogo" src="../../assets/page/chevron-left.png" alt="" srcset="">
        <div class="shortname">Feedback</div>
      </div>
    </div>

    <div>
        <van-field
  v-model="message"
  rows="10"
  autosize
  type="textarea"
  maxlength="150"
  placeholder="Please enter your suggestions"
  show-word-limit
/>

    </div>
    <div style="margin-top:20px">
            <van-field
  v-model="msg"
  rows="1"
  autosize
  type="textarea"
  maxlength="10"
  placeholder="Please enter your email address"
  show-word-limit
/>
    </div>
       <div  class="downduck" @click="subbmit"  >
                 
                 submit!
              </div>
  </div>
</template>

<script>
// import a from './a'; // 引入组件
import { Notify } from 'vant';
export default {
     components: {
    [Notify.Component.name]: Notify.Component,
  },
  name: '',
  data() {
    return {
      msg: '',
      message:'',
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
      
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
      
  },
  // Vue方法定义
  methods: {
      back() {
      //回退
      this.$router.go(-1)
    },
    subbmit(){
       Notify({ type: 'success', message: 'success!' });
        this.msg= ''
        this.message= ''

    }
  }
}
</script>

<style scoped>
/* @import url(''); 引入css类 */
.box {
  padding: 1rem !important;
}
.flex {
  display: flex;
}
.disable {
  display: none;
}
.head1 {
  margin-bottom: 1rem;
}
.flex {
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
}
.headlogo {
  width: 1rem;
  height: 1rem;
}
.downduck{
  width: 10.8125rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: .875rem;
  background: #ffe133;
  color: black;
  text-align: center;
  border-radius: 1.25rem;
  font-weight: 600;
  margin-left: 50%;
  transform: translatex(-50%);
  margin-top: .625rem;


}
</style>