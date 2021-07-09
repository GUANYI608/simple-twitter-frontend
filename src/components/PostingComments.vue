<template>
  <section class="postingcomments">
    <div class="comment">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱、帳號與留言時間 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 留言對象 -->
      <p class="reply-to">回覆<span class="tweet-account">@apple</span></p>

      <!-- 留言內容 -->
      <p class="comment-content">Gooood job!</p>
    </div>
    <!-- 以下 comment 先複製兩個看樣式，之後用 v-for 迴圈顯示內容 -->
    <div class="comment">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱、帳號與留言時間 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 留言對象 -->
      <p class="reply-to">回覆<span class="tweet-account">@apple</span></p>

      <!-- 留言內容 -->
      <p class="comment-content">Gooood job!</p>
    </div>
    <div class="comment">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱、帳號與留言時間 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 留言對象 -->
      <p class="reply-to">回覆<span class="tweet-account">@apple</span></p>

      <!-- 留言內容 -->
      <p class="comment-content">Gooood job!</p>
    </div>
  </section>
</template>

<style scoped>
.postingcomments {
  outline: 1px solid #e6ecf0;
  width: 600px;
}

.comment {
  padding: 15px 0 15px 75px;
  height: 107px;
  position: relative;
  border-bottom: 1px solid #e6ecf0;
}

.comment:last-child {
  border-bottom: none;
}

.user-avater {
  width: 50px;
  height: 50px;
  /* 以 comment 為定位 */
  position: absolute;
  left: 15px;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
}

.detail-info {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
  padding-left: 5px;
}

.reply-to {
  padding-top: 4px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.tweet-account {
  padding-left: 5px;
  color: #ff6600;
}

.comment-content {
  padding-top: 5px;
  font-size: 15px;
  line-height: 22px;
}
</style>