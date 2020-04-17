<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <Scroll class="content" ref="scroll" :probe-type="3" @scroll="conentScrill" :pullUpLoad="true" >
      <Swipers :banner="banner"/>
<!--      @pullingUp="pullingUp"-->
      <RecoommendView  :recommend="recommend"/>
      <Feature></Feature>
      <TabControl :title="['流行','新款','精选']" class="tab-control"
                  @tabClick="tabClick"/>


      <GoodList :goods="goods[currentType].list" class="GoodList" />

    </Scroll>
    <BackTop @click.native="backClick"  v-show="isShow"/>
  </div>
</template>

<script>
  import Swipers from './Swper'
  import RecoommendView from  './RecoommendView'
  import Feature from  './Feature'

  import Scroll from "../../components/common/scroll/Scroll";
  import NavBar from "components/common/navBar/NavBar";
  import TabControl from 'components/common/tabControl/tabControl'

  import GoodList from 'components/content/goods/GoodList'
  import BackTop from "components/content/backTop/BackTop";

  import {
    getHomeMultidata,
    getHomeGoods} from "../../network/home";

  export default {
    name: "home",

    components:{
      NavBar,
      Swipers,
      RecoommendView,
      Feature,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    computed: {

    },

    data(){
      return{
        banner:[],
       recommend:[],
        goods:{
          'pop' :{page: 0, list:[] },
          'new':{page: 0, list:[] },
          'sell':{page: 0, list:[] }
        },
        currentType:'pop',
        isShow:false
      }
    },

    created () {
      //1.请求多个数据
      this.getHomeMultidatas()
      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

      //3.监听Item中图片加载完成
      this.$bus.$on('itemImageLoad',()=>{
        this.$refs.scroll.refresh()
      })
    },
    methods:{
      //事件监听相关
      conentScrill(position){
       this.isShow = (-position.y)>1000
      },
      tabClick(index){
        switch (index ) {
          case 0:this.currentType = 'pop'
            break;
          case 1:this.currentType = 'new'
            break;
          case 2:this.currentType = 'sell'
            break;
        }
      },
      backClick(){
       this.$refs.scroll.scrollTo(0,0)
      },
      //网络请求相关
      getHomeMultidatas(){
        getHomeMultidata().then(res=>{
          this.banner=res.data.banner.list;
          this.recommend=res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page+=1

        })
      },
      // pullingUp(){
      //   this.getHomeGoods(this.currentType);
      //
      //   console.log ('加载更多')
      // }
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    padding-top: 44px;
    position: relative;

  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 2;
  }
  .tab-control{

    top: 44px;
    background-color: white;
    z-index: 1;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
