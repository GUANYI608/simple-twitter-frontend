<template>
  <section class="usercomments">
    <div v-for="reply in replies" :key="reply.id">
      <div class="comment">
        <router-link :to="{ name: 'user', params: { id: reply.userId } }">
          <img class="user-avatar" :src="reply.avatar" alt="avatar" />
        </router-link>

        <!-- 使用者名稱、帳號與留言時間 -->
        <div class="user-info">
          <router-link :to="{ name: 'user', params: { id: reply.userId } }">
            <span class="user-name"> {{ reply.name }} </span>
          </router-link>
          <span class="detail-info">
            @{{ reply.account }}・{{ reply.createdAt | fromNow }}
          </span>
        </div>

        <!-- 留言對象 -->
        <p class="reply-to">
          回覆<span class="tweet-account">@ {{ reply.account }} </span>
        </p>

        <!-- 留言內容 -->
        <router-link
          :to="{ name: 'reply-list', params: { id: reply.tweetId } }"
        >
          <p class="comment-content">{{ reply.comment }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

export default {
  name: "UserComments",
  mixins: [fromNowFilter],
  props: {
    replies: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
.usercomments {
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

.user-avatar {
  width: 50px;
  height: 50px;
  /* 以 comment 為定位 */
  position: absolute;
  left: 15px;
  border-radius: 50%;
  object-fit: cover;
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