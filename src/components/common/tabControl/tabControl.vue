<template>
  <div class="tab-control">
    <div v-for="(item,index) in title"
         :class="{active:index===currentIndex}"
         @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props:{
      title:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;

    height: 40px;
    line-height: 40px;
  }
  .tab-control div{
    flex: 1;
  }
  .tab-control div span{
    padding: 5px;
  }
  .active{
    color: var(--color-tint);

  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>