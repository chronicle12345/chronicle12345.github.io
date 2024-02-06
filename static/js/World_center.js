// 初始化echart实例对象
//
// var right1Chart = echarts.init(document.getElementById('center'), 'dark');


// ----------右1的配置项-------------------
var ecPie = echarts.init(document.getElementById('center'), 'lightTheme');
var pieOption = {

            backgroundColor: '#333', //背景颜色
            title: {
                text: '死亡人数分布图',
                // subtext: '模拟数据',
                // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                x: 'center',
                // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                y: 'top',
                // itemGap设置主副标题纵向间隔，单位px，默认为10，
                itemGap: 30,
                backgroundColor: '#EEE',
                // 主标题文本样式设置
                textStyle: {
                    fontSize: 16,
                    fontWeight: 'bolder',
                    color: '#eee'
                },
                // 副标题文本样式设置

            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                textStyle: { //图例文字的样式
                    color: '#fff', //文字颜色
                    fontSize: 10 //文字大小
                }
            },
            visualMap: {
                show: false, //不显示visualMap组件，只用于明暗度的映射
                min: 20, //映射的最小值为80
                max: 2000000, //映射的最大值为600
                inRange: {
                    colorLightness: [0, 1] //明暗度的范围为0到1
                }
            },
            series: [{
                name: '死亡人数',
                type: 'pie',
                radius: '55%', //半径
                roseType: 'angle', //玫瑰样式--南丁格尔玫瑰图，突出角度
                //图形样式
                itemStyle: {
                    //普通样式
                    normal: {
                        shadowBlur: 100, //阴影大小
                        shadowOffsetX: 0, //阴影水平方向的偏移
                        shadowOffsetY: 0, //阴影垂直方向的偏移
                        shadowColor: 'rgba(0,0,0,0.5)' //阴影颜色
                    },
                    //高亮样式
                    emphasis: {
                        shadowBlur: 200, //阴影大小
                        shadowColor: 'rgba(0,0,0,0.5)' //阴影颜色
                    }
                },
                //文本样式
                label: {
                    //文本普通样式
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.8)' //文字颜色（红绿蓝,透明度）-白色
                        }
                    }
                },
                //引导线样式
                labelLine: {
                    //引导线普通样式
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.4)' //引导线颜色（红绿蓝,透明度）-白色
                        }
                    }
                },
                //具体数据
                data: app
            }]
        }
        ecPie.setOption(pieOption);

//


// 使用刚指定的配置项和数据显示图表。
right1Chart.setOption(option);