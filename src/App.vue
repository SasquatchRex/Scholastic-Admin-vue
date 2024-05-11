<template>
  <div class="flex bg-zinc-950 h-screen max-w-screen">
    <HomeSidebar/>
    <router-view/>

  </div>
</template>
<script>
import HomeSidebar from '@/components/sidebar.vue'
  export default{
    components:{
      HomeSidebar
    }
  }
</script>

