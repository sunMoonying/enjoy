<template>
  <div class="new">
    new
  </div>
</template>

<script>
import navbar from './navbar';
import axios from 'axios';
export default {
  name: 'new',
  data () {
    return {
    }
  },
  mounted(){
    console.log(this.$route.query.newr1);
    console.log(this.$route.query.text);
    axios.get(`/hub/home/v1/web/category_detail.json?city_id=140&${this.$route.query.text}&type=${this.$route.query.newr1}&page=0`).then(res=>{
      console.log(res.data);
      this.datalist = res.data
    })
  },
  components : {
    
  },

  methods : {
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>