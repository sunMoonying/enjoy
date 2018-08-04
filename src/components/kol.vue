<template>
  <div class="kol">
    <div class="cart-empty">
    	<img src="../../static/images/cart.png"> 
    	<p>购物车是空的哦~</p>
    </div>
    <div id="heng"></div>
  </div>
</template>

<script>
export default {
  name: 'kol',
  data () {
    return {
      
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.cart-empty {
	    padding: 50px 0;
	    text-align: center;
	}
	img{
		height: 150px;
		width: 150px;
		margin-left: 31%;

	}
	p{
		font-size: 20px;
		text-align: center;
		color: #92969c;
	}
	#heng{
	  width: 100%;
	  height: 8px;
	  background-color: #fafafa;
	  border-top: 1px solid #e6e6e6;
	  border-bottom: 1px solid #e6e6e6;
	}
</style>