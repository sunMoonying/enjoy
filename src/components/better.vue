<template>
  <div class="better">
    <ul>
      <li v-for = "data in datalist" @click = "bandclick(data.data.enjoy_url)">
        <div class="text">
          <h4>{{data.data.title}}</h4>
          <h5>{{data.data.desc}}</h5>
          <p><mark>{{data.data.price}}元/组</mark><span>{{data.data.original_price}}</span></p>
        </div>
        <img :src="data.data.url" alt="">
        <div class="button">
          <span v-for = "data1 in data.data.ext.display_prop">{{data1.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import navbar from './navbar';
import axios from 'axios';
export default {
  name: 'better',
  data () {
    return {
      datalist : []
    }
  },
  mounted(){
    axios.get(`/hub/home/v1/web/category_detail.json?city_id=140&${this.$route.query.text}&type=${this.$route.query.better1}&page=0`).then(res=>{
      this.datalist = res.data.list;
    })

  },
  components : {
  	
  },
  methods : {
  	bandclick(data){
      var str2 = data.substr(29);
      this.$router.push({path: '/detail1', query: {str2}});
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
  width: 100%;
  background: #f6f6f6;
  li{
    height: 144px;
    padding: 20px;
    background: #fff;
    margin-bottom: 10px;
    img{
      width: 110px;
      height: 73px;
      float: right;
    }
    .text{
      width: 60%;
      float: left;
      padding-bottom: 26px;
      h4{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #2c3038;
        font-size: 15px;
        font-weight: 400;
        line-height: 30px;
        
      }
      h5{
        color: #92969c;
        font-size: 13px;
        line-height: 26px;
        font-weight: 100;
      }
      p{
        mark{
          color: #ff3939;
          background: 0;
          line-height: 20px;
          font-size: 16px;
        }
        span{
          margin-left: 10px;
          vertical-align: middle;
          text-decoration: line-through;
          color: #92969c;
        }

      }
    }
    .button{
      height: 30px;
      border-top: 1px solid #ccc;
      clear: both;
      padding-top: 20px;
      span{
        margin-right: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 2px;
        color: #737373!important;
        background: rgb(246, 246, 246);
        font-size: 10px;
      }
    }
  }
}
</style>