<template>
  <div class="goodItem">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    </a>
    <div class="goosInfo">
      <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goods-item",
    props:{
      goodsItem: {
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        this.$bus.$emit('itemImageLoad')
      }
    }
  }
</script>

<style scoped>
  .goodItem{
    width: 45%;
    padding-bottom: 40px;
    position: relative;
  }
  .goodItem img{
    width: 100%;
    border-radius: 5px;
    display: block;
  }
  .goosInfo{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goosInfo p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goosInfo .price{
    color: var(--color-high-text);
    margin-right:20px ;
  }
  .goosInfo .cfav{
    position: relative;
  }
  .goosInfo .cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>