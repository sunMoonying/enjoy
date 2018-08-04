<template>
  <div class="topicpage">

  </div>
</template>

<script>
import axios from 'axios';
import jsonp from 'jsonp';

export default {
  name: 'topicpage',
  data () {
    return {
      
    }
  },
  mounted(){
    jsonp('https://topicdata.ricebook.com/data/11882.js?_=25555817', null, (err, data) => {
      if (err) {
        //console.error(err.message);
      } else {
        // console.log(data);
      }
    });
  }
  
}
</script>


<style scoped lang="scss">

</style>