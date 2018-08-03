<template>
  <div class="more" v-if = "datalist.length !== 0">
    <navbar></navbar>
    <div class="head">
      <h2>{{datalist.group_section.title}}</h2>
      <p>{{datalist.group_section.desc}}</p>
    </div>
    <ul>
    	<router-link :to = "{path:'/more/better',query: {better1,text}}"  activeClass = "active" tag = "li" class = "a">精品店</router-link>
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
  	axios.get(`/hub/home/v1/web/category_detail.json?city_id=140&${this.text}&type=choice&page=0`).then(res=>{
  	      this.datalist = res.data;
  	      this.better1 = this.datalist.columns[0].alias;
  	      this.newr1 = this.datalist.columns[1].alias;
          this.$router.push({path:'/more/better',query: {'better1':this.better1,'text':this.text}});
          console.log(this.datalist)
        })
  },
  
  components : {
  	navbar
  }
  
}
</script>
<style scoped lang="scss">
.more{
	.head{
		background: rgba(44,48,56,.8);
		width: 100%;
		height: 100px;
    color: #fff;
    text-align: center;
    padding-top: 20px;
    h2{
      line-height: 54px;
    }
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