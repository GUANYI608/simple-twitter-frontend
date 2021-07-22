<template>
  <div v-if="isEditModalToggle" class="replymodal">
    <!-- 彈出視窗：背景 -->
    <div class="background-wrapper"></div>
    <!-- 彈出視窗：編輯個人資料 -->
    <form class="edit-modal" @submit.prevent.stop="handleProfileSubmit">
      <!-- 表頭 -->
      <div class="header">
        <img
          class="cancel-icon"
          src="../assets/cancel.jpg"
          alt="cancel"
          @click.stop.prevent="closeReplyModal"
        />
        <h3 class="title">編輯個人資料</h3>
        <button class="save-btn" type="submit" :disabled="isProcessing">
          {{ isProcessing ? "處理中" : "儲存" }}
        </button>
      </div>
      <!-- 封面區塊 -->
      <div class="cover-area">
        <!-- 封面照片 -->
        <img class="cover" :src="user.cover" alt="cover" />
        <div class="icon-area">
          <!-- 上傳 -->
          <label for="cover">
            <img class="upload-icon" src="../assets/upload.jpg" alt="upload" />
          </label>
          <input
            type="file"
            id="cover"
            name="cover"
            class="input-img"
            accept="image/*"
            @change="handleCoverChange"
          />
          <!-- 移除 -->
          <img class="remove-icon" src="../assets/remove.jpg" alt="remove" />
        </div>
      </div>
      <!-- 大頭照區塊 -->
      <div class="avatar-area">
        <!-- 大頭照片 -->
        <img :src="user.avatar" class="avatar" />
        <!-- 上傳 -->
        <label for="avatar">
          <img class="upload-avatar" src="../assets/upload.jpg" alt="upload" />
        </label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          class="input-img"
          accept="image/*"
          @change="handleAvatarChange"
        />
      </div>

      <!-- 編輯區塊 -->
      <div class="name-form">
        <label class="form-label" for="name">名稱</label>
        <!-- 設定必填與自動focus -->
        <input
          id="name"
          v-model="user.name"
          name="name"
          type="text"
          class="name-input"
          required
        />
      </div>
      <p v-show="isEditModalToggle" class="word-count">
        {{ user.name.length }}/50
      </p>
      <div class="intro-form">
        <label class="form-label" for="introduction">自我介紹</label>
        <!-- 設定必填 -->
        <textarea
          id="introduction"
          v-model="user.introduction"
          class="intro-input"
          name="introduction"
          rows="4"
          cols="52"
        >
        </textarea>
      </div>
      <p v-show="isEditModalToggle" class="word-count">
        {{ user.introduction.length }}/160
      </p>
    </form>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { mapState } from "vuex";
import userAPI from "../apis/user";
import { Toast } from "../utils/helpers";

export default {
  name: "EditProfileModal",
  mixins: [fromNowFilter],
  // 取得 /components/tweets 的資料
  props: {
    initialIsEditModalToggle: {
      type: Boolean,
      required: true,
      default: false,
    },
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditModalToggle: false,
      user: {
        ...this.intialUser,
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.isEditModalToggle = this.initialIsEditModalToggle;
  },
  watch: {
    initialIsEditModalToggle(newVale) {
      this.isEditModalToggle = newVale;
    },
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };
    },
  },
  methods: {
    closeReplyModal() {
      this.isEditModalToggle = false;

      this.$emit("after-close-modal", this.editModalToggle);
    },
    handleCoverChange(e) {
      const { files } = e.target;

      if (files.length !== 0) {
        // 產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.cover = imageURL;
      }
    },
    handleAvatarChange(e) {
      const { files } = e.target;

      if (files.length !== 0) {
        // 產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.avatar = imageURL;
      }
    },
    async handleProfileSubmit(e) {
      if (!this.user.name.trim()) {
        Toast.fire({
          icon: "warning",
          title: "請填寫名稱",
        });
        return;
      } else if (this.user.name.trim().length > 15) {
        Toast.fire({
          icon: "warning",
          title: "名字長度最多 15 個字",
        });
        return;
      } else if (this.user.introduction.trim().length > 140) {
        Toast.fire({
          icon: "warning",
          title: "自我介紹內容最多 140 個字",
        });
        return;
      }

      try {
        this.isProcessing = true;

        const form = e.target; // <form></form>
        const formData = new FormData(form);

        const { data } = await userAPI.editUser({
          userId: this.$route.params.id,
          formData,
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "個人資料已更新完成",
        });

        this.$emit("after-profile-submit");
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法更新用戶資訊，請稍後再試",
        });
      }
      this.isEditModalToggle = false;
      this.isProcessing = false;
    },
  },
};
</script>


<style scoped>
/* 推文下層的灰色背景 */
.background-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  margin: unset;
  padding: unset;
  background: #363434;
  opacity: 0.5;
  z-index: 1;
}

/* ------- 彈出視窗 ------- */
.edit-modal {
  position: fixed;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 600px;
  height: 654px;
  background: #ffffff;
  border-radius: 14px;
}

/* --- 視窗表頭 --- */
.header {
  height: 55px;
  padding: 0 15px;
  display: flex;
  align-items: center;
}

.cancel-icon {
  height: 24px;
  width: 24px;
}

.cancel-icon:hover {
  cursor: pointer;
}

.title {
  margin-left: 40px;
  font-weight: bold;
  font-size: 19px;
  line-height: 28px;
}

.save-btn {
  margin-left: 328px;
  width: 64px;
  height: 30px;
  border-radius: 100px;
  background: #ff6600;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0px;
  display: flex-end;
}

/* --- 封面區塊 --- */
.cover-area {
  width: 600px;
  height: 200px;
  position: relative;
}

.cover {
  padding: 0 1px;
  width: 600px;
  height: 200px;
  object-fit: cover;
  opacity: 0.8;
}

.icon-area {
  width: 90px;
  display: flex;
  justify-content: space-between;
  /* 以 image area 作為定位 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.upload-icon,
.remove-icon {
  cursor: pointer;

  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.input-img {
  /* 隱藏 input 樣式 */
  display: none;
}

/* --- 大頭照 --- */
.avatar-area {
  position: relative;
  height: 80px;
}

.avatar {
  width: 122px;
  height: 122px;
  border: 4px solid #ffffff;
  border-radius: 50%;

  /* 以 avatar-area 作為定位 */
  position: absolute;
  top: -60px;
  left: 15px;
}

.upload-avatar {
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  /* 以 avatar-area 作為定位 */
  position: absolute;
  top: -15px;
  left: 60px;
}

/* --- 編輯區塊 --- */
.name-form,
.intro-form {
  width: 570px;
  margin: 0 15px;
  background: #f5f8fa;
  border-radius: 4px;
  border-bottom: 2px solid #657786;
  position: relative;
}

.name-form {
  height: 54px;
}

.intro-form {
  height: 150px;
}

.form-label {
  position: absolute;
  top: 5px;
  left: 15px;

  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: #657786;
}

.name-input,
.intro-input {
  position: absolute;
  top: 24px;
  left: 15px;

  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
}

.name-input:focus {
  outline: none;
}

.name-input {
  margin-top: 4px;
  height: 24px;
}

.intro-input {
  margin-top: 4px;
  background: #f5f8fa;
  /* 去除邊框與右下角與輸入時的提示框線 */
  border: none;
  resize: none;
  outline: none;
}

.word-count {
  margin: 0 15px 21px 15px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: right;
  color: #657786;
}
</style>