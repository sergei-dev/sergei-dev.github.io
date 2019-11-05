<template>
    <div>
        <Sidebar></Sidebar>
    </div>
</template>

<script>
// @ is an alias to /src
import SidebarApp from '@/components/SidebarApp.vue'

export default {
  name: 'home',
  components: {
    SidebarApp
  }
}
</script>