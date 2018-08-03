<template>
  <div class="list">

    <div id="tb-list" v-if="datalist!=null&& datalist.length>0">
      <ul class="cate-section" @click = "backclick()"  v-for="data in datalist"> 
        <p>{{data.name}}</p> 
        <li @click = "handclick(obj.id)" v-for="obj in data.sub_category_list">{{obj.name}}</li>
      </ul>
    </div>
  </div>
    

  </div>
</template>
<!-- 需要动态获取列表 -->
<script>
import router from "../router" 
import axios from "axios"
export default {
  name: 'list',
  data () {
    return {
      datalist : []
    }
  },
  methods : {
  	handclick(data){
  		router.push(`/index/entry/${data}`);
  	},
  	backclick(){
  		this.$emit('xxevent')
  	}
  },
  mounted(){
    axios.get('/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTQwJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9ZDM5MTBmMDA1N2Q2NzBlNzU0MmQxMTlkYzRhZWVlNzYmMjAxODA4MDIxMDAw').then(res=>{
      console.log(res.data)
      this.datalist = res.data
    })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#tb-list{
  position: fixed;
  top: 40px;
  left: 0;
  height: 100%;
  width: 100%;
  background: #f6f6f6;
  z-index: 100;
  p{
    /* background-color: #fff; */
    width: 100%;
    float: left;
    padding: 9px 20px;
    font-size: 18px;
    color: #2c3038;
    text-align: left;
  }
  li{
      float: left;
      height: 49px;
      width: 32.8%;
      font-size: 16px;
      text-align: center;
      color: #2c3038;
      border: 1px solid #e4e5e7;
      line-height: 49px;
      background-color: #fff;
  }
} 

</style>