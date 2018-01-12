<template>
  <div class="hello">
    <div class="wrap">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
      </el-container>
      <el-col :span="3">
        <el-menu style="height:800px;text-align:left" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <router-link :to="{name:'first'}">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>营销短信</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">营销短信</el-menu-item>
              <el-menu-item index="1-2">效果追踪短信</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统短信</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">模板管理</el-menu-item>
              <el-menu-item index="3-2">接口调用说明</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">签名管理</span>
          </el-menu-item>
          <router-link :to="{name:'two'}">
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">短信查询</span>
            </el-menu-item>
          </router-link>
          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">月账单</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-setting"></i>
            <span slot="title">帮助文档</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.el-header
  background-color #B3C0D1
  color #333
  line-height 60px
.el-aside
  color #333
</style>

