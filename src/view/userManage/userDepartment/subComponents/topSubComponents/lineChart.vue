<template>
   <div>
      <div ref="linechart" style="width:930px;height:367px"></div>
   </div>
</template>
<script>
import echarts from 'echarts'
export default {
   name: '',
   data() {
      return {
         NO2_data : [502, 205, 332, 281, 398, 214, 344, 132, 581, 198, 614, 244],
         date_list : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      }
   },
   mounted() {
      this.init()
   },
   methods: {
      init:function(){
         const myEcharts = this.$refs.linechart
         if(myEcharts){
            const _echarts = echarts.init(myEcharts)
            const option = {
                     backgroundColor: '#fff',
                     title: {
                           text: '近一年车队长每月邀请人数(新增)',
                           textStyle: {
                              align: 'center',
                              color: '#000',
                              fontSize: 15,
                           },
                           top: '5%',
                           left: 'left',
                     },
                     legend: {
                           data: ['每月增加人数'],
                           textStyle: {
                              color: '#2f90ff',
                              // align: 'right',
                           },
                           x:'right',
                           top:"15%"   
                     },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                              //   color: {
                              //       type: 'linear',
                              //       x: 0,
                              //       y: 0,
                              //       x2: 0,
                              //       y2: 1,
                              //       colorStops: [{
                              //           offset: 0,
                              //           color: 'rgba(0, 255, 233,0)'
                              //       }, {
                              //           offset: 0.5,
                              //           color: 'rgba(255, 255, 255,1)',
                              //       }, {
                              //           offset: 1,
                              //           color: 'rgba(0, 255, 233,0)'
                              //       }],
                              //       global: false
                              //   }
                              color:"#2f90ff"
                            },
                        },
                    },
                    grid: {
                        top: '25%',
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                        // containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        // offset:'5px',
                        axisLine: {
                            show: true,
                            lineStyle:{
                               color:"#2f90ff"
                            }
                        },
                        axisTick:{
                           show:false
                        },
                        splitArea: {
                            // show: true,
                            color: '#0092fe',
                            lineStyle: {
                                color: '#0092fe'
                            },
                        },
                        axisLabel: {
                            color: '#000',
                           //  show:false
                        },
                        splitLine: {
                            show: false
                        },
                        boundaryGap: true,
                        data: this.date_list,
                        // date:getVirtulData()['data'],

                    }],

                    yAxis: [{
                        type: 'value',
                        name:"单位：人",
                        nameTextStyle:{
                           color:"#000"
                        },
                        min: 0,
                        // max: 140,
                        splitNumber: 4,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                 type:"dashed",
                            }
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: true,
                            margin: 20,
                            textStyle: {
                                color: '#000',

                            },
                        },
                        axisTick: {
                            show: false,
                        },
                    }],
                    series: [{
                            name: '每月增加人数',
                            type: 'line',
                            // smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: false,
                            lineStyle: {
                                normal: {
                                    color: "#2f90ff",
                                    shadowColor: 'rgba(0, 0, 0, .3)',
                                    // shadowBlur: 0,
                                    // shadowOffsetY: 5,
                                    // shadowOffsetX: 5,
                                },
                            },
                            label: {
                              //   show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#2f90ff',
                                }
                            },
                            itemStyle: {
                                color: "#2f90ff",
                                borderColor: "#fff",
                              //   borderWidth: 3,
                              //   shadowColor: 'rgba(0, 0, 0, .3)',
                              //   shadowBlur: 0,
                              //   shadowOffsetY: 2,
                              //   shadowOffsetX: 2,
                            },
                            tooltip: {
                                show: true
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(0, 120, 255,1)'
                                        },   
                                        {
                                            offset: 1,
                                            color: 'rgba(0, 120, 255,0)'
                                        }
                                    ], false),
                                    // shadowColor: 'rgba(42,142,255, 0.9)',
                                    // shadowBlur: 20
                                }
                            },
                            data: this.NO2_data
                        }
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
