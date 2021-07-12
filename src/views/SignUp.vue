<template>
  <div class="container">
    <img class="logo-img" src="../assets/AClogo.jpg" alt="LOGO" />
    <h6 class="form-title">建立你的帳號</h6>

    <form class="signin-form">
      <div class="form-group">
        <label class="form-input" for="account">帳號</label>
        <input
          id="account"
          v-model="account"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="name">名稱</label>
        <input id="name" v-model="name" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label class="form-input" for="email">Email</label>
        <input id="email" v-model="email" type="email" class="form-control" />
      </div>
      <div class="form-group">
        <label class="form-input" for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="check-password">密碼確認</label>
        <input
          id="check-password"
          v-model="checkPassword"
          type="password"
          class="form-control"
        />
      </div>
      <button type="submit" class="form-submit">註冊</button>
    </form>

    <p class="route-link">
      <router-link to="/signin" class="route-signin">取消</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        name: this.name,
        email: this.email,
        password: this.password,
        checkPassword: this.checkPassword,
      });

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
  },
};
</script>

<style scoped>
.container {
  width: 540px;
  margin: 60px auto 0 auto;
  text-align: center;
}

.logo-img {
  display: inline-block;
  width: 40px;
  height: 40px;
}

.form-title {
  margin-top: 35px;
  font-weight: bold;
  font-size: 23px;
  line-height: 33px;
}

.form-group {
  margin-top: 20px;
  height: 50px;
  position: relative;
  background: #657786;
  border-radius: 50% 50% 4px 4px;
}

.form-input {
  position: absolute;
  top: 5px;
  left: 10px;
  color: #657786;
  font-size: 15px;
  line-height: 15px;
  font-weight: 500;
}

.form-control {
  border: none;
  height: 48px;
  background: #f5f8fa;
  border-radius: 4px;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
}

.form-submit {
  margin-top: 30px;
  height: 50px;
  width: 100%;
  border-radius: 50px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}

.route-link {
  margin-top: 20px;
}

.route-signin {
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  text-decoration: underline;
  color: #0099ff;
}
</style>