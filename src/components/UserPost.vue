<template>
  <div class="userpost">
    <h6 class="page-title">首頁</h6>
    <div class="post-tweet">
      <img class="user-avatar" src="../assets/avatar.jpg" alt="avatar" />
      <div class="form-group">
        <label class="form-input" for="NewTweet"></label>
        <textarea
          id="NewTweet"
          class="tweet-content"
          name="NewTweet"
          rows="4"
          cols="50"
          placeholder="有什麼新鮮事？"
        ></textarea>
        <button type="submit" class="post-button">推文</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.userpost {
  outline: 1px solid #e6ecf0;
  width: 600px;
}

.page-title {
  height: 55px;
  font-weight: bold;
  font-size: 18px;
  line-height: 55px;
  padding-left: 15px;
  outline: 1px solid #e6ecf0;
}

.post-tweet {
  position: relative;
  height: 130px;
  background: #ffffff;
  outline: 1px solid #e6ecf0;
  border-bottom: 10px solid #e6ecf0;
}

.user-avatar {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.tweet-content {
  margin: 21px 15px 0 75px;
  width: 435px;
  font-size: 18px;
  font-weight: 500;
  color: #9197a3;
  /* 去除邊框與右下角與輸入時的提示框線 */
  border: none;
  resize: none;
  outline: none;
}

.tweet-content::placeholder {
  font-weight: 500;
  font-size: 18px;
  color: #9197a3;
}

.post-button {
  position: absolute;
  right: 15px;
  bottom: 10px;
  height: 40px;
  width: 64px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
}
</style>
