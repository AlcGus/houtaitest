<template>
   <div>
       <!-- <el-card class="box-card">            -->
           <div class="select">
               <el-row>
                   <el-col :span="6">
                        <label for="">选择1：</label> 
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                   </el-col>
                    <el-col :span="6">
                        <label for="">选择2：</label> 
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="5" style="margin-left:20px">
                        <el-button>重置</el-button>
                        <el-button type="primary">查询</el-button>
                    </el-col>
                    <div class="selBtn" style="float:right;">
                        <el-button type="primary">导出</el-button>
                    </div>
                </el-row>
           </div>
           <commonTable class="tableElement" :columns="columns" :table="tableData"></commonTable>
            <div class="block">
                <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="10"
                layout="total, sizes,->, prev, pager, next, jumper"
                :total="100">
                </el-pagination>
            </div>
        <!-- </el-card> -->
   </div>
</template>
<script>
import commonTable from '@/components/Table/index'
export default {
   name: '',
   components: {
       commonTable
   },
   data() {
       return {
            columns:[{
                prop:"date",
                lable:"日期",
            },{
                prop:"name",
                lable:"姓名",
            },{
                prop:"address",
                lable:"地址",
            },{
                prop:"aaa",
                lable:"aaa",
            },{
                prop:"bbb",
                lable:"bbb",
            },{
                prop:"ccc",
                lable:"ccc",
            },{
                prop:"ddd",
                lable:"ddd",
            },{
                prop:"hhh",
                lable:"hhh",
            },{
                prop:"mmm",
                lable:"mmm",
            },{
                prop:"sss",
                lable:"sss",
            },{
                prop:"vvv",
                lable:"vvv",
            },{
                prop:"qqq",
                lable:"qqq",
            },{
                prop:"www",
                lable:"www",
            }],
           tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '1 1518 弄',
            bbb: '2112 1518 弄',
            ccc: '1 1518 1',
            ddd: '11 1518 弄',
            hhh: '1 1518 弄',
            mmm: '1 1518 弄',
            sss: '1 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            },{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '1 1518 弄',
            bbb: '1 1518 弄',
            ccc: '2 1518 弄',
            ddd: '2 1518 弄',
            hhh: '3 1518 弄',
            mmm: '2112 1518 弄',
            sss: '2112 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            },{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '2112 1518 弄',
            bbb: '2112 1518 弄',
            ccc: '2112 1518 弄',
            ddd: '2112 1518 弄',
            hhh: '2112 1518 弄',
            mmm: '2112 1518 弄',
            sss: '2112 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            },{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '2112 1518 弄',
            bbb: '2112 1518 弄',
            ccc: '2112 1518 弄',
            ddd: '2112 1518 弄',
            hhh: '2112 1518 弄',
            mmm: '2112 1518 弄',
            sss: '2112 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            },{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '2112 1518 弄',
            bbb: '2112 1518 弄',
            ccc: '2112 1518 弄',
            ddd: '2112 1518 弄',
            hhh: '2112 1518 弄',
            mmm: '2112 1518 弄',
            sss: '2112 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            },{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '2112 1518 弄',
            bbb: '2112 1518 弄',
            ccc: '2112 1518 弄',
            ddd: '2112 1518 弄',
            hhh: '2112 1518 弄',
            mmm: '2112 1518 弄',
            sss: '2112 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            },{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '2112 1518 弄',
            bbb: '2112 1518 弄',
            ccc: '2112 1518 弄',
            ddd: '2112 1518 弄',
            hhh: '2112 1518 弄',
            mmm: '2112 1518 弄',
            sss: '2112 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            },{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '2112 1518 弄',
            bbb: '2112 1518 弄',
            ccc: '2112 1518 弄',
            ddd: '2112 1518 弄',
            hhh: '2112 1518 弄',
            mmm: '2112 1518 弄',
            sss: '2112 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            },{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '2112 1518 弄',
            bbb: '2112 1518 弄',
            ccc: '2112 1518 弄',
            ddd: '2112 1518 弄',
            hhh: '2112 1518 弄',
            mmm: '2112 1518 弄',
            sss: '2112 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            },{
            date: '2016-05-02',
            name: '王小虎',
            address: '2112 1518 弄',
            aaa: '2112 1518 弄',
            bbb: '2112 1518 弄',
            ccc: '2112 1518 弄',
            ddd: '2112 1518 弄',
            hhh: '2112 1518 弄',
            mmm: '2112 1518 弄',
            sss: '2112 1518 弄',
            vvv: '2112 1518 弄',
            qqq: '2112 1518 弄',
            www: '2112 1518 弄'
            }],
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            value:""
       }
   },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
}
</script>
<style lang="scss" scoped>
    .select{
        margin-top: 20px;
    }
    .block{
        margin: 40px 0 30px 0;
    }
    // .tableElement{
    //     margin-top: 30px;
    //     max-height: 532px;
    // }
</style>
