<template>
  <div class="myself">
    <div id="my">
    	<div class="head">
    		<img src="https://image.ricebook.com/avatar/1?imageView2/1/w/140/h/140" alt="">
    		<h4>ENJOY_6W0Van31</h4>
    	</div>
    	<div class="body">
    		<div class="hh">
    			<h3>会员权益</h3>
    			<a href="" class="hy-go">去开通</a>
    			<p data-v-2eea505b="" class="hy-intro">开通会员每月平均可以帮你多赚 2046 元</p>
    			<ul>
    				<li><a href=""><img src="https://image.ricebook.com/business/23322963723620" alt=""><span>会员大礼包</span></a></li>
    				<li><a href=""><img src="https://image.ricebook.com/business/23322963723559" alt=""><span>会员专享价</span></a></li>
    				<li><a href=""><img src="https://image.ricebook.com/business/23322963723618" alt=""><span>会员日特权</span></a></li>
    				<li><a href=""><img src="https://image.ricebook.com/business/23322963723629" alt=""><span>专属客服</span></a></li>
    			</ul>
    		</div>
    	</div>
    	<div data-v-2eea505b="" class="nav-panel">
	    	<div data-v-2eea505b="" class="nav-item">
		    	<a data-v-2eea505b="" href="">
			    	<span data-v-2eea505b="">我的订单</span>
		    	</a>
	    	</div>
    	</div>
    	<div data-v-2eea505b="" class="nav-panel">
	    	<div data-v-2eea505b="" class="nav-item">
		    	<a data-v-2eea505b="" href="">
		    		<span data-v-2eea505b="">我的优惠券</span>
		    	</a>
	    	</div>
    	</div>
    	<div data-v-2eea505b="" class="nav-panel">
	    	<div data-v-2eea505b="" class="nav-item">
		    	<a data-v-2eea505b="" href="/my/address" class="">
		    		<span data-v-2eea505b="">地址管理</span>
		    	</a>
	    	</div>
    	</div>
    	<!--  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'myself',
  data () {
    return {
      
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	a{
		text-decoration: none;
	}
	.myself{
		width: 100%;
		height: 100%;
	}
	#my{
		width: 100%;
		height: 100%;
		background-color: #f6f6f6;
	}
	.head{
    height: 199px;
    background: url(https://passport.ricebook.com/9013f951f15c2f7cd0ad4f526adb0007.png) 0 0 no-repeat;
    text-align: center;
    color: #fff;
    font-size: 16px;
    position: relative;
	}
	.head img{
		border-radius: 50%;
    	margin-bottom: 10px;
        width: 70px;
    	height: 70px;
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	transform: translate(-50%,-50%);
	}
	.head h4{
		position: absolute;
		top: 50px;
		left: 50%;
		margin-top: 88px;
		margin-left: -72px;
	}
	.body{
		font-size: 0;
    margin-top: 9px;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
	}
	.body .hh{
		    font-size: 12px;
    padding: 20px;
    position: relative;
    line-height: 1;
	}
	.body .hh h3{
		    font-size: 17.5px;
    font-weight: 400;
    color: #2c3038;
	}
	.body .hh>a{
		    color: #fba700;
    position: absolute;
    right: 20px;
    top: 26px;
	}
	.body .hh>p{
		color: #92969c;
    margin-top: 6px;
	}
	.body .hh>ul{
		    margin-top: 20px;
    overflow: hidden;
	}
	.body .hh>ul>li{
		float:left;
		    width: 25%;
    box-sizing: border-box;
    color: #2c3038;
    text-align: center;
    list-style: none
	}
	.body .hh>ul>li>a{
		display: block
	}
	.body .hh>ul li img{
		    width: 48px;
    height: 48px;
    display: block;
    margin: 0 auto;
}
	.body .hh>ul li span{
		margin-top: 6px;
    font-size: 12px;
    display: inline-block;
	}
	.nav-panel{
		    font-size: 0;
    margin-top: 9px;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
	}
	.nav-item{

     margin: 0 20px;
    padding-right: 20px;
    margin-right: 0;
    font-size: 15px;
    border-top: 1px solid #e0e0e0;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/P…gwNzcyM0w2NDIuMTc0MjUzIDUwNC41OTQxOFoiIHAtaWQ9IjIzOTAiPjwvcGF0aD48L3N2Zz4=) 160px no-repeat;
    background-size: 20px;
    color: #2c3038;
	}
	.nav-item a{
		padding: 15px 0;
    color: #2c3038;
    display: block;
}
	
</style>