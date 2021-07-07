<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <div class="setting-wrapper">
      <h6 class="page-title">帳戶設定</h6>
      <form class="setting-form">
        <div class="form-group">
          <label class="form-input" for="InputAccount">帳號</label>
          <input type="text" class="form-control" id="InputAccount" />
        </div>
        <div class="form-group">
          <label class="form-input" for="InputName">名稱</label>
          <input type="text" class="form-control" id="InputName" />
        </div>
        <div class="form-group">
          <label class="form-input" for="InputEmail">Email</label>
          <input type="email" class="form-control" id="InputEmail" />
        </div>
        <div class="form-group">
          <label class="form-input" for="InputPassword">密碼</label>
          <input type="password" class="form-control" id="InputPassword" />
        </div>
        <div class="form-group">
          <label class="form-input" for="InputPasswordConfirm">密碼確認</label>
          <input
            type="password"
            class="form-control"
            id="InputPasswordConfirm"
          />
        </div>
        <div class="save">
          <button type="submit" class="form-submit">儲存</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
export default {
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  min-height: 1063px;
}

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

/* 放外框線方便辨別
  border: 5px solid #0099ff; */

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