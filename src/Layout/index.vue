<template>
   <div class="app-wraper">
      <leftSiderBar></leftSiderBar>
      <div class="layout_page">
         <topHeader></topHeader>
         <div class="main_container">
            <el-card class="box-card">       
               <keep-alive>
                  <router-view></router-view>
               </keep-alive>
            </el-card>
         </div>
      </div>
   </div>
</template>
<script>

import topHeader from "./components/header/index"
import leftSiderBar from "./components/SiderBar/index"
export default {
   name: '',
   data() {
       return {}
   },
  components: {
     topHeader,
     leftSiderBar
  },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
}
</script>
<style lang="scss" scoped>
   .app-wraper{
      height: 100%;
      display: flex;
      .box-card{
         max-height: 764px;
      }
   }
   .layout_page{
      overflow: hidden;
      height: 100%;
   }
   .main_container{
      background-color: #f3f7fd;
      padding: 20px;      
   }
</style>
