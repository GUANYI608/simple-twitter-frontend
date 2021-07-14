<template>
  <div class="container">
    <img class="logo-img" src="../assets/AClogo.jpg" alt="LOGO" />
    <h6 class="form-title">建立你的帳號</h6>

    <form class="signin-form" @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label class="form-input" for="account">帳號</label>
        <input
          id="account"
          v-model="account"
          type="text"
          class="form-control"
          required
          autofocus
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="name">名稱</label>
        <input
          id="name"
          v-model="name"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="check-password">密碼確認</label>
        <input
          id="check-password"
          v-model="checkPassword"
          type="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="form-submit" :disabled="isProcessing">
        註冊
      </button>
    </form>

    <p class="route-link">
      <router-link to="/signin" class="route-signin">取消</router-link>
    </p>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  name: "SignUp",
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false, // 避免使用者重複點擊
    };
  },
  methods: {
    handleSubmit() {
      // 如果有欄位為空，則使用 Toast 提示
      // 然後 return 不繼續往後執行
      if (
        !this.account ||
        !this.name ||
        !this.email ||
        !this.password ||
        !this.checkPassword
      ) {
        Toast.fire({
          icon: "warning",
          title: "請填入所有欄位",
        });
        return;
      }

      this.isProcessing = true;

      authorizationAPI
        .signUp({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        })
        .then((response) => {
          // 取得 API 請求後的資料
          const { data } = response;

          // 判斷 data.status
          if (data.status !== "success") {
            throw new Error(data.message);
          }

          // 成功登入後轉址到餐廳首頁
          this.$router.push("/signin");
        })
        .catch((error) => {
          this.isProcessing = false;
          console.log("error", error);

          // 顯示錯誤提示;
          Toast.fire({
            icon: "warning",
            title: error,
          });
        });
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