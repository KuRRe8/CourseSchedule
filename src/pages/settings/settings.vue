<script setup lang="ts">
const appStore = useAppStore()
const { setPageConfig } = usePageStore()

onShow(() => {
  setPageConfig({ pageTitle: '设置', showBackAction: true })
})

// 退出登录
function handleLogout() {
  uni.showModal({
    title: '确认',
    content: '确定要退出登录吗？',
    success: (res) => {
      if (res.confirm) {
        appStore.clearUserInfo()
        uni.redirectTo({
          url: '/pages/login/login',
        })
      }
    },
  })
}
</script>

<template>
  <UBasePage>
    <div class="p-4 flex flex-col gap-4">
      <!-- 当前用户信息 -->
      <div class="bg-white dark:bg-#121212 rounded-lg p-4 mb-4">
        <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">当前用户</div>
        <div class="text-lg font-semibold">
          {{ appStore.userIdentity || '校长' }}
        </div>
        <div class="text-sm text-gray-400 mt-2">
          {{
            appStore.userRole === 'student' ? '学生' :
              appStore.userRole === 'teacher' ? '教师' : '校长'
          }}
        </div>
      </div>

      <!-- 退出登录按钮 -->
      <div
        class="bg-red-500 text-white rounded-lg py-3 px-4 font-semibold text-center"
        hover-class="bg-red-600"
        :hover-stay-time="150"
        @click="handleLogout"
      >
        退出登录
      </div>
    </div>
  </UBasePage>
</template>

<style scoped>
</style>
