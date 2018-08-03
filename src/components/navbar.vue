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
<<<<<<< HEAD
		height: 44px;
=======
		height: 40px;
    width: 100%;
>>>>>>> 92fb2f799b2aeba5b521641ef82e5f669f948ec2
		background: #000;
		color: #fff;
    i{
      float: right
    }
	}
</style>