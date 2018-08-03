<template>
  <div class="detail">

    <div id="banner">
      <ul>
        <li></li>
      </ul>
    </div>


    
  </div>
</template>

<script>
  import router from "../router";
  import axios from "axios"
export default {
  name: 'detail',
  data () {
    return {
      product:[]
    }
  },
  mounted(){
    //https://api.ricebook.com/product/info/product_detail.json?product_id=1046843
  	console.log(this.$route.params.id);
    axios.get(`/product/info/product_detail.json?product_id=${this.$route.params.id}`).then(res=>{
      console.log(res.data)
      this.product = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>