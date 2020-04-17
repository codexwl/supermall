<template>
  <div class="wrapper">
   <ul class="content">
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表5</li>
     <li>分类列表6</li>
     <li>分类列表7</li>
     <li>分类列表8</li>
     <li>分类列表9</li>
     <li>分类列表10</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
     <li>分类列表1</li>
   </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "category",
    data(){
      return{
        scroll:null
      }
    },
    created () {


      },
      mounted(){
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType:3,
        pullUpLoad:true
      })
        this.scroll.on('scroll',(position=>{
          // console.log ( position );
        }))
        this.scroll.on('pullingUp',()=>{
          console.log ( '上啦加载' );
          setTimeout(()=>{
            this.scroll.finishPullUp()
          },2000)
        })
      }
    }

</script>

<style scoped>
  .wrapper{
    height: 150px;
    background-color: #666;

    /*overflow-y: scroll;*/
    color: red;
  }
</style>
