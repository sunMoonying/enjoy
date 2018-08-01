<template>
  <div class="entry">
    <ul>
      <li v-for = "data in food" @click = "bandclick(data)">
        {{data}}
      </li>
    </ul>
  </div>
</template>
<!-- 动态获取列表页内容 -->
<script> 
import router from "../router" 
export default {
  name: 'entry',
  data(){
    return{
      food : ['肉蟹煲','火锅','川菜']
    }
  },
  mounted(){
    console.log(this.$route.params.id1);
  },
  methods : {
    bandclick(data){
      router.push(`/detail/${data}`);
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>