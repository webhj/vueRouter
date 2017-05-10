import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Top from '@/components/Top'
import Sub from '@/components/Sub'
import Routers from '@/components/Routers'
import Left from '@/components/Left'
import Right from '@/components/Right'

Vue.use(Router);

export default new Router({
  mode:'history', //不带#号
  scrollBehavior: () => ({ y: 0 }), //指定到到垂直滚动条位置
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      //多路由配置写法
      path: '/routers',
      name: 'routers',
      //别名使用,不要用在path为'/'中
      alias: '/ly',
      components: {
        default: Index, //default默认加载
        left: Left,
        right: Right
      }
    },
    {
      path: '/top',
      name: 'Top',
      component: Top,
      //子路由
      children: [
        {path: 'sub', name: 'Sub', component: Sub}
      ]
    },
    {
      //路由
      path: '/urlTo', name: 'urlTo', component: Routers
    },
    {
      //路由传参
      path: '/url/:id(\\d+)/:userId', name: 'Routers', component: Routers,

      //路由配置文件钩子函数
      beforeEnter: (to, from, next) => {
        console.log('/url传参params模板','to',to.path,'from',from.path);
        next();
      }
    },
    {
      //redirect基本重定向
      //path:'/toBack',redirect:'/'  //常用返回到首页
      path: '/toBack/:id(\\d+)/:userId', redirect: '/url/:id(\\d+)/:userId'
    },
    {
      //path:’*’ 没有配置的路由统一跳回首页或者指向一个404页面
      path: '*', redirect: '/'
    }

  ]
})
