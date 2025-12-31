<script setup lang="ts">
import type { CourseModel } from '~/stores/course'
import CourseActionSheet from '~/components/timetable/CourseActionSheet.vue'
import TimetableContent from '~/components/timetable/TimetableContent.vue'
import courses from '~/static/courses'

const appStore = useAppStore()
const { customBarHeight, statusBarHeight } = appStore
const { setPageConfig } = usePageStore()
const courseStore = useCourseStore()
const { currentWeekIndex, isStart } = storeToRefs(courseStore)
const { setCourseList, setStartDay } = courseStore

onShow(() => {
  setPageConfig({ showNavBar: false })
})

// Filter courses based on user role
const filteredCourses = computed(() => {
  let filteredList = courses as CourseModel[]
  
  if (appStore.userRole === 'student') {
    // Student only sees their own courses
    filteredList = filteredList.filter(course => course.student === appStore.userIdentity)
  } else if (appStore.userRole === 'teacher') {
    // Teacher only sees their courses
    filteredList = filteredList.filter(course => course.teacher === appStore.userIdentity)
  }
  // Principal sees all courses (no filtering)
  
  return filteredList
})

setCourseList(filteredCourses.value)

const showCourseAction = ref(false)

// set the start date
const someDate = new Date()
someDate.setDate(someDate.getDate() + -1 * 7)
setStartDay(someDate)

function handleCreateCourse() {
  uni.navigateTo({
    url: '/pages/detail/detail',
  })
}

// handle course item click
const showActionSheet = ref(false)
const clickedCourseItem = ref<CourseModel>()
function handleShowActionSheet(courseItem: CourseModel) {
  showActionSheet.value = true
  clickedCourseItem.value = courseItem
}

function handleCloseActionSheet() {
  showActionSheet.value = false
}

// 打开设置页面
function handleOpenSettings() {
  uni.navigateTo({
    url: '/pages/settings/settings',
  })
}
</script>

<template>
  <UBasePage>
    <div
      class="bg-primary text-white w-full top-0 z-200 fixed font-bold"
      :style="{ height: `${customBarHeight}px` }"
    >
      <div :style="{ 'padding-top': `${statusBarHeight}px`, 'height': `${customBarHeight - statusBarHeight}px` }">
        <div class="h-full text-center px-6 relative">
          <div class="h-full text-xl left-4 i-carbon-add absolute" @click="handleCreateCourse" />
          <div
            class="flex h-full mx-auto justify-center items-center inline-block text-lg"
            @click="showCourseAction = !showCourseAction"
          >
            {{ `第${currentWeekIndex + 1}周${!isStart ? '(未开学)' : ''}` }}
            <div
              class="transition-transform duration-300 i-carbon-chevron-up"
              :class="showCourseAction ? 'rotate-180' : 'rotate-0'"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- timetable main content -->
    <TimetableContent :show-course-action="showCourseAction" @course-item-click="handleShowActionSheet" />
    <!-- course card -->
    <CourseActionSheet
      :show-action-sheet="showActionSheet" :course-item="clickedCourseItem"
      @cancel="handleCloseActionSheet"
    />
    <!-- 浮动设置按钮 -->
    <div
      class="fixed bottom-6 right-6 z-100 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
      @click="handleOpenSettings"
    >
      <div class="text-2xl i-carbon-settings" />
    </div>
  </UBasePage>
</template>

<style scoped>
</style>
