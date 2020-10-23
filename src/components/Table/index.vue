<template>
    <div class="table">
        <el-table
        max-height="528"
        :data="table"
        stripe
        style="width: 100%">
            <!-- <el-table-column v-for="(items,index) in columns" :key="index" 
            :prop="items.prop"
            :label="items.lable"
            :width="items.width">
            </el-table-column> -->
            <Columnsel v-for="(columns,index) in columns" :key="index" :columnobj="columns"></Columnsel>
        </el-table>
    </div>
</template>
<script>
import Columnsel from './columns'
export default {
   name: '',
   props: {
        columns:{
            type:Array
        },
        table:{
            type:Array
        }
   },
   components:{
       Columnsel
   },
   data() {
       return {}
   },
  computed: {},
  beforeMount() {},
  mounted() {},
  methods: {},
  watch: {},
}
</script>
<style scoped>
    .el-table{
        font-size: 12px;
        margin-top: 30px;
        max-height: 532px;
    }
</style>
