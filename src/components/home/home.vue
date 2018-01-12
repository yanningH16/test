<template>
  <div class="admin">
    <div class="menuBox">
      <navMenu></navMenu>
      <router-view/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavMenu from '../../base/navMen/navMen'
export default {
  name: 'admin',
  components: {
    NavMenu
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.admin
  width 100%
  height 100%
  // position fixed
  // display flex
  .menuBox
    flex 0 0 180px
</style>