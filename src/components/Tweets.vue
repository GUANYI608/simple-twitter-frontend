<template>
  <section class="tweets">
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 推文內容 -->
      <p class="tweet-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
        ullam alias explicabo placeat quis officiis adipisci nulla minus beatae
        sapiente cupiditate, voluptate ipsa quo id possimus et.
      </p>

      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <!-- 以下之後用 v-for 跑 -->
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 推文內容 -->
      <p class="tweet-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
        ullam alias explicabo placeat quis officiis adipisci nulla minus beatae
        sapiente cupiditate, voluptate ipsa quo id possimus et.
      </p>

      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 推文內容 -->
      <p class="tweet-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
        ullam alias explicabo placeat quis officiis adipisci nulla minus beatae
        sapiente cupiditate, voluptate ipsa quo id possimus et.
      </p>

      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 推文內容 -->
      <p class="tweet-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
        ullam alias explicabo placeat quis officiis adipisci nulla minus beatae
        sapiente cupiditate, voluptate ipsa quo id possimus et.
      </p>

      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 推文內容 -->
      <p class="tweet-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
        ullam alias explicabo placeat quis officiis adipisci nulla minus beatae
        sapiente cupiditate, voluptate ipsa quo id possimus et.
      </p>

      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 推文內容 -->
      <p class="tweet-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
        ullam alias explicabo placeat quis officiis adipisci nulla minus beatae
        sapiente cupiditate, voluptate ipsa quo id possimus et.
      </p>

      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> Apple </span>
        <span class="detail-info"> @apple・3 小時 </span>
      </div>

      <!-- 推文內容 -->
      <p class="tweet-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
        ullam alias explicabo placeat quis officiis adipisci nulla minus beatae
        sapiente cupiditate, voluptate ipsa quo id possimus et.
      </p>

      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count">13</span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count">76</span>
      </div>
    </div>
    <!-- 結束 -->
  </section>
</template>

<style scoped>
.tweets {
  width: 600px;
}

.tweet {
  padding: 10px 15px 0 75px;
  height: 146px;
  outline: 1px solid #e6ecf0;
  position: relative;
}

.user-avater {
  width: 50px;
  height: 50px;
  /* 以 tweet 為定位 */
  position: absolute;
  left: 15px;
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
