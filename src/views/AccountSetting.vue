<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <!-- 使用 SettingForm 元件 -->
    <SettingForm
      :initial-user-data="userData"
      :isUserSetting="setting"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import SettingForm from "../components/SettingForm";
import userAPI from "../apis/user";
import { Toast } from "../utils/helpers";

export default {
  name: "AccountSetting",
  components: {
    SideBar,
    SettingForm,
  },
  data() {
    return {
      setting: true,
      userData: {
        id: -1,
        account: "",
        name: "",
        email: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
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
    async handleAfterSubmit({ account, name, email, password, checkPassword }) {
      try {
        const { data } = await userAPI.editUser({
          userId: this.$route.params.id,
          account,
          name,
          email,
          password,
          checkPassword,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "已完成帳戶資料更新",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法更新用戶資訊，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}
</style>