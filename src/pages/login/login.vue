<script setup lang="ts">
const appStore = useAppStore()
const { setPageConfig } = usePageStore()

onShow(() => {
  setPageConfig({ showNavBar: false })
})

// Handle login button clicks
function handleStudentLogin() {
  appStore.setUserInfo('student', '学生1')
  uni.redirectTo({
    url: '/pages/index/index',
  })
}

function handleTeacherLogin() {
  appStore.setUserInfo('teacher', '教师A')
  uni.redirectTo({
    url: '/pages/index/index',
  })
}

function handlePrincipalLogin() {
  appStore.setUserInfo('principal', '')
  uni.redirectTo({
    url: '/pages/index/index',
  })
}
</script>

<template>
  <div class="bg-base min-h-screen w-full flex flex-col items-center justify-center">
    <!-- Logo/Title -->
    <div class="mb-20 text-center">
      <div class="text-4xl font-bold text-primary mb-2">雨洁舞蹈</div>
      <div class="text-color-base-second text-sm">课程表管理系统</div>
    </div>

    <!-- Login Buttons Container -->
    <div class="flex flex-col gap-6 items-center" style="width: 60%; max-width: 280px">
      <!-- Student Login Button -->
      <button
        class="bg-primary text-white rounded-lg py-3 px-4 font-semibold text-center w-full shadow hover:opacity-90 transition-opacity"
        @tap="handleStudentLogin"
      >
        学生登陆
      </button>

      <!-- Teacher Login Button -->
      <button
        class="bg-primary text-white rounded-lg py-3 px-4 font-semibold text-center w-full shadow hover:opacity-90 transition-opacity"
        @tap="handleTeacherLogin"
      >
        教师登录
      </button>

      <!-- Principal Login Button -->
      <button
        class="bg-primary text-white rounded-lg py-3 px-4 font-semibold text-center w-full shadow hover:opacity-90 transition-opacity"
        @tap="handlePrincipalLogin"
      >
        校长登录
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
