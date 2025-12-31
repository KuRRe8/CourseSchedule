export interface CourseData {
  title: string
  teacher: string
  student: string
  week: number
  start: number
  duration: number
  weeks: number[]
}

// 9个学生，每个学生对应一门课程
// 3个教师，每个教师教3门课程
export default [
  // Student 1 - 舞蹈课1 (Teacher A)
  { title: '舞蹈课1', teacher: '教师A', student: '学生1', week: 1, start: 3, duration: 2, weeks: [1, 2, 3, 6, 7, 8, 9, 10] },
  { title: '舞蹈课1', teacher: '教师A', student: '学生1', week: 3, start: 3, duration: 2, weeks: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11] },
  { title: '舞蹈课1', teacher: '教师A', student: '学生1', week: 5, start: 5, duration: 2, weeks: [1, 2, 3, 4, 6, 7, 9, 10] },

  // Student 2 - 舞蹈课2 (Teacher B)
  { title: '舞蹈课2', teacher: '教师B', student: '学生2', week: 3, start: 9, duration: 2, weeks: [1, 2, 3, 4, 6, 7] },
  { title: '舞蹈课2', teacher: '教师B', student: '学生2', week: 1, start: 9, duration: 2, weeks: [1, 2, 3, 6, 7, 8] },
  { title: '舞蹈课2', teacher: '教师B', student: '学生2', week: 2, start: 3, duration: 2, weeks: [16] },

  // Student 3 - 舞蹈课3 (Teacher C)
  { title: '舞蹈课3', teacher: '教师C', student: '学生3', week: 2, start: 3, duration: 2, weeks: [1, 2, 3, 4, 6, 7, 8, 9] },
  { title: '舞蹈课3', teacher: '教师C', student: '学生3', week: 5, start: 1, duration: 2, weeks: [1, 2, 3, 4, 6, 7, 9] },
  { title: '舞蹈课3', teacher: '教师C', student: '学生3', week: 5, start: 1, duration: 2, weeks: [8] },

  // Student 4 - 舞蹈课4 (Teacher A)
  { title: '舞蹈课4', teacher: '教师A', student: '学生4', week: 2, start: 5, duration: 2, weeks: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13] },
  { title: '舞蹈课4', teacher: '教师A', student: '学生4', week: 4, start: 7, duration: 2, weeks: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13] },

  // Student 5 - 舞蹈课5 (Teacher B)
  { title: '舞蹈课5', teacher: '教师B', student: '学生5', week: 2, start: 9, duration: 2, weeks: [1, 2, 3, 4, 6, 7, 8, 9] },
  { title: '舞蹈课5', teacher: '教师B', student: '学生5', week: 4, start: 9, duration: 2, weeks: [1, 2, 3, 4, 6, 7, 8, 9] },

  // Student 6 - 舞蹈课6 (Teacher C)
  { title: '舞蹈课6', teacher: '教师C', student: '学生6', week: 1, start: 5, duration: 2, weeks: [1, 2, 3, 6, 7, 8, 9, 10, 11, 12] },
  { title: '舞蹈课6', teacher: '教师C', student: '学生6', week: 4, start: 1, duration: 2, weeks: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11] },

  // Student 7 - 舞蹈课7 (Teacher A)
  { title: '舞蹈课7', teacher: '教师A', student: '学生7', week: 2, start: 1, duration: 2, weeks: [3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] },
  { title: '舞蹈课7', teacher: '教师A', student: '学生7', week: 4, start: 1, duration: 2, weeks: [3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] },
  { title: '舞蹈课7实验', teacher: '教师A', student: '学生7', week: 3, start: 5, duration: 4, weeks: [7, 8, 9, 11, 13, 15, 17, 18] },

  // Student 8 - 舞蹈课8 (Teacher B)
  { title: '舞蹈课8', teacher: '教师B', student: '学生8', week: 1, start: 3, duration: 2, weeks: [9, 10, 11, 12, 13, 14, 15, 16, 17, 19] },
  { title: '舞蹈课8', teacher: '教师B', student: '学生8', week: 3, start: 3, duration: 2, weeks: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { title: '舞蹈课8实验', teacher: '教师B', student: '学生8', week: 5, start: 5, duration: 4, weeks: [16, 17, 18, 19] },

  // Student 9 - 舞蹈课9 (Teacher C)
  { title: '舞蹈课9', teacher: '教师C', student: '学生9', week: 5, start: 1, duration: 2, weeks: [11, 12, 13, 14, 15, 16, 17, 18] },
  { title: '舞蹈课9', teacher: '教师C', student: '学生9', week: 2, start: 3, duration: 2, weeks: [16] },
]
