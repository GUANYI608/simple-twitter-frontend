<template>
  <div class="container">
    <img class="logo-img" src="../assets/AClogo.jpg" alt="LOGO" />
    <h6 class="form-title">後台登入</h6>

    <!-- 填寫區塊 -->
    <form class="signin-form" @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label class="form-input" for="InputAccount">帳號</label>
        <input
          id="InputAccount"
          v-model="account"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="InputPassword">密碼</label>
        <input
          id="InputPassword"
          v-model="password"
          type="password"
          class="form-control"
        />
      </div>
      <button type="submit" class="form-submit" :disabled="isProcessing">
        登入
      </button>
    </form>

    <!-- 前往連結：註冊與後台 -->
    <p class="route-link">
      <router-link to="/signin" class="route-signin">前台登入</router-link>
    </p>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminLogIn",
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false, // 避免使用者重複點擊
    };
  },
  methods: {
    handleSubmit() {
      // 如果 account 或 password 為空，則使用 Toast 提示
      // 然後 return 不繼續往後執行
      if (!this.account || !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入 account 和 password",
        });
        return;
      }

      this.isProcessing = true;

      authorizationAPI
        .adminLogIn({
          account: this.account,
          password: this.password,
        })
        .then((response) => {
          // 取得 API 請求後的資料
          const { data } = response;

          // 判斷 data.status
          if (data.status !== "success") {
            throw new Error(data.message);
          }

          // 將 token 存放在 localStorage 內
          localStorage.setItem("token", data.token);

          // 成功登入後轉址到餐廳首頁
          this.$router.push("/admin/homepage");
        })
        .catch((error) => {
          // 將密碼欄位清空
          this.password = "";
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: error.message,
          });
          this.isProcessing = false;
          console.log("error", error);
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
  color: #657786;
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

.route-signin {
  text-decoration: underline;
  color: #0099ff;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
</style>