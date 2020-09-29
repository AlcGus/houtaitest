<template>
  <div class="login-page-container">
    <img src="@/assets/logo.png">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item  prop="username">
        <el-input type="username" prefix-icon="el-icon-user" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input type="password" prefix-icon="el-icon-lock" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
            username: "",
            password: "",
        },
        rules: {
            username: [{ required: true, message: '请输入用户名称', trigger: 'blur' },],
            password: [{ required: true, message: '请输入用户密码', trigger: 'blur' },]
        }, 
      };
    },
    methods: {
        submitForm: function () {
            if(this.ruleForm.username.trim() === "admin" && this.ruleForm.password.trim() == "123456"){
                window.sessionStorage.setItem("accessToken","abc")
                this.$router.push('/userInfo')
            }else{
              this.$message.error("用户名或密码错误")
            }
        },
    },
};
</script>

<style lang="scss" scope>
	.login-page-container{
        margin-top: 60px;
		width: 400px;
		margin: 0 auto;
	}
	.el-form-item__content{
		margin-left: 0px !important;
	}
	.el-input__inner{
		height: 50px;
	}
	.el-button{
		width: 100%;
		height: 50px;
	}
</style>