<template>
  <div class="wrap">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item of banner"><a :href="item.link"><img :src="item.image" :alt="item.title"></a></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: "Swper",
  components:{
    Swiper,
    SwiperSlide,
    directive
  },
    props:{
      banner:{
        type:Array,
        required: true,
        default(){
          return []
        }

      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {

      this.swiper.slideTo(1, 1000, false)
    },
    data(){
      return{
        swiperOptions: {
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          },
          loop:true,
        },
      }
    },
  }
</script>

<style scoped>
  img {
    width: 100%;
    display: block;
  }

  .swiper-container{
    --swiper-theme-color: var(--color-tint);
    /* 两种都可以 */
  }
</style>