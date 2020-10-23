<template>
   <div>
       <div ref="barchart" style="width:640px;height:367px"></div>
   </div>
</template>
<script>
    import echarts from "echarts";
    export default {
        name: '',
        data() {
            return {}
        },
        mounted() {
            this.init()
        },
        methods: {
            init:function(){
                const myEcharts = this.$refs.barchart
                if(myEcharts){
                    const _echarts = echarts.init(myEcharts)
                    let option = {
                        title:{
                            text:"车队长邀请人数TOP5"
                        },
                        legend:{
                            show:true,
                            right:"10%",
                            top:"15%"
                        },
                        grid: {
                            left: '5%',
                            right: '5%',
                            bottom: '5%',
                            top: '25%',
                            containLabel: true
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'none'
                            },
                            // formatter: function(params) {
                            //     return params[0].name + '<br/>' +
                            //         "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                            //         params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
                            // }
                        },
                        backgroundColor: '#fff',
                        xAxis: {
                            show: true,
                            type: 'value',
                            axisLine: {
                                lineStyle:{
                                    color:"#efefef"
                                }
                            },
                        },
                        yAxis: [{
                            type: 'category',
                            name:"单位：人",
                            nameLocation:'start',
                            nameTextStyle:{
                                color:'#000'
                            },
                            inverse: true,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#000'
                                },
                            },
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: true,
                                lineStyle:{
                                    color:"#efefef"
                                }
                            },
                            data: ['大米', '玉米', '蔬菜', '鸡蛋', '坚果']
                        }, {
                            type: 'category',
                            inverse: true,
                            axisTick: 'none',
                            axisLine: 'none',
                            show: true,
                            axisLabel: {
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: '12'
                                },
                                formatter: function(value) {
                                    if (value >= 10000) {
                                        return (value / 10000).toLocaleString() + '万';
                                    } else {
                                        return value.toLocaleString();
                                    }
                                },
                            },
                            data: [50, 22, 10, 50, 1]
                        }],
                        series: [{
                                name: '人数',
                                type: 'bar',
                                zlevel: 1,
                                itemStyle: {
                                    normal: {
                                        // barBorderRadius: 30,
                                        // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        //     offset: 0,
                                        //     color: 'rgb(57,89,255,1)'
                                        // }, {
                                        //     offset: 1,
                                        //     color: 'rgb(46,200,207,1)'
                                        // }]),
                                        color:"#2d89df"
                                    },
                                },
                                barWidth: 40,
                                data: [50, 22, 10, 50, 1],
                                label:{
                                    show:true,
                                    // color:"#fff",
                                    position:"insideRight",
                                    // offset:[-40,0]
                                },
                            },
                            // {
                            //     name: '背景',
                            //     type: 'bar',
                            //     barWidth: 20,
                            //     barGap: '-100%',
                            //     data: [50000000, 50000000, 50000000, 50000000, 1],
                            //     itemStyle: {
                            //         normal: {
                            //             color: 'rgba(24,31,68,1)',
                            //             barBorderRadius: 30,
                            //         }
                            //     },
                            // },
                        ]
                    };
                    // 绘制图表
                    _echarts.setOption(option);
                    //给浏览器添加一个监听事件，当浏览器窗口变小时，图形也相应的变小
                    window.addEventListener("resize", () => { _echarts.resize();});
                }
            }
        },
    }
</script>
<style scoped>
</style>
