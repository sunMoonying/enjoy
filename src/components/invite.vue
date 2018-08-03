<template>
  <div class="invite">
    	<div id="container">
    		<div id="invite">
    			<img src="../../static/images/invite.jpg">
    		</div>
      </div>
    	 <div class="desc">
        邀请好友加入ENJOY，给TA发放价值50元礼券。好友完成首单消费后，你亦可获得价值50元礼券。
      	</div> 
      	<button class="invite-btn">
        即刻邀请
      	</button> 
      	<div class="result">
        已成功邀请<span class="span1">0</span>位好友 | 获得<span class="span1">0</span>元礼券
      	</div> 

      	<div class="progress">
      		<div class="bar-box">
      			
      		</div> 
      		<span class="spot" style="left: 0.56rem;">1</span> 
      		<span class="spot" style="left: 3rem;">5</span> 
      		<span class="spot" style="left: 5rem;">10</span> 
      		<span class="spot" style="left: 11rem;">25</span> 
      		<span class="spot" style="left: 22rem;">50</span>
      	</div>
      	<ul class="invite-rules clearfix">
      		<li>5人 <span style="float: right;">额外奖励<em style="padding-left: 17px">100元</em></span>
      		</li>
      		<li>10人 <span style="float: right;">额外奖励<em style="padding-left: 17px">100元</em></span>
      		</li>
      		<li>25人 <span style="float: right;">额外奖励<em style="padding-left: 17px">750元</em></span>
      		</li>
      		<li>50人 <span style="float: right;">额外奖励<em style="padding-left: 10px">2000元</em></span>
      		</li>
      	</ul>
      	<div class="rewards">
      		<div class="title">奖励明细</div>
        </div>
        <sidebar></sidebar>
  </div>

</template>

<script>
import sidebar from './sidebar'
export default {
  name: 'invite',
  data () {
    return {
      
    }
  },
  components:{
  	sidebar

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	html,body{
		width: 100%;
		font-family: "微软雅黑";
	}
	html{
		font-size: 16px;
	}
	body{
		font-size: 16px;
	}
	#invite-img{

		width: 100%;
	}
	img{
		width: 100%;
	}
	.desc{
		/* width: 8.933333rem; */
        margin: 2rem 1.4rem;
        font-size: 0.85rem;
        line-height: 1.29;
        color: #63666b;
	}
	.invite-btn{
		margin: 0 auto;
    	display: block;
    	padding: 0.6rem 2rem;
    	border-radius: 0.106667rem;
    	background-color: #ff3939;
    	font-size: 1rem;
    	text-align: center;
    	color: #fff;
    	border: none;
	}
	.result{
		margin: 2.2rem auto 0.533333rem;
		color: #2c3038;
		font-size:0.9rem;
		text-align: center;
		margin-bottom: 0.8rem;
	}
	.span1{
		color: red;
	}
	.progress {
    	position: relative;
	}
	.progress .bar-box {
    	margin: 1.5rem 0.266667rem;
    	border-radius: 0.053333rem;
    	border: 0.013333rem solid #e0e0e0;
    	padding: 0.6rem;
	}
	.progress .spot {
    	display: block;
    	position: absolute;
    	top: 3rem;
		font-size: 0.8rem;
    	color: #92969c;
	}

	.invite-rules {
    	margin: 4rem 1rem;
    	color: #92969c;
    	font-size: 0.8rem;
	}

	.invite-rules li {
    	width: 100%;
    	margin-top: 0.2rem;
    	line-height: 1.2rem;
    	list-style: none;
	}
	.rewards {
    	border-top: 1px solid #e0e0e0;
    	position: relative;
   	 	margin: 0rem 0.533333rem;
    	display: block;
    	margin-top: -35px;
	}


	.rewards .title {
    	/* width: 3.8rem; */
    	text-align: center;
    	font-size: 0.9rem;
    	color: #92969c;
    	position: absolute;
    	top: -0.6rem;
    	left: 50%;
    	margin-left: -1.5rem;
    	background-color: #fff;
	}
</style>