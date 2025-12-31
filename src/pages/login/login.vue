<script setup lang="ts">
const appStore = useAppStore()
const { setPageConfig } = usePageStore()

const phone = ref('')
const yzm = ref('')
const selectedRole = ref<string | null>(null) // 'student' | 'teacher' | 'principal' | null

onShow(() => {
  setPageConfig({ showNavBar: false })
})

// Handle login
function handleLogin() {
  if (!selectedRole.value) {
    uni.showToast({ title: '请选择身份', icon: 'none' })
    return
  }

  // 根据身份设置用户标识
  const identityNames: Record<string, string> = {
    student: '学生1',
    teacher: '教师A',
    principal: '校长',
  }

  appStore.setUserInfo(selectedRole.value as any, identityNames[selectedRole.value])
  uni.redirectTo({
    url: '/pages/index/index',
  })
}

function handlePhoneInput(event: any) {
  phone.value = event.detail.value
}

function handleYzmInput(event: any) {
  yzm.value = event.detail.value
}

function handleRoleChange(role: string) {
  // 点击同一按钮时取消选择
  if (selectedRole.value === role) {
    selectedRole.value = null
  } else {
    selectedRole.value = role
  }
}
</script>

<template>
  <div class="login-container">
    <!-- 装饰元素 -->
    <div class="decoration decoration-top"></div>
    <div class="decoration decoration-bottom"></div>

    <!-- 登录表单 -->
    <div class="login-form">
      <!-- 标题 -->
      <div class="title">雨洁舞蹈</div>
      <div class="subtitle">课程表管理系统</div>

      <!-- 身份选择 -->
      <div class="form-group">
        <div class="label">请选择身份</div>
        <div class="role-selector">
          <div
            class="role-button"
            :class="{ active: selectedRole === 'student' }"
            @tap="handleRoleChange('student')"
          >
            学生
          </div>
          <div
            class="role-button"
            :class="{ active: selectedRole === 'teacher' }"
            @tap="handleRoleChange('teacher')"
          >
            教师
          </div>
          <div
            class="role-button"
            :class="{ active: selectedRole === 'principal' }"
            @tap="handleRoleChange('principal')"
          >
            校长
          </div>
        </div>
      </div>

      <!-- 手机号输入 -->
      <div class="input-group">
        <view class="input-wrapper">
          <view class="input-icon">📱</view>
          <view class="input-divider"></view>
          <input
            type="text"
            inputmode="numeric"
            maxlength="11"
            placeholder="请输入手机号"
            :value="phone"
            @input="handlePhoneInput"
            class="input-field"
          />
        </view>
      </div>

      <!-- 验证码输入 -->
      <div class="input-group">
        <view class="input-wrapper">
          <view class="input-icon">✓</view>
          <view class="input-divider"></view>
          <input
            type="text"
            maxlength="6"
            placeholder="请输入验证码"
            :value="yzm"
            @input="handleYzmInput"
            class="input-field"
          />
        </view>
      </div>

      <!-- 登录按钮 -->
      <button class="login-btn" @tap="handleLogin">登 录</button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* 装饰元素 */
.decoration {
  position: absolute;
  background: linear-gradient(135deg, #5677fc 0%, #7b9eff 100%);
  border-radius: 50%;
  opacity: 0.1;
}

.decoration-top {
  width: 400rpx;
  height: 400rpx;
  top: -200rpx;
  right: -100rpx;
}

.decoration-bottom {
  width: 300rpx;
  height: 300rpx;
  bottom: -100rpx;
  left: -50rpx;
}

/* 登录表单 */
.login-form {
  width: 100%;
  max-width: 650rpx;
  padding: 60rpx 50rpx;
  position: relative;
  z-index: 1;
}

/* 标题 */
.title {
  font-size: 46rpx;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20rpx;
  text-align: left;
}

.subtitle {
  font-size: 32rpx;
  color: #aaaaaa;
  margin-bottom: 120rpx;
  text-align: left;
}

/* 表单分组 */
.form-group {
  margin-bottom: 80rpx;
}

.label {
  font-size: 28rpx;
  color: #666666;
  margin-bottom: 20rpx;
  display: block;
}

/* 身份选择器 */
.role-selector {
  display: flex;
  gap: 20rpx;
  flex-wrap: wrap;
}

.role-button {
  flex: 1;
  min-width: 140rpx;
  padding: 20rpx 30rpx;
  text-align: center;
  font-size: 28rpx;
  color: #333333;
  background: #f0f0f0;
  border-radius: 15rpx;
  border: 2rpx solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
}

.role-button.active {
  background: #5677fc;
  color: #ffffff;
  border-color: #5677fc;
  font-weight: bold;
}

/* 输入框组 */
.input-group {
  margin-bottom: 50rpx;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #f8f7fc;
  border: 1px solid #e9e9e9;
  border-radius: 50rpx;
  height: 90rpx;
  padding: 0 40rpx;
}

.input-icon {
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
  flex-shrink: 0;
}

.input-divider {
  width: 2rpx;
  height: 40rpx;
  background-color: #dedede;
  margin-right: 20rpx;
}

.input-field {
  flex: 1;
  height: 90rpx;
  line-height: 90rpx;
  font-size: 28rpx;
  color: #000000;
  background: transparent;
}

.input-field::placeholder {
  color: #cccccc;
}

/* 登录按钮 */
.login-btn {
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  font-size: 28rpx;
  font-weight: bold;
  color: #ffffff;
  background: #5677fc;
  border: none;
  border-radius: 50rpx;
  box-shadow: 0 5px 7px rgba(86, 119, 252, 0.2);
  transition: all 0.3s ease;
}

.login-btn:active {
  background: #3d52d1;
  box-shadow: 0 3px 5px rgba(86, 119, 252, 0.15);
}
</style>
