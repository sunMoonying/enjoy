<template>
  <div class="home">
    <ul>
      <li v-for = "data in datalist" @click = "bandclick(data)">
        {{data}}
      </li>
    </ul>
  </div>
</template>

<script>
import router from "../router" //路由对象
export default {
  name: 'home',
  data () {
    return {
      datalist : [1,2,3,4]
    }
  },
  methods:{
    bandclick(data){
      // console.log(111)
      router.push(`/detail/${data}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>