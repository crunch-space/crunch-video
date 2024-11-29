<!-- Dom模板 -->
<template>
  <div class="box" id="eplay">
    <!-- Dom内容 -->
    <div class="head1 flex">
      <div class="flex" @click="back()">
        <img class="headlogo" src="../../assets/page/chevron-left.png" alt="" srcset="">
        <div class="shortname">wallet</div>
      </div>
    </div>
    <div class="head">
      <div class="Wallet">
        Wallet Balance
      </div>
      <div class="flex euen ">
        <img class="Coin1" src="../../assets/page/Coin1.png" alt="" srcset="">
        <div class="fonta">10,010,000</div>
      </div>
      <div class="flex setio">
        <img class="Coin2" src="../../assets/page/Coin1.png" alt="" srcset="">
        <div class="coinfont">10,010,000 + Bonus 1,000</div>
      </div>

    </div>
    <van-cell-group inset title="Top Up Plans">

    </van-cell-group>
    <div class="video-list">
      <div v-for="(item, index) in msa" :key="index" class="choose">
        <div v-if="item.off" class="off">{{item.off}}%OFF</div>
        <div v-if="item.add" class="add">+{{item.add}}%</div>
        <img v-if="item.type == 1 " class="coinimg" src="../../assets/page/coin/0.png" alt="" srcset="">
        <img v-if="item.type == 2 "  class="coinimg" src="../../assets/page/coin/1.png" alt="" srcset="">
        <img v-if="item.type == 3 "  class="coinimg" src="../../assets/page/coin/2.png" alt="" srcset="">
        <img v-if="item.type == 4 "  class="coinimg" src="../../assets/page/coin/3.png" alt="" srcset="">
        <img v-if="item.type == 5 "  class="coinimg" src="../../assets/page/coin/4.png" alt="" srcset="">
        <img v-if="item.type == 6 "  class="coinimg" src="../../assets/page/coin/5.png" alt="" srcset="">
      <div class="flex abcoin">
        <img class="ccoin" src="../../assets/page/Coin1.png" alt="" srcset="">
           <div class="ccoinfo">{{item.gold}}</div>
      </div>
      <div v-if="item.bonus" class="bonus">+{{item.bonus}} Bonus</div>
        <div class="buy">${{item.money}}</div>
      </div>
    </div>

  </div>
</template>

<script>
// import a from './a'; // 引入组件
export default {
  name: '',
  data() {
    return {
      msg: '测试',
      msa: [
        {
          type: 1,
          off: null,
          add: null,
          gold: 1000,
          bonus: null,
          money: '4.99',
        },
        {
          type: 2,
          off: 13,
          add: 15,
          gold: 1000,
          bonus: 150,
          money: '4.99',
        },
        {
          type: 3,
          off: 16,
          add: 20,
          gold: 1500,
          bonus: 300,
          money: '14.99',
        },
        {
          type: 4,
          off: 25,
          add: 35,
          gold: 2500,
          bonus: 875,
          money: '24.99',
        },
        {
          type: 5,
          off: 33,
          add: 50,
          gold: 5000,
          bonus: 2500,
          money: '49.99',
        },
        {
          type: 6,
          off: 50,
          add: 100,
          gold: 10000,
          bonus: 10000,
          money: '99.99',
        },
        
      ],
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  // Vue方法定义
  methods: {
    back() {
      //回退
      this.$router.go(-1)
    },
  },
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
.shortname {
  font-size: 0.875rem;
}

.ment {
  align-self: center;
  line-height: 1.875rem;
  margin-left: 0.625rem;
  /* display: flex; */
  /* align-items: center; */
}
.Coinbig {
  width: 4.25rem;
  height: 4.25rem;
}
.loknum {
  font-weight: 600;
  font-size: 1.375rem;
  color: #ffffff;
}
.perep {
  font-size: 0.875rem;
  color: #c4c2c0;
  text-align: left;
}
.head {
  width: 100%;
  height: 5.6875rem;
  background: #2f2f2f;
  border-radius: 8px;
  margin-top: 20px;
  padding: 0.5rem;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 20px;
}
.Wallet {
  font-size: 0.625rem;
  color: #c4c2c0;
}
.fonta {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
}
.Coin1 {
  width: 1.25rem;
  height: 1.25rem;
}
.abs {
  margin-right: 0.3125rem;
  width: 1.3rem;
}
.euen {
  align-items: center;
  margin-top: 0.625rem;
}
.setio {
  background: black;
  box-sizing: border-box;
  padding: 0.1875rem;
  border-radius: 20px;
  width: fit-content;
  margin-top: 0.3125rem;
}
.Coin2 {
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 10px;
}
.coinfont {
  font-size: 0.625rem;
  margin-left: 0.1875rem;
  margin-right: 0.625rem;
  color: #c4c2c0;
}
.walbutton {
  position: absolute;
  width: 7.8125rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background: #ffe133;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 1.25rem;
  top: 2.375rem;
  right: 0.625rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-list {
  display: flex;
  flex-wrap: wrap;
  /* min-height: 17.25rem; */
}
.choose {
  width: 6.625rem;
  height: 9.125rem;
  border: 1px solid #2f2f2f;
  background: #2f2f2f;
  border-radius: 0.5rem;
  /* text-align: center; */
  /* line-height: 6.625rem; */
  position: relative;
  /* margin: 10px 20px; */
  /* 其他样式 */
}
.choose {
  --n: 3;
  --space: calc((100% - 0px) / var(--n) - 6.8125rem);
  --m: calc(var(--space) / 2);
  margin: 0.22rem var(--m);
  margin-bottom: 0.625rem;
}
.off {
  width: 2.875rem;
  height: 1rem;
  border-radius: 0.5rem 0px 0.5rem 0px;
  background: black;
  color: #ffe133;
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: center;
  position: absolute;
  top: -0.0625rem;
  left: -0.0625rem;
}
.add {
  width: 1.9375rem;
  height: 1rem;
  border-radius: 0px 0.5rem 0px 0.5rem;
  background: black;
  color: black;
  background: #ffe133;
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: center;
  position: absolute;
  top: -0.0625rem;
  right: -0.0625rem;
}
.coinimg{
    width: 2.8125rem;
    height: 2.8125rem;
    position: absolute;
    top: 1.5rem;
    left: 1.9375rem;
}
.abcoin{
    /* position: absolute;
    top: 50px; */
   align-items: center;
       display: flex;
    justify-content: center;
    margin-top: 4.5625rem;
 
}
.ccoin{
    width: .875rem;
    height: .875rem;
}
.ccoinfo{
    color: #FFE133;
    font-size: 1rem;
    font-weight: 600;
}
.bonus{
    width: 100%;
    text-align: center;
    color: #C4C2C0;
    font-size: .625rem;
    font-weight: 400;
}
.buy{
    width: 4.1875rem;
    height: 1.75rem;
    text-align: center;
    line-height:1.75rem;
    background: black;
    font-size:.75rem ;
    font-weight: 600;
    color: #FFFFFF;
    border-radius: 20px;
    position: absolute;
    top: 6.875rem;
    left: 1.25rem;
}
</style>