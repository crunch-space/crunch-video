<!-- Dom模板 -->
<template>
  <div  class="box" id="eplay" >
    <!-- Dom内容 -->
       <div class="head1 flex">
      <div class="flex" @click="back()">
        <img class="headlogo" src="../../assets/page/chevron-left.png" alt="" srcset="">
        <div class="shortname">About Us</div>
      </div>
    </div>

    <div>

   </div>
   <div class="eaaw">
  <img class="Coinbig"  src="../../assets/page/Frame.png" alt="" srcset="">
   </div>
   <div class="texteb">
    Crunch
   </div>
   
  </div>
</template>

<script>
// import a from './a'; // 引入组件

export default {
    
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
.eaaw{
    text-align: center;
       margin-top: 10rem;
}
.texteb{
     text-align: center;
     color: #ffe133;
     margin-top: 20px;
     font-size: 1.25rem;
     font-weight: 800;
}
</style>