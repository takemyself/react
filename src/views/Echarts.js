import React from 'react'
import Chart from 'rc-echarts';
/**
 * 分页组件
 * paginationParams:{pageSize, pageNumber}
 */
class Echarts extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    options = () => {
        //柱状图
        option = {
            title: {
                text: '世界人口总量',  //标题
                subtext: '数据来自网络' //标题描述
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年', '2012年','2013年'] // 对比车名字，跟series name对应
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            xAxis: {
                type: 'category',
                data: ['巴西','印尼','美国','印度','中国','世界人口(万)']  //对比的参数类，横坐标的显示名字
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]  //下标对应的数据
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                },
                {
                
                    name: '2013年',
                    type: 'bar',
                    data: [19326, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };

        // 散点图
        option = {
            title: {
                        text: '世界人口总量',
                        subtext: '数据来自网络'
                    },
            legend: {
                        data: ['2011年', '2012年']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
            xAxis: {
                name: 'xxx'
            },
            yAxis: {
                name: 'yyy'
            },
            series: [
                {
                    name: '2011年',
                    symbolSize: 20,
                    data: [
                        [10.0, 8.04]
                    ],
                    type: 'scatter'
                },
                {
                    name: '2012年',
                    symbolSize: 20,
                    data: [
                        [8.0, 9.04]
                    ],
                    type: 'scatter'
                }
            ]
        };

        // 雷达图
        option = {
            title: {
                text: '基础雷达图'
            },
            tooltip: {},
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                   }
                },
                indicator: [
                   { name: '销售（sales）', max: 6500},
                   { name: '管理（Administration）', max: 16000},
                   { name: '信息技术（Information Techology）', max: 30000},
                   { name: '客服（Customer Support）', max: 38000},
                   { name: '研发（Development）', max: 52000},
                   { name: '市场（Marketing）', max: 25000}
                ]
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : '预算分配（Allocated Budget）'
                    },
                     {
                        value : [5000, 14000, 28000, 31000, 42000, 21000],
                        name : '实际开销（Actual Spending）'
                    }
                ]
            }]
        };

        //饼图
        option = {
            title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

    }

    ready(echart) {
        console.log(echart);
        echart.on('click', (params)=>{
          console.log(params);
          alert("click");
        });
      }

    render() {
        const options = {
            title: {
                text: '世界人口总量',
                subtext: '数据来自网络'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年', '2012年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
            };
          return (
            <Chart options={ options } onReady={this.ready} />
          );
    }
}

export default Echarts