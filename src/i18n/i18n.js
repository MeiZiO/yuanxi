/* eslint-disable */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale';//elementUI的国际化
import cn from './langs/cn/index'
import en from './langs/en/index'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'


Vue.use(VueI18n)

const messages = {
  en: Object.assign(en, enLocale),// 使用ES6展开挂载自定义中英文和element UI中英文
  cn: Object.assign(cn, zhLocale)
}


const i18n = new VueI18n({
  locale: localStorage.lang || 'en',// 语言标识
  messages // 挂载
})


locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换

export default i18n