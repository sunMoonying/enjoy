 <template>
  <div class="discovery" v-if="datalist.length !== 0">
    <h2>{{datalist[0].data.group_section.title}}</h2>
    <p>{{datalist[0].data.group_section.desc}}</p>
    <div class="swiper-container a">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for = "data in sidelist">
            	<img :src="data.url">
      			<h6>{{data.tag}}</h6>
      			<h4>{{data.title}}</h4>
      			<h5>{{data.desc}}</h5>
            </div>
        </div>
    </div>
     <div class="swiper-container b">
       <div class="swiper-wrapper">
         <div class="swiper-slide">
          <img src="../../static/img/20373785523424.png">
          <div class="opation">
            <p>日本料理</p>
            <p>是个精品店</p>
          </div>
        </div>
         <div class="swiper-slide">
          <img src="../../static/img/20373791223425.png">
          <div class="opation">
            <p>精选西餐</p>
            <p>是个精品店</p>
          </div>
        </div>
         <div class="swiper-slide">
          <img src="../../static/img/20373794123454.png">
          <div class="opation">
            <p>今日特卖</p>
          </div>
        </div>
       </div>
    </div>

    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for = "data in sidelist1">
              <img :src="data.url">
            <h4>{{data.title}}</h4>
            </div>
        </div>
    </div>

    <div class="list">
      <h2>{{datalist[3].data.group_section.title}}
        <span @click = "bandclick(datalist[3].data.group_section.enjoy_url)">查看更多</span></h2>
      <p>{{datalist[3].data.group_section.desc}}</p>
      <ul>
        <li v-for = "data in datalist[3].data.tabs" @click = "detailClick(data.enjoy_url
)">
          <img :src="data.url">
        </li>
      </ul>
    </div>
    <div class="list">
      <h2>{{datalist[4].data.group_section.title}}
        <span @click = "bandclick(datalist[4].data.group_section.enjoy_url)">查看更多
        </span>
      </h2>
      <p>{{datalist[4].data.group_section.desc}}</p>
      <ul>
        <li v-for = "data in datalist[4].data.tabs" @click = "detailClick(data.enjoy_url
)">
          <img :src="data.url">
        </li>
      </ul>
    </div>
    <div class="list">
      <h2>{{datalist[5].data.group_section.title}}
        <span @click = "bandclick(datalist[5].data.group_section.enjoy_url)">查看更多
        </span>
      </h2>
      <p>{{datalist[5].data.group_section.desc}}</p>
      <ul>
        <li v-for = "data in datalist[5].data.tabs" @click = "detailClick(data.enjoy_url
)">
          <img :src="data.url">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from "../router" 

export default {
  name: 'discovery',
  data () {
    return {
      	datalist : [],
      	sidelist : [],
        sidelist1 : []
        
    }
  },
	mounted(){
		axios.get('/hub/home/v1/web/explore.json?city_id=140').then(res=>{
			// console.log(res.data);
			this.datalist = res.data;
			// console.log(this.datalist);
      this.sidelist  = res.data[0].data.tabs;
      this.sidelist1  = res.data[2].data.tabs;
			// console.log(this.sidelist)
			this.$nextTick(function(){
				new Swiper('.swiper-container',{
	    		slidesPerView: 'auto',
          spaceBetween: 15,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
		    });
			});

		})
	},
	components : {
	},
  methods : {
    bandclick(data){
      var str = data.substr(39);
      window.localStorage.setItem('more-router',str);
      this.$router.push({path: '/more', query: {str}});
    },
    detailClick(data1){
      var str2 = data1.substr(29);
      this.$router.push({path: '/detail1', query: {str2}});

    }
  }
  
}
</script>

<style scoped lang="scss">
.discovery{
  h2{
    font-weight: 600;
    color: #191919;
  }
}
.discovery>p{
  font-size: 12px;
  color: #92969c
}


.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  img{
    width: 162px;
    height: 90px;
  }
}

.a img{
	height: 200px;
}
.swiper-container{
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 40px;
}

.swiper-slide {
   text-align: left;
   font-size: 12px;
   background: #fff;
   width: 90%;
}
.b .swiper-slide{
  width: 162px;
  height: 80px;
}
.b{
    position: relative;
    .opation{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #fff;
      line-height: 20px;
    }
}
h6{
 color :  #ff3939;
 font-weight: 400;
 line-height: 20px;
}
h4{
  line-height: 30px;
  font-size: 16px;
}
h5{
  font-weight: 400;
  line-height: 30px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.list{
  margin-top: 20px;
  margin-bottom: 40px;
  p{
    font-size: 12px;
    color: #92969c;
  }
  span{
    float: right;
    color: #ff3939;
    font-size: 14px;
    font-weight: 100;
  }
  ul{
    display: flex;
    li{
      flex : 1;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}


</style>