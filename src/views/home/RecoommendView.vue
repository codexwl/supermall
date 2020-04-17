<template>
  <div class="recommend">

    <div v-for="item of recommend" class="home-tui">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "RecoommendView",
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 10px;
    border-bottom: 8px solid #eee;
  }
  .home-tui{
    flex: 1;
    padding: 5px;
  }
  .home-tui img{
    width: 100%;
  }
</style>