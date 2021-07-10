<template>
  <div class="usertweets">
    <!-- 推文 -->
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>
      <router-link to="/replylist">
        <!-- 推文內容 -->
        <p class="tweet-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
          ullam alias explicabo placeat quis officiis adipisci nulla minus
          beatae sapiente cupiditate, voluptate ipsa quo id possimus et.
        </p>
      </router-link>
      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>

    <!-- 以下推文之後用 v-for 跑資料帶入 -->
    <!-- 推文 -->
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>
      <router-link to="/replylist">
        <!-- 推文內容 -->
        <p class="tweet-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
          ullam alias explicabo placeat quis officiis adipisci nulla minus
          beatae sapiente cupiditate, voluptate ipsa quo id possimus et.
        </p>
      </router-link>
      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <!-- 推文 -->
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>
      <router-link to="/replylist">
        <!-- 推文內容 -->
        <p class="tweet-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
          ullam alias explicabo placeat quis officiis adipisci nulla minus
          beatae sapiente cupiditate, voluptate ipsa quo id possimus et.
        </p>
      </router-link>
      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <!-- 推文 -->
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>
      <router-link to="/replylist">
        <!-- 推文內容 -->
        <p class="tweet-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
          ullam alias explicabo placeat quis officiis adipisci nulla minus
          beatae sapiente cupiditate, voluptate ipsa quo id possimus et.
        </p>
      </router-link>
      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <!-- 結束 -->
  </div>
</template>

<style scoped>
.usertweets {
  width: 600px;
  outline: 1px solid #e6ecf0;
}

.tweet {
  padding: 13px 15px 0 75px;
  height: 146px;
  position: relative;
  border-bottom: 1px solid #e6ecf0;
}

.tweet:last-child {
  border-bottom: none;
}

.user-avater {
  width: 50px;
  height: 50px;
  /* 以 tweet 為定位 */
  position: absolute;
  left: 15px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  padding-right: 5px;
}

.detail-info {
  font-weight: 500;
  font-size: 15px;
  color: #657786;
}

.tweet-content {
  padding-top: 6px;
  font-weight: 500;
  font-size: 15px;
}

.icons {
  height: 21px;
  position: absolute;
  bottom: 10px;
}

.icon {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

.count {
  margin-right: 50px;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  color: #657786;
}
</style>