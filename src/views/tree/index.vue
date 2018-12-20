<template>
<div>
    <div class="container">
      <div class="bg">
        <div class="nav">
    <el-row :gutter="29">
    <el-col :xs="6" :sm="6" :md="4" :lg="5" :xl="4">
      <div class="grid-content bg-purple searchnav">
        <span class="sleft">商户编号</span>
        <el-input  placeholder="商户编号"></el-input>
      </div>
      </el-col>
    <el-col :xs="4" :sm="4" :md="4" :lg="5" :xl="4">
      <div class="grid-content bg-purple searchnav">
        <span class="sleft">商户名称</span>
        <el-input  placeholder="商户名称"></el-input>
      </div>
      </el-col>
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
      <div class="grid-content bg-purple searchnav">
    <span class="sleft">创建时间</span>
    <el-date-picker
        type="datetime"
        placeholder="选择日期时间"
        value-format="yyyy-MM-dd-HH-mm-ss"
        style="width:100%">
      </el-date-picker>
      </div>
    </el-col>
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
      <div class="grid-content bg-purple searchnav">
        <span class="sleft">至</span>
    <el-date-picker
        type="datetime"
        placeholder="选择日期时间"
        value-format="yyyy-MM-dd-HH-mm-ss"
        style="width:100%">
      </el-date-picker>
      </div>
    </el-col>
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
      <div class="grid-content bg-purple searchnav">
        <span class="sleft">审核状态</span>
        <el-select v-model="status" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
      </div>
    </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
      <div class="grid-content bg-purple">
      <el-button class="but">查询</el-button>
      </div>
    </el-col>
  </el-row>
        </div>
         <div class="transaction">
    <div>
    <el-table
    :data="tableData4"
    border
    >
    <el-table-column
      fixed
      prop="date"
      label="序号"
      type="index"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      align="center"
      prop="order_no"
      label="商户编号"
      width="263">
    </el-table-column>
    <el-table-column
      align="center"
      prop="torder_no"
      label="商户名称"
      width="200">
    </el-table-column>
     <el-table-column
      prop="account_name"
      align="center"
      label="商户状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="card_no"
      align="center"
      label="审核状态"
      width="200">
    </el-table-column>
    <el-table-column
      prop="open_bank"
      align="center"
      label="审核意见"
      width="150">
    </el-table-column>
    <el-table-column
      prop="card_account_type"
      align="center"
      label="审核时间"
      width="130">
    </el-table-column>
    <el-table-column
      prop="acq_merchant_no"
      align="center"
      label="最后修改时间"
      width="200"
      >
    </el-table-column>
     <el-table-column
      prop="amount"
      align="center"
      label="创建时间"
      width="204">
    </el-table-column>
    <el-table-column
      prop="status"
      align="center"
      label="操作"
      width="100">
    </el-table-column>
  </el-table>
    </div>
  </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        { value: "0", label: "全部" },
        { value: "1", label: "待审核" },
        { value: "2", label: "审核通过" },
        { value: "3", label: "未通过" },
        { value: "4", label: "已提交修改" },
        { value: "5", label: "已完成" }
      ],
      status: "" //'审核状态'
    };
  }
};
</script>

<style scoped>
.bg {
  background: #f5f5f5;
  padding: 25px 0px 25px 15px;
}
.container {
  padding: 20px;
}

.nav {
  background: #42b983;
  padding-left: 5px;
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

