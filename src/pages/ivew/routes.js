import index from './index/index.vue';
import studentInfo from './studentInfo/studentInfo'

export default {
  '/': {
    component: index
  },
  '/studentInfo':{
    component: studentInfo
  }
}
