<template>
  <div class="container">
    <img class="logo-img" src="../assets/AClogo.jpg" alt="LOGO" />
    <h6 class="form-title">登入 LAKer</h6>

    <!-- 填寫區塊 -->
    <form class="signin-form" @submit.prevent.stop="handleSubmit">
      <div class="account-form">
        <label class="form-label" for="account">帳號</label>
        <!-- 設定必填與自動focus -->
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-input"
          required
          autofocus
        />
      </div>
      <div class="password-form">
        <label class="form-label" for="password">密碼</label>
        <!-- 設定必填 -->
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-input"
          required
        />
      </div>
      <button type="submit" class="form-submit" :disabled="isProcessing">
        登入
      </button>
    </form>

    <!-- 前往連結：註冊與後台 -->
    <p class="route-link">
      <router-link to="/signup" class="route-signup">
        註冊 Alphitter
      </router-link>
      ・
      <router-link to="/admin/login" class="route-admin">
        後台登入
      </router-link>
    </p>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  name: "SignIn",
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false, // 避免使用者重複點擊
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 如果 account 或 password 為空，則使用 Toast 提示
        // 然後 return 不繼續往後執行
        if (!this.account || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請輸入使用者帳號與密碼",
          });
          return;
        }

        this.isProcessing = true;

        // 取得 API 請求後的資料
        const { data } = await authorizationAPI.signIn({
          account: this.account,
          password: this.password,
        });

        // 判斷 data.status
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // 將 token 存放在 localStorage 內
        localStorage.setItem("token", data.token);
        // 將資料傳到 Vuex 中
        this.$store.commit("setCurrentUser", data.user);

        // 輸出使用者資訊
        // console.log(data);

        // 成功登入後轉址到餐廳首頁
        this.$router.push("/homepage");
      } catch (error) {
        // 將密碼欄位清空
        this.password = "";
        // 顯示錯誤提示
        Toast.fire({
          icon: "warning",
          title: error.message,
        });
        this.isProcessing = false;
        console.log("error", error);
      }
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

.account-form,
.password-form {
  margin-top: 20px;
  height: 50px;
  width: 540px;
  position: relative;
}

.form-label {
  position: absolute;
  top: 5px;
  left: 10px;
  color: #657786;
  font-size: 15px;
  line-height: 15px;
  font-weight: 500;
}

.form-input {
  padding: 20px 10px 5px 10px;
  width: 540px;
  border: none;
  height: 48px;
  background: #f5f8fa;
  border-radius: 4px;
  font-weight: 500;
  font-size: 19px;
  border-bottom: 2px solid #657786;
}

.form-input:focus {
  outline: none;
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