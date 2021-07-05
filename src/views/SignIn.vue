<template>
  <div class="container">
    <img src="../assets/AClogo.jpg" alt="LOGO" />

    <h6>登入 Alphitter</h6>

    <form>
      <div class="form-group">
        <label for="InputEmail">帳號</label>
        <input
          type="email"
          class="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div>
        <label for="InputPassword">密碼</label>
        <input
          type="password"
          class="form-control"
          id="InputPassword"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">登入</button>
    </form>

    <p>
      <router-link to="/1">註冊 Alphitter</router-link>
      ・
      <router-link to="/2">後台登入</router-link>
    </p>
  </div>
</template>