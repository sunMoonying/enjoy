<template>
  <div id="index">
    <navbar>
      <span @click = "handclick()">分类</span>
      <i class="iconfont icon-account" @click = "bandclick()"></i>
    </navbar>
    <sidebar></sidebar>
    <list v-show = "isshow" @xxevent = "isshow = !isshow"></list>
    
    <section>
      <router-view/>
    </section>
    
  </div>
</template>

<script>
import navbar from './navbar'
import sidebar from './sidebar'
import list from './list'
export default {
  name: 'index',
  data(){
    return{
      isshow : false
    }
  },
  components : {
    navbar,
    sidebar,
    list

  },
  methods : {
    handclick(){
      this.isshow = !this.isshow;
      console.log('ddd')
      if(!this.isshow){

        this.$router.push('/index/home');
      }
    },
    bandclick(){
      console.log(1)
      this.$router.push('/login');
    }
  }
}
</script>

<style>
section{
  padding: 15px;
  padding-top: 30px;

}

</style>