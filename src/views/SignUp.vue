<template>
  <div class="container">
    <img class="logo-img" src="../assets/AClogo.jpg" alt="LOGO" />
    <h6 class="form-title">建立你的帳號</h6>

    <form class="signin-form">
      <div class="form-group">
        <label for="InputEmail">帳號</label>
        <input
          type="email"
          class="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
        />
      </div>
      <div>
        <label for="InputPassword">密碼</label>
        <input type="password" class="form-control" id="InputPassword" />
      </div>
      <button type="submit" class="form-submit">登入</button>
    </form>

    <p>
      <router-link to="/1">註冊 Alphitter</router-link>
      ・
      <router-link to="/2">後台登入</router-link>
    </p>
  </div>
</template>
