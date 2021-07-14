<template>
  <div class="setting-wrapper">
    <h6 class="page-title">帳戶設定</h6>
    <form class="setting-form" @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label class="form-input" for="InputAccount">帳號</label>
        <input
          id="InputAccount"
          v-model="userData.account"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="InputName">名稱</label>
        <input
          id="InputName"
          v-model="userData.name"
          type="text"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="InputEmail">Email</label>
        <input
          id="InputEmail"
          v-model="userData.email"
          type="email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="InputPassword">密碼</label>
        <input
          id="InputPassword"
          v-model="userData.password"
          type="password"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label class="form-input" for="InputPasswordConfirm">密碼確認</label>
        <input
          id="InputPasswordConfirm"
          v-model="userData.checkPassword"
          type="password"
          class="form-control"
        />
      </div>
      <div class="save">
        <button type="submit" class="form-submit">儲存</button>
      </div>
    </form>
  </div>
</template>

<script>
import userAPI from "../apis/user";
import { Toast } from "../utils/helpers";

export default {
  name: "SettingForm",
  props: {
    initialUserData: {
      type: Object,
      default: () => ({
        id: -1,
        account: "",
        name: "",
        email: "",
        password: "",
      }),
    },
  },
  data() {
    return {
      setting: true,
      userData: {
        ...this.intialUserData,
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  watch: {
    initialUserData(newValue) {
      this.userData = {
        ...this.userData,
        ...newValue,
      };
    },
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.getUser({ userId });

        const { id, name, account, email } = data;

        this.userData = {
          ...this.userData,
          id,
          name,
          account,
          email,
        };
      } catch (error) {
        console.log(error);
      }
    },
    handleSubmit() {
      if (
        !this.userData.account ||
        !this.userData.name ||
        !this.userData.email ||
        !this.userData.password ||
        !this.userData.checkPassword
      ) {
        Toast.fire({
          icon: "warning",
          title: "請填寫所有欄位",
        });
        return;
      }

      if (this.userData.name.length > 15) {
        Toast.fire({
          icon: "warning",
          title: "名字長度最多 15 個字",
        });
        return;
      }

      if (this.userData.account.length > 10) {
        Toast.fire({
          icon: "warning",
          title: "帳號最多 10 個字",
        });
        return;
      }

      if (
        this.userData.password.length < 5 ||
        this.userData.password.length > 15
      ) {
        Toast.fire({
          icon: "warning",
          title: "密碼長度需要在 5 至 15 之間",
        });
        return;
      }

      if (this.userData.checkPassword !== this.userData.password) {
        Toast.fire({
          icon: "warning",
          title: "密碼與密碼確認不同",
        });
        return;
      }

      this.$emit("after-submit", {
        account: this.userData.account,
        name: this.userData.name,
        email: this.userData.email,
        password: this.userData.password,
        checkPassword: this.userData.checkPassword,
      });
    },
  },
};
</script>


<style scoped>
.setting-wrapper {
  outline: 1px solid #e6ecf0;
}

.page-title {
  height: 55px;
  width: 1063px;
  font-weight: bold;
  font-size: 19px;
  line-height: 55px;
  padding-left: 24px;
  outline: 1px solid #e6ecf0;
}

.setting-form {
  width: 642px;
  padding: 30px 0 0 16px;
}

.form-group {
  margin-bottom: 32px;
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
  padding-top: 20px;
  border: none;
  height: 48px;
  background: #f5f8fa;
  border-radius: 4px;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
}

.save {
  text-align: right;
}

.form-submit {
  height: 50px;
  width: 122px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 18px;
  line-height: 50px;
}
</style>