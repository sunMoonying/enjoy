<template>
  <div class="better">
    <ul>
      <li v-for = "data in datalist">
        <div>
          <h4>{{data.data.title}}</h4>
          <h5>{{data.data.desc}}</h5>
          <p><mark>{{data.data.price}}元/组</mark><span>{{data.data.original_price}}</span></p>
        </div>
        <img :src="data.data.url" alt="">
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
  	console.log(this.$route.query.better1);
    console.log(this.$route.query.text);
    axios.get(`/hub/home/v1/web/category_detail.json?city_id=140&${this.$route.query.text}&type=${this.$route.query.better1}&page=0`).then(res=>{
      console.log(res.data);
      this.datalist = res.data.list;
    })

  },
  components : {
  	
  },
  methods : {
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
  width: 100%;
  li{
    height: 90px;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    img{
      width: 110px;
      height: 73px;
      float: right;
    }
    div{
      width: 60%;
      float: left;
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
  }
}
</style>