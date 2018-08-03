<template>
  <div id="index">
    <navbar></navbar>
    <sidebar></sidebar>
    
    <section>
      <router-view/>
    </section>
    
  </div>
</template>

<script>
import navbar from './navbar'
import sidebar from './sidebar'
export default {
  name: 'index',
  data(){
    return{
    }
  },
  components : {
    navbar,
    sidebar,
  },
  methods : {
  }
}
</script>

<style scoped lang="scss">


#index{
  display: flex;
  flex-direction: column;
}
section{
  padding: 15px;
  padding-top: 30px;
  flex: 1;

}

</style>