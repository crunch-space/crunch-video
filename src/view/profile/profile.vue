<!-- Dom模板 -->
<template>
  <div id="env" class="box">
    <!-- Dom内容 -->

    <div class="lockmen">
      <img class="Coinbig" src="../../assets/page/Frame.png" alt="" srcset="">
      <div class="ment">
        <div class="loknum">0xCrunch</div>
        <div class="perep">
          CHUNCH ID: 1923913
        </div>
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
      <div class="walbutton ">
        <img class="Coin1 abs" src="../../assets/page/coin.png" alt="" srcset="">
        Top Up
      </div>
    </div>
    <div class="invite" @click="invite()">
      <img class="inviteimg" src="../../assets/page/invite.png" alt="" srcset="">
      <div class="invifont">Invite your friends<br />
        to earn more coins</div>
      <img class="inviteleft" src="../../assets/page/Iconleft.png" alt="" srcset="">
    </div>
    <div class="setting">
      <van-cell-group inset title="Settings">

      </van-cell-group>
      <div class="cells">
        <van-cell center title="Wallet" @click="click(0)" size="large" :value="value">
          <template #icon>
            <img class="iconoid" src="../../assets/page/crypto-wallet.png" alt="" srcset="">
          </template>
          <template #right-icon>
            <img class="iconoid" src="../../assets/page/rightsmall.png" alt="" srcset="">
          </template>
        </van-cell>
        <van-cell center title="My List"  @click="click(1)" size="large">
          <template #icon>
            <img class="iconoid" src="../../assets/page/list2.png" alt="" srcset="">
          </template>
          <template #right-icon>
            <img class="iconoid" src="../../assets/page/rightsmall.png" alt="" srcset="">
          </template>
        </van-cell>
        <van-cell center title="Setting" @click="click(2)"  size="large">
          <template #icon>
            <img class="iconoid" src="../../assets/page/list3.png" alt="" srcset="">
          </template>
          <template #right-icon>
            <img class="iconoid" src="../../assets/page/rightsmall.png" alt="" srcset="">
          </template>
        </van-cell>
        <van-cell center title="Feedback" @click="click(3)" size="large">
          <template #icon>
            <img class="iconoid" src="../../assets/page/list4.png" alt="" srcset="">
          </template>
          <template #right-icon>
            <img class="iconoid" src="../../assets/page/rightsmall.png" alt="" srcset="">
          </template>
        </van-cell>
        <van-cell center title="About Us" @click="click(4)" size="large">
          <template #icon>
            <img class="iconoid" src="../../assets/page/list5.png" alt="" srcset="">
          </template>
          <template #right-icon>
            <img class="iconoid" src="../../assets/page/rightsmall.png" alt="" srcset="">
          </template>
        </van-cell>

      </div>

    </div>
  </div>
</template>

<script>
// import a from './a'; // 引入组件
// import { ethers } from 'ethers'
// import Web3Modal from '@klaytn/web3modal'
export default {
  name: '',
  data() {
    return {
      provider: null,
      web3Modal: null,
      msg: '测试',
      value: '10,010,000',
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    // this.web3Modal = new Web3Modal({
    //   cacheProvider: true,
    // })
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  // Vue方法定义
  methods: {
    //  async connectWallet() {
    //   try {
    //     const web3ModalProvider = await this.web3Modal.connect()
    //     const ethersProvider = new ethers.BrowserProvider(web3ModalProvider)
    //     const provider = new ethers.providers.Web3Provider(web3ModalProvider)
    //     this.provider = web3ModalProvider
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    click(e) {
      // console.log(123)
      if (e==0) {
          this.$router.push({path: `/wallete`})
      }else if(e==1 ){ 
this.$router.push({path: `/mylist`})
      }
      else if(e==2 ){ 
this.$router.push({path: `/setting`})
      }
       else if(e==3 ){ 
this.$router.push({path: `/feed`})
      }
      else if(e==4 ){ 
this.$router.push({path: `/about`})
      }
    },
    invite() {
      console.log(123)
      // this.$router.push('invite')
    },
  },
}
</script>

<style scoped>
/* @import url(''); 引入css类 */
.flex {
  display: flex;
}
.box {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.lockmen {
  display: flex;
  justify-content: left;
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
.invite {
  width: 100%;
  height: 3rem;
  background: #2f2f2f;
  margin-top: 30px;
  position: relative;
  border-radius: 8px;
}
.inviteimg {
  width: 3.5313rem;
  height: 3.5313rem;
  position: absolute;
  left: 1.4375rem;
  bottom: 0;
}
.invifont {
  position: absolute;
  /* width: 100%; */
  height: 2rem;
  top: 0.4375rem;
  left: 5.5rem;
  /* font-family: Gill Sans; */
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  color: #ffe133;
}
.inviteleft {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 18.9375rem;
  top: 0.75rem;
}
.setting {
  margin-top: 1rem;
}
.cells {
  background: #2f2f2f;
  border-radius: 8px;
}
.van-cell--large .van-cell__title {
  font-size: 0.875rem;
  color: #ffffff;
  align-self: center;
  margin-left: 0.625rem;
}
.van-cell__value {
  position: relative;
  font-size: 0.875rem;
  color: #ffffff;
  /* font-size: .875rem; */
  align-self: center;
  overflow: hidden;
  /* color: #969799; */
  text-align: right;
  vertical-align: middle;
  word-wrap: break-word;
}
</style>
<style  >
.van-cell--clickable .van-cell {
  /* background-color: red !important;; */
}
.van-cell-group__title {
  padding: 0.5rem 0px 0.5rem !important;
  color: #969799 !important;
  font-size: 0.875rem !important;
  line-height: 1rem !important;
}
.van-cell-group--inset {
  margin: 0px !important;
  overflow: hidden !important;
  border-radius: 8px !important;
}
.van-cell {
  background: #2f2f2f !important;
  border-radius: 8px !important;
  color: #ffffff !important;
  font-weight: 600 !important;
}
.van-cell__left-icon,
.van-cell__right-icon {
  height: 1.5rem !important;
  font-size: 1.5rem !important;
  line-height: 1.5rem !important;
}
.van-cell::after {
  position: absolute !important;
  box-sizing: border-box !important;
  content: ' ' !important;
  pointer-events: none !important;
  right: 16px !important;
  bottom: 0 !important;
  left: 2.5rem !important;
  border-bottom: 2px solid #1a1b1a !important;
  -webkit-transform: scaleY(0.5) !important;
  transform: scaleY(0.5) !important;
}
.iconoid {
  width: 1.5rem !important;
  height: 1.5rem !important;
}
</style>