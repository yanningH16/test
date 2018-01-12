<template>
  <div class="wa">
    <div class="box">
      <!-- <canvas class="canvas" width="600" height="500" ref="canvas"></canvas> -->
      <canvas width="600" height="500" class="cl" ref="cl">
      </canvas>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'first',
  data () {
    return {
    }
  },
  mounted () {
    this.canvas()
  },
  methods: {
    canvas () {
      let context = this.$refs.cl.getContext('2d')
      // 1.先绘制一个完整的空心圆
      context.beginPath()
      context.arc(250, 250, 200, 0, Math.PI * 2)
      context.stroke()
      // 2.绘制半黑半白  默认为黑色
      context.beginPath()
      context.arc(250, 250, 200, Math.PI * 3 / 2, Math.PI / 2, true)
      context.fill()
      // 3.绘制一黑一白两个半圆
      context.fillStyle = 'white'
      context.beginPath()
      context.arc(250, 150, 100, 0, Math.PI * 2)
      context.fill()

      context.fillStyle = 'black'
      context.beginPath()
      context.arc(250, 350, 100, 0, Math.PI * 2)
      context.fill()
      // 4.绘制两个小圆
      context.fillStyle = 'black'
      context.beginPath()
      context.arc(250, 150, 30, 0, Math.PI * 2)
      context.fill()

      context.fillStyle = 'white'
      context.beginPath()
      context.arc(250, 350, 30, 0, Math.PI * 2)
      context.fill()
    }
  }
}
</script>
<style lang="stylus" scoped>
.wa
  padding 20px
  float left
  width 80%
  // height 100%
  .box
    width 1000px
    height 800px
    border 1px solid black
</style>
