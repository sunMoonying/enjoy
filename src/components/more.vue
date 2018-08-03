<template>
  <div class="more">
    <navbar></navbar>
    <div class="head">良品好物</div>
   <!--  <ul>
    	<li v-for = "data in datalist.columns" @click = "bankclick(data.alias,text)">
    		{{data.text}}
    	</li>
    </ul> -->
    <ul>
    	<router-link :to = "{path:'/more/better',query: {better1,text}}" activeClass = "active" tag = "li" class = "a">精品店</router-link>
    	<router-link :to = "{path:'/more/newr',query: {newr1,text}}" activeClass = "active" tag = "li">新品店</router-link>
    </ul>
    <section>
      <router-view></router-view>
    </section>
    
  </div>
</template>

<script>
import navbar from './navbar';
import axios from 'axios';
export default {
  name: 'more',
  data () {
    return {
      datalist : [],
      text :'',
      better1 : '',
      newr1 : ''
    }
  },
  mounted(){
  	
  	this.text = this.$route.query.str;
  	console.log(this.text);
  	axios.get(`/hub/home/v1/web/category_detail.json?city_id=140&${this.text}&type=choice&page=0`).then(res=>{
  	      console.log(res.data);
  	      this.datalist = res.data;
  	      this.better1 = this.datalist.columns[0].alias;
  	      this.newr1 = this.datalist.columns[1].alias;
  	    })
  },
  components : {
  	navbar
  },
  methods : {
  	// bankclick(data,text){
  	// 	this.$router.push({path: '/more/newr', query: {data,text}});

  	// }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.more{
	.head{
		background: rgba(44,48,56,.8);
		width: 100%;
		height: 100px;
   
	}
}
ul{
    height: 42px;
    background: #f6f6f6;
    width: 100%;
    line-height: 40px;
    box-sizing: border-box;
    li{
        width: 20%;
        float: left;
        text-align: center;
      }
  }
.active{
  border-bottom: 2px solid #000;
}
</style>