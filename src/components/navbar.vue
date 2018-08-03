<template>
  <div class="navbar">
    <slot></slot>
    
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      
    }
  },
  methods : {

  }
}
</script>

<style scoped lang="scss">
	.navbar{
		height: 40px;
    width: 100%;
		background: #000;
		color: #fff;
    i{
      float: right
    }
	}
</style>