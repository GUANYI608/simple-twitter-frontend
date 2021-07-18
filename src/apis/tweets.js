import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  // 取得所有使用者的所有貼文
  getTweets() {
    return apiHelper.get(`/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 新增一則推文
  postTweet({ newTweet }) {
    return apiHelper.post(`/tweets`, { description: newTweet }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 回覆推文
  replyTweet({ tweetId, comment }) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, { comment }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // like 一則貼文
  addLike({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // unlike 一則貼文
  deleteLike({ tweetId }) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 取得單一貼文
  getTweet({ tweetId }) {
    return apiHelper.get(`/tweets/${tweetId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  // 取得單一貼文回覆
  getTweetReplies({ tweetId }) {
    return apiHelper.get(`/tweets/${tweetId}/replies`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}