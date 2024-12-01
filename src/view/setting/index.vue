<!-- Dom模板 -->
<template>
  <div class="box" id="eplay"  >
    <!-- Dom内容 -->
    <div class="head1 flex">
      <div class="flex" @click="back()">
        <img class="headlogo" src="../../assets/page/chevron-left.png" alt="" srcset="">
        <div class="shortname">Setting</div>
      </div>
     
    </div>
     <van-cell-group inset title="video setup">

      </van-cell-group>
       <van-cell center title="video auto play"  size="large" >
          <!-- <template #icon>
            <img class="iconoid" src="../../assets/page/crypto-wallet.png" alt="" srcset="">
          </template> -->
          <template #right-icon>
           <van-switch v-model="checked" active-color="#ffe133" inactive-color="black"  size="24px" />
          </template>
        </van-cell>
           <van-cell center title="auto lock"  size="large" >
          <!-- <template #icon>
            <img class="iconoid" src="../../assets/page/crypto-wallet.png" alt="" srcset="">
          </template> -->
          <template #right-icon>
           <van-switch v-model="checked1" active-color="#ffe133" inactive-color="black"  size="24px" />
          </template>
        </van-cell>
          <van-cell center title="auto collection"  size="large" >
          <!-- <template #icon>
            <img class="iconoid" src="../../assets/page/crypto-wallet.png" alt="" srcset="">
          </template> -->
          <template #right-icon>
           <van-switch v-model="checked2" active-color="#ffe133" inactive-color="black"  size="24px" />
          </template>
        </van-cell>
         <van-cell-group inset title="Audio setup">

      </van-cell-group>
         <van-cell center title="auto mute"  size="large" >
         
          <template #right-icon>
           <van-switch v-model="checked3" active-color="#ffe133" inactive-color="black"  size="24px" />
          </template>
        </van-cell>
          <van-cell center title="always mute"  size="large" >
         
          <template #right-icon>
           <van-switch v-model="checked4" active-color="#ffe133" inactive-color="black"  size="24px" />
          </template>
        </van-cell>
  </div>
</template>

<script>
// import a from './a'; // 引入组件
export default {
  name: '',
  data() {
    return {
      msg: '测试',
      checked:true,
       checked1:true,
       checked2:true,
       checked3:true,
         checked4:true,
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
</style>