<template>
  <div id="app">
    <section>
      <router-view/>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none
}
img{
	display: block;
	width: 100%
}


</style>
