import { pinia } from '~/modules/pinia'

interface MenuButtonBoundingClientRect {
  width: number
  height: number
  top: number
  left: number
  right: number
  bottom: number
}

export type UserRole = 'student' | 'teacher' | 'principal'

export const useAppStore = defineStore(
  'app',
  () => {
    const darkMode = ref(false)
    const statusBarHeight = ref(0)
    const menuButtonBounding = ref<MenuButtonBoundingClientRect>()
    const customBarHeight = computed(
      () => !menuButtonBounding.value
        ? 0
        : menuButtonBounding.value.bottom + menuButtonBounding.value.top - statusBarHeight.value)

    // User authentication info
    const userRole = ref<UserRole | null>(null)
    const userIdentity = ref<string>('') // student name or teacher name

    const setUserInfo = (role: UserRole, identity: string) => {
      userRole.value = role
      userIdentity.value = identity
    }

    const clearUserInfo = () => {
      userRole.value = null
      userIdentity.value = ''
    }

    return {
      darkMode,
      statusBarHeight,
      customBarHeight,
      menuButtonBounding,
      userRole,
      userIdentity,
      setUserInfo,
      clearUserInfo,
    }
  })

// Need to be used outside the setup
export function useAppStoreWidthOut() {
  return useAppStore(pinia)
}

