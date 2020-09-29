<template>
   <div class="siderbar">
       <el-row class="siderbar-row">
           <el-col :span="24">
                <el-menu
                router
                :default-active="$route.path"
                unique-opened
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#001529"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>系统管理</span>
                        </template>
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-submenu index="1-2">
                            <template slot="title">用户管理</template>
                            <el-menu-item index="/userManage/userInfo">用户信息</el-menu-item>
                            <el-menu-item index="/userManage/userDepartment">用户部门</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航二</span>
                        </template>
                        <el-menu-item index="/userManage/userInfo">首页</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航三</span>
                        </template>
                        <el-menu-item index="/userManage/userDepartment">首页2</el-menu-item>
                        <el-submenu index="3-2">
                            <template slot="title">aaaaaa</template>
                            <el-menu-item index="1">bbbbb</el-menu-item>
                            <el-menu-item index="2">cccccc</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-col>
       </el-row>
   </div>
</template>
<script>

export default {    
    name: '',
    data() {
       return {

       }
    },
    components: {},
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style lang="scss" scoped>
    .siderbar{
        min-width: 240px !important;
        height: 100vh;
        background-color:#001529;
        .siderbar-row{
            height: 100vh;
        }
        .el-col{
            margin-top: 120px;
        }
        .el-menu{
            border: none;
        }
    }
</style>
<style>
    .el-menu-vertical-demo>.el-submenu>.el-submenu__title {
        height: 70px;
        line-height: 70px;        
        padding-left: 30px !important;
    }
    .el-submenu .el-menu-item,
    .el-submenu .el-menu .el-submenu .el-submenu__title {
        padding-left:60px!important;
    }
    .el-submenu .el-menu .el-submenu .el-menu .el-menu-item{
        padding-left: 80px !important;
    }
</style>
