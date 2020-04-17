<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
       default: false
      }
    },
    mounted () {
      this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
      this.scroll.refresh()
      this.scroll.on('pullingUp',()=>{
        // console.log ( '上啦加载' );
        this.$emit('pullingUp',)
        setTimeout(()=>{
          this.scroll.finishPullUp()
        },2000)
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
    refresh(){
        this.scroll.refresh()
    }
    },

  }

</script>

<style scoped>

</style>