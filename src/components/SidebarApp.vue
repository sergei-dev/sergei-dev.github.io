<template>
  <div>
    <section class="sidebar">
      <p>
        {{ text }}
      </p>
      <div class="sidebar__wrap">
        <button class="sidebar__btn">
          <img src="" alt="">
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SidebarApp',
  data: {
    text: 'text'
  },
  props: {
    text: 'hello'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
