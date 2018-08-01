<template>
  <div class="kolsell">
    <ul>
    	<li v-for = "data in datalist" @click = "bandclick(data)">
    		{{data}}
    	</li>
    </ul>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'kolsell',
  data () {
    return {
      datalist : [11,22,33]
    }
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

</style>kolsell