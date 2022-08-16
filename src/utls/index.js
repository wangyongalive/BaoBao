import Vue from 'vue'
import {
  Carousel,
  CarouselItem,
  Button,
  ButtonGroup,
  Badge,
  Dialog,
  Card,
  MessageBox,
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default () => {
  Vue.use(Badge)
  Vue.use(Button)
  Vue.use(ButtonGroup)
  Vue.use(Carousel)
  Vue.use(CarouselItem)
  Vue.use(Dialog)
  Vue.use(Card)
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}
