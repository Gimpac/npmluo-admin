<template>
    <div class="bg">
        <div class="nav">
            <el-row :gutter="29">
                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="4">
                    <div class="grid-content bg-purple searchnav">
                        <span class="sleft">商户编号</span>
                        <el-input placeholder="商户编号" v-model="merchantNo"></el-input>
                    </div>
                </el-col>
                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="4">
                    <div class="grid-content bg-purple searchnav">
                        <span class="sleft">交易时间</span>
                        <el-date-picker v-model="date" type="date" value-format="yyyy-MM-dd" style="width:100%" placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="4">
                    <div class="grid-content bg-purple searchnav">
                        <span class="sleft">月周日</span>
                        <el-select v-model="type" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                    <div class="grid-content bg-purple">
                        <el-button class="but" @click="search">查询</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div id="myChart1" :style="{width: '100%', height: '649px',background:'white'}"></div>
        <div style="width:100%;height:326px;background:white"></div>
    </div>
</template>
<script>
import axios from "axios";
import { getToken } from "@/utils/auth";
axios.defaults.headers.token = getToken();
export default {
    data() {
        return {
            merchantNo: "", //商户编号
            date: "", //日期
            data3: [],
            arr: [],
            echars2: [],
            echars3: [],
            options: [
                { value: "mouth", label: "月" },
                { value: "week", label: "周" },
                { value: "day", label: "日" }
            ],
            type: "" //'审核状态'
        };
    },
    created() {
        this.btnCAnvas();
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        search() {
            this.btnCAnvas();
        },
        btnCAnvas() {
            const arr1 = [];
            const arr2 = [];
            const arr3 = [];
            const url = `http://192.168.1.190:9023//dataAnalysis/amountIntervalAnalysis`;
            const formData = {
                merchantNo: this.merchantNo,
                date: this.date,
                type: this.type
            };
            axios.post(url, this.formData).then(
                res => {
                    this.data3 = res.data.data;
                    this.data3.forEach((val, index, var_arr) => {
                        arr1.push(var_arr[index].interval);
                        arr2.push(var_arr[index].count);
                        arr3.push(var_arr[index].amount);
                    });
                    this.echars2 = arr2;
                    this.arr = arr1.map(String);
                    this.echars3 = arr3;
                    let myChart1 = this.$echarts.init(
                        document.getElementById("myChart1")
                    );
                    // 绘制图表
                    myChart1.setOption({
                        color: ["#61a0a8", "#3398DB"],
                        legend: {
                            data: ["交易笔数", "交易金额"]
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                // 坐标轴指示器，坐标轴触发有效
                                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        grid: {
                            left: "3%",
                            right: "4%",
                            bottom: "3%",
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: "category",
                                data: this.arr,
                                boundaryGap:true,
                                axisTick: {
                                    alignWithLabel: true
                                }
                            }
                        ],
                        yAxis: [
                            {
                    type: 'value',
                    name: '交易笔数',
                    min: 0,
                    max: 1000,
                    interval: 500,
                    axisLabel: {
                        formatter: '{value}'
                    },
                    nameLocation:'center',
                    nameGap:65
                },
                {
                    type: 'value',
                    name: '交易金额',
                     boundaryGap:true,
                    min: 0,
                    max: 60000,
                    // interval: 15000,
                    axisLabel: {
                        formatter: '{value}'
                    },
                    nameLocation:'center',
                    nameGap:65,
                    nameRotate:-90
                }
              
                        ],
                        series: [
                            {
                                name: "交易笔数",
                                type: "bar",
                                barWidth: "30%",
                                data: this.echars2
                            },
                            {
                                name: "交易金额",
                                type: "bar",
                                yAxisIndex: 1,
                                barWidth: "30%",                                
                                data: this.echars3
                            }
                        ]
                    });
                },
                err => {
                    console.log("服务器错误");
                }
            );
        },
        drawLine() {}
    }
};
</script>
<style  rel="stylesheet/scss" lang="scss" scoped>
.bg {
    background: #f5f5f5;
    width: 100%;
    height: 800px;
    padding-left: 5px;
}

#myChart1 {
    padding-top: 12px;
}
.nav {
    background: #42b983;
    padding-left: 100px;
}
.searchnav {
    height: 80px;
    display: flex;
    flex-flow: column;
    justify-content: center;
}
.but {
    margin-top: 32px;
}

.sleft {
    margin-bottom: 3px;
}
.transaction {
    margin-top: 10px;
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #42b983;
}
.bg-purple {
    background: #42b983;
}
.bg-purple-light {
    background: #42b983;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
