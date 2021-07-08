<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <!-- 使用 SettingForm 元件 -->
    <SettingForm />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import SettingForm from "../components/SettingForm";

export default {
  components: {
    SideBar,
    SettingForm,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  min-height: 1063px;
}
</style>