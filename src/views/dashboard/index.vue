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
                        <span class="sleft">创建时间</span>
                        <el-date-picker v-model="date" type="date" value-format="yyyy-MM-dd" style="width:100%" placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                    <div class="grid-content bg-purple">
                        <el-button class="but" @click="search">查询</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div id="myChart" :style="{width: '100%', height: '449px',background:'white'}"></div>
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
            transaction: []
        };
    },
    created() {
        this.btnCAnvas();
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        // 点击查询
        search() {
            this.btnCAnvas();
        },
        btnCAnvas() {
            const arr1 = [];
            const arr2 = [];
            const arr3 = [];
            const url = `http://192.168.1.190:9023/dataAnalysis/timeOfAmount`;
            const formData = { merchantNo: this.merchantNo, date: this.date };
            axios.post(url, this.formData).then(
                res => {
                    this.data3 = res.data.data;
                    this.data3.forEach((val, index, var_arr) => {
                        arr1.push(var_arr[index].hour);
                        arr2.push(var_arr[index].amount);
                        arr3.push(var_arr[index].count);
                    });
                    this.arr = arr1.map(String);
                    this.echars2 = arr2;
                    this.transaction = arr3;

                    // 基于准备好的dom，初始化echarts实例
                    let myChart = this.$echarts.init(
                        document.getElementById("myChart")
                    );

                    // 绘制图表
                    myChart.setOption({
                        title: {
                            text: "每小时成功交易额以及笔数",
                            left: "100px",
                            textStyle: {
                                //设置主标题风格
                                fontSize: 14 //主标题文字风格
                            },
                            subtext: "单位为：元"
                        },
                        tooltip: {
                            trigger: "axis"
                        },
                        legend: {
                            data: ["今日交易金额", "今日交易笔数"],
                            textStyle: {
                                //设置主标题风格
                                fontSize: 18 //主标题文字风格
                            }
                        },
                        grid: {
                            left: "3%",
                            right: "4%",
                            bottom: "3%",
                            containLabel: true
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: false,
                            data: this.arr
                        },
                        yAxis: {
                            type: "value"
                        },
                        color: ["skyblue", "red"],
                        series: [
                            {
                                name: "今日交易笔数",
                                type: "line",
                                stack: "总量",
                                data: this.transaction
                            },
                            {
                                name: "今日交易金额",
                                type: "line",
                                stack: "总量",
                                data: this.echars2
                            }
                        ]
                    });
                },
                err => {
                    console.log("请求错误");
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
    height: 880px;
    padding-left: 5px;
}
#myChart {
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
