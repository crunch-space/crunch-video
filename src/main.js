// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';


// import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
// import { KaikasWeb3Provider } from "@klaytn/kaikas-web3-provider";
// import { KlipWeb3Provider } from "@klaytn/klip-web3-provider";

// import Web3Modal from "@klaytn/web3modal";
// providerOptions = {
//   coinbasewallet: {
//     package: CoinbaseWalletSDK, // required
//     options: {
//       appName: "Web3Modal Kaia dApp", // required
//       infuraId: "NFURA_KEY", // required
//       rpc: "https://public-en.node.kaia.io", // Optional if `infuraId` is provided; otherwise it's required
//       chainId: 1001, // Optional. It defaults to 1 if not provided
//       darkMode: false // Optional. Use dark theme, defaults to false
//     }
//   },
//   klip: {
//     package: KlipWeb3Provider, //required
//     options: {
//         bappName: "Web3Modal Kaia dApp", //required
//         rpcUrl: "https://public-en.node.kaia.io" //required
//     }
// },
//   kaikas: {
//     package: KaikasWeb3Provider // required
//   }
// };
// const  web3Modal = new Web3Modal( {
//     cacheProvider: true,
//     providerOptions,
//   } )
//   Vue.use(web3Modal);

import './assets/Font/font.css'

// import Vconsole from 'vconsole';
// const vConsole =new Vconsole();
// Vue.use(vConsole);
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(ElementUI);
Vue.config.productionTip = false
function setRem() {
  const baseSize = 16; // 基准字体大小
  const scale = document.documentElement.clientWidth / 375; // 以iPhone 6为基准，计算缩放比例
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';
}
setRem();
window.onresize = setRem;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
