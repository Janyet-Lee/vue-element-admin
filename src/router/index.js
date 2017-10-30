import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'

export const routes = [
  { path: '/login', component: _import('login/index'), hidden: true },
  // { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'people',
    noDropdown: true,
    children: []
  },
  {
    path: '/device',
    component: Layout,
    redirect: 'noredirect',
    icon: 'icon-equipment2',
    noDropdown: true,
    name: '设备管理',
    children: [
      { path: 'fairQuery', component: _import('measure-manage/water-meter'), name: '设备管理' }
    ]
  },

  {
    path: '/measure',
    component: Layout,
    redirect: 'noredirect',
    icon: 'icon-measure',
    noDropdown: false,
    name: '计量管理',
    children: [
      { path: 'waterMeter', component: _import('measure-manage/water-meter'), name: '水表读数查询' },
      { path: 'monthlyUse', component: _import('measure-manage/water-meter'), name: '月用水量查询' },
      { path: 'fairQuery', component: _import('measure-manage/water-meter'), name: '计费收费查询' }
    ]
  },

  {
    path: '/waring',
    component: Layout,
    redirect: 'noredirect',
    icon: 'icon-warning',
    noDropdown: true,
    name: '告警管理',
    children: [
      { path: 'fairQuery', component: _import('measure-manage/water-meter'), name: '告警管理' }
    ]
  },

  {
    path: '/analysis',
    component: Layout,
    redirect: 'noredirect',
    icon: 'icon-analysis',
    noDropdown: true,
    name: '统计分析',
    children: [
      { path: 'fairQuery', component: _import('measure-manage/water-meter'), name: '统计分析' }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: 'noredirect',
    icon: 'icon-system',
    noDropdown: true,
    name: '系统设置',
    children: [
      { path: 'fairQuery', component: _import('measure-manage/water-meter'), name: '系统设置' }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes
})
