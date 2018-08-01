<template>
  <div class="detail">
    detail
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      
    }
  },
  mounted(){
  	console.log(this.$route.params.id);
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>