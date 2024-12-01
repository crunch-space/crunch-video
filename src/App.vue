<template>
  <div id="app">
    <router-view />
    <Foot/>
  </div>
</template>

<script>
import Foot from './components/comFooter.vue'
export default {
   components: {
    Foot
  },
  name: 'App'
}
</script>

<style>
html{
  background: #1a1b1a;
}
#app {
  font-family:'GillSans','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   /* font-family: ; */
  color: #FFFFFF;
   position: relative;
  min-height: 100vh;
}
#env {
 height: calc(100vh - 5.8125rem);
  padding: 1rem;
}
#enr{
   padding: 1rem;
}
#eplay{
      padding: 1rem 0rem 0rem 0rem;
}

*{
  margin: 0;
  padding: 0;
 
}
</style>

<style>
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
.van-field__control {
  color: #FFFFFF !important;
}
</style>
<style  >
.van-cell--clickable .van-cell {
  /* background-color: red !important;; */
}
.van-cell-group__title {
  padding: 0.5rem 0px 0.5rem !important;
  color: #969799;
  font-size: 0.875rem !important;
  line-height: 1rem;
}
.van-cell-group--inset {
  margin: 0px;
  overflow: hidden;
  border-radius: 8px;
}
.van-cell {
  background: #2f2f2f;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 600;
}
.van-cell__left-icon,
.van-cell__right-icon {
  height: 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
}
.van-cell::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  right: 16px;
  bottom: 0;
  left: 2.5rem;
  border-bottom: 2px solid #1a1b1a;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.iconoid {
  width: 1.5rem;
  height: 1.5rem;
}
</style>