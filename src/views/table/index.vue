<template>
  <div class="background">
    <div class="container">
      <div class="bg">
        <div class="collpse">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="基本信息" name="1" class="coll">
              <div style="border-top:1px solid #ccc;padding-top:10px">
                <el-row :gutter="39" class="flexrow">
                  <el-col :xs="8" :sm="10" :md="10" :lg="10" :xl="8">
                    <div class="grid-content bg-purple searchnav">
                      <span class="sleft">代理名称:</span>
                      <el-input placeholder="商户编号" prop="name"></el-input>
                    </div>
                  </el-col>
                  <el-col :xs="8" :sm="10" :md="10" :lg="10" :xl="8">
                    <div class="grid-content bg-purple searchnav">
                      <span class="sleft">商户全称:</span>
                      <el-input placeholder="商户名称"></el-input>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="39" class="flexrow">
                  <el-col :xs="8" :sm="10" :md="10" :lg="10" :xl="8">
                    <div class="grid-content bg-purple searchnav">
                      <span class="sleft">商户简称:</span>
                      <el-input placeholder="商户编号"></el-input>
                    </div>
                  </el-col>
                  <el-col :xs="8" :sm="10" :md="10" :lg="10" :xl="8">
                    <div class="grid-content bg-purple searchnav">
                      <span class="sleft">企业法人:</span>
                      <el-input placeholder="商户名称"></el-input>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="39" class="flexrow">
                  <el-col :xs="8" :sm="10" :md="10" :lg="10" :xl="8">
                    <div class="grid-content bg-purple searchnav">
                      <span class="sleft">联系人手机号:</span>
                      <el-input placeholder="商户编号"></el-input>
                    </div>
                  </el-col>
                  <el-col :xs="8" :sm="10" :md="10" :lg="10" :xl="8">
                    <div class="grid-content bg-purple searchnav">
                      <span class="sleft">法人身份证:</span>
                      <el-input placeholder="商户名称"></el-input>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="39" class="flexrow">
                  <el-col :xs="8" :sm="10" :md="10" :lg="10" :xl="8">
                    <div class="grid-content bg-purple searchnav">
                      <span class="sleft">联系人邮箱:</span>
                      <el-input placeholder="商户编号"></el-input>
                    </div>
                  </el-col>
                  <el-col :xs="8" :sm="10" :md="10" :lg="10" :xl="8">
                    <div class="grid-content bg-purple searchnav radio">
                      <span class="sleft">商户轮询策略:</span>
                      <el-radio-group v-model="radio2">
                        <el-radio :label="3">不轮询</el-radio>
                        <el-radio :label="6">随机轮询</el-radio>
                        <el-radio :label="9">顺序轮询</el-radio>
                      </el-radio-group>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-collapse-item>
            <el-collapse-item title="费率问题" name="2">
              <div style="padding:10px 60px 10px 60px">
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm sexForm">
                  <el-form-item label="代理名称" class="labelItem" prop="age" :rules="[
                  { required: true, message: '年龄不能为空'},
                  { type: 'number', message: '年龄必须为数字值'}
                  ]">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="商户全称" class="labelItem" prop="age" :rules="[
                  { required: true, message: '年龄不能为空'},
                  { type: 'number', message: '年龄必须为数字值'}
                  ]">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="商户简称" class="labelItem" prop="age" :rules="[
                  { required: true, message: '年龄不能为空'},
                  { type: 'number', message: '年龄必须为数字值'}
                  ]">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="企业法人" class="labelItem" prop="age" :rules="[
                  { required: true, message: '年龄不能为空'},
                  { type: 'number', message: '年龄必须为数字值'}
                  ]">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                  </el-form-item>
                
                </el-form>
              </div>
            </el-collapse-item>
            <el-collapse-item title="费率设置" name="3">
              <div class="settle">
              <div class="percent">
                      <span style="width:88px">D0微信扫码:</span>
                     <div class="percentItem">
                        <el-input class="Bridus" placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1微信扫码:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0微信H5:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1微信H5:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0微信公众号:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1微信公众号:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0微信app:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1微信app:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0支付宝扫码:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1支付宝扫码:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0支付宝H5:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1支付宝H5:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0 QQ PC:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1 QQ PC:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0 QQ 手机:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1 QQ 手机:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0WAP快捷:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1WAP快捷:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0无卡快捷:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1无卡快捷:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0网银B2C:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1网银B2C:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0网银B2B:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1网银B2B:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0银联扫码:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1银联扫码:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0京东扫码:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1京东扫码:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">D0苏宁扫码:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                      <span style="width:88px">T1苏宁扫码:</span>
                     <div class="percentItem">
                        <el-input placeholder="商户编号" prop="name"></el-input>
                        <span>%</span>
                     </div>
              </div>
              <div class="percent">
                    
              </div>
              <div class="percent">
                    
              </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="结算设置" name="4">
             <div class="setAccount">

             </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            activeNames: ["1", "2", "3"],
            radio2: 3,
            numberValidateForm: {
                age: ""
            }
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
};
</script>

<style>
.el-input__inner {
    border-radius: 0;
}

.buttomInput {
  display: flex;
  margin-left:8px;
}


.background {
    background: #f5f5f5;
}
.bg {
    background: white;
    padding: 25px 0px 25px 15px;
}
.container {
    padding: 20px;
}

.searchnav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.radio {
    height: 36px;
}

.sleft {
    width: 110px;
    font-weight: 600;
}

.flexrow {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}

.sexForm {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}

.labelItem {
  width: 40%;
}
.settle {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left:50px;
}
.percent {
  width:24%;
  display: flex;
  align-items: center;
  margin-top:10px;
}

.percentItem {
  display: flex;
  align-items: center;
}

.percentItem span {
  width: 36px;
  height:36px;
  border:1px solid #dcdfe6;
  border-left:none;
  text-align: center;
  line-height: 36px;
}

.setAccount {
  padding: 10px 50px 10px 50px;
  background: red;
  height: 300px;
}
</style>



