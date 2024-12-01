<!-- Dom模板 -->
<template>
  <div class="box" id="eplay"  infinite-scroll-distance='10px'  v-infinite-scroll="infiniteHandler" :infinite-scroll-immediate = false style="overflow:auto">
    <!-- Dom内容 -->
     <div class="head1 flex">
      <div class="flex" @click="back()">
        <img class="headlogo" src="../../assets/page/chevron-left.png" alt="" srcset="">
        <div class="shortname">My List</div>
      </div>
    </div>
      <div class="list"  > 
             <div class="mainshow" v-for="(item,index) in addlist" :key="index" @click="goDetail(item)">
            <div class="tap">
                <img class="showimg" :src="item.thumbnail_url" alt="" srcset="">
            </div>
            <div class="showfongt ">
              {{item.title}}
            </div>
        </div>
        </div>
        <div class="test">
          {{text}}
        </div>
  </div>
</template>

<script>
// import a from './a'; // 引入组件
import {getvideos,getbanner} from '../../until/api/newapi'
export default {
  name: '',
  data() {
    return {
      msg: '测试',
           list:[],
      addlist:[],
      page:0,
      limit:10,
      text:'Loading....',
      current: 0,
      count:0,
      loading:true
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
      this.load()
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {
      
  },
  // Vue方法定义
  methods: {
      back() {
      //回退
      // this.$router.go(-1)
        this.$router.push({path: `/profile`})
    },
     infiniteHandler($state) {
      console.log('触发');
      // console.log($state);
      if (this.loading) {
        return
      }
      if (this.page == 0) {
        return
      }
      if (this.addlist.length >= this.list.total) {
          // $state.complete();
          this.text = 'no more....'
          return
      }else{
        this.load()
      }
    },
      load(){
          const a = {
             page:this.page+1 ,
             limit:this.limit,
          }
          this.loading = true
          getvideos(a).then(res=>{
            console.log(res,'123123');
            this.loading = false
            this.list = res.data
            this.page = res.data.page
           this.addlist.push(...res.data.list)
            console.log(this.addlist);
            
          })
      },


    onChange(index) {
      this.current = index
    },
      goToSlide(index) {
         this.$refs.swiper.swipeTo(index);
      this.current = index;
    },
    goDetail(e){
      console.log(e);
      this.$router.push({path: `/video?video_id=${e.video_id}`})
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
</style>
<style scoped>
.list{
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
 
}
.test{
  margin-top: 10px;
  text-align: center;
  /* min-height: 500px; */
  /* height: 1000px; */
   /* overflow: auto; */
}
.mainshow{
  width:10.25rem ;
  height: 18.25rem;
  background: #000000;
 border-radius: .5rem ;
  margin-top: 1rem;
}
.mainshow:nth-child(2n+2) {
        margin-left: .9375rem; /* 设置第二个元素的左边距为 10px */
    }
.tap img{
width: 10.25rem;
height: 16rem;
border-radius: .5rem .5rem 0px 0px;
}
.shof{
  font-size: .75rem;
   padding-left: .625rem;
     /* display: flex;
    align-items: center;
     height: 1.5625rem;
     overflow: hidden; */
}
.showfongt{
     font-size: .75rem;
    display: flex;
    align-items: center;
    height: 1.5625rem;
    padding-left: .625rem;
    line-height: .9375rem;
    font-weight: 400;
}
.chostitle{
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 1rem;
}
</style>