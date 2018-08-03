<template>
	<div class="login">
	<div id="box">
		<p>
			<img src="data:image/png;base64,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" alt="">
		</p>
		<form method="post">
			<input type="text" value="" placeholder='手机号'> 
			<input type="text" value="" placeholder='短信验证码'> 
			<a href="">获取验证码</a>
			<button>登录</button>
		</form>	
		<div class="tips">
			<p>
				未注册的用户登录后自动创建账户
			</p>
			<p>
				登录即表示您同意<a href="">用户协议</a>
			</p>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      
    }
  },
  mounted(){
  	  axios.get('/users').then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	*{
		padding: 0;
		margin: 0;
	}
	html,body{
		height: 100%
	}
	.login{
		width: 100%;
		height: 100%;
	}
	#box{
		width: 19.6875rem;
		height: 25.84375rem;
		padding:3.125rem 1.875rem 0;
	}
	#box>p{
		text-align: center;
		margin-bottom: 3.125rem;
	}
	div#box img{
		display:inline-block;
		height: 2.8125rem;
	}
form{
       width:19.6875rem;
height:11.875rem
}
	form input:nth-of-type(1){
			    width: 18.3125rem;
    font-size: 1rem;
    color: #2c3038;
    border-radius: 4px;
    border: 2px solid #bdc0c5;
    padding: 0.71875rem 0.625rem;
    margin-bottom: 1.5625rem;
		}

	form input:nth-of-type(2){
		width: 9.25rem;
    font-size: 1rem;
    color: #2c3038;
    border-radius: 4px;
    border: 2px solid #bdc0c5;
    padding: 0.71875rem 1.5625rem 0.71875rem 0.625rem;
	}

	form a{
		margin-left: 0.9375rem;
    width: 4.875rem;
    border: 2px solid #1a1a1a;
    text-align: center;
    padding: 0.6875rem 0.9375rem;
    vertical-align: 0.0625rem;
    font-size: 0.8125rem;
    text-decoration: none;
    color: #bdc0c5;
    border: 2px solid #e0e0e0;
	}
	button{

    width: 100%;
    padding: 0.71875rem 0;
    background-color: #1a1a1a;
    font-family: PingFangSC-Medium;
    font-size: 1rem;
    color: #e5e5e5;
    text-align: center;
    margin-top: 1.5625rem;
    margin-bottom: 0.3125rem;
	}
	.tips{
		margin-top: 5.9375rem;
    width: 100%;
    font-size: 0.75rem;
    text-align: center;
    color: #92969c;
    margin-bottom: 1.71875rem;
	}
	.tips p{
		margin-top: 0.5rem;
		font-size: 0.75rem;
    text-align: center;
    color: #92969c;
	}
</style>