<template>
    <el-table-column
    :prop="columnobj.prop"
    :label="columnobj.lable"
    :width="columnobj.width"
    :formatter="columnobj.formatter">

    <!-- <template slot="header"
    slot-scope="scope">
    <render v-if="columnobj.renderHeader"
        :scope="scope"
        :render="columnobj.renderHeader">
    </render>
    <span v-else>{{ scope.columnobj.lable }}</span>
    </template>
    <template slot-scope="scope">
    <render :scope="scope"
        :render="columnobj.render">
    </render>
    </template> -->
    </el-table-column>
</template>
<script>
// import Render from './render'
export default {
    name: '',
    props:{
        columnobj:Object
    },
    data() {
        return {}
    },
    created(){
        console.log("页面进来会执行的钩子函数")
    },
    methods: {
    },
    watch: {},
}
</script>
<style scoped>
</style>
