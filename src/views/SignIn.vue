<template>
  <div class="container">
    <img class="logo-img" src="../assets/AClogo.jpg" alt="LOGO" />
    <h6 class="form-title">登入 Alphitter</h6>

    <form class="signin-form">
      <div class="form-group">
        <label class="form-input" for="InputAccount">帳號</label>
        <input type="text" class="form-control" id="InputAccount" />
      </div>
      <div class="form-group">
        <label class="form-input" for="InputPassword">密碼</label>
        <input type="password" class="form-control" id="InputPassword" />
      </div>
      <button type="submit" class="form-submit">登入</button>
    </form>

    <p class="route-link">
      <router-link to="" class="route-signup">註冊 Alphitter</router-link>
      ・
      <router-link to="" class="route-admin">後台登入</router-link>
    </p>
  </div>
</template>

<style scoped>
.container {
  width: 540px;
  margin: 60px auto 0 auto;
  text-align: center;
}

.logo-img {
  display: inline-block;
  width: 50px;
  height: 50px;
}

.form-title {
  margin-top: 30px;
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
  font-weight: 500;
}

.form-control {
  border: none;
  height: 48px;
  background: #f5f8fa;
  border-radius: 4px;
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
  margin-top: 41px;
  text-align: right;
  color: #0099ff;
}

.route-signup,
.route-admin {
  text-decoration: underline;
  color: #0099ff;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
</style>