<template>
  <div id="app">
    <navs @toBack="toBack" @toHome="toHome" class='nav'></navs>
    <transition enterActiveClass="animated fadeInLeft" leaveActiveClass="animated fadeOutRight" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
  //import '../dist/static/css/animate.css'
  var navs = {
    template: `
    <div>
      <button @click="$emit('toBack')">后退</button>
      <button @click="$emit('toHome')">首页</button>
        <ul>
            <li>
                <router-link to="/">首页</router-link>
                <router-link to="/top">路由</router-link>
                <router-link to="/top/sub">子路由</router-link>
                <router-link :to="{name:'urlTo',params:{id:'66',userId:'666'}}" title=":to传值刷新就没了">:to传值</router-link>
                <router-link to="/url/8/888">URl传值</router-link>
                <router-link to="/routers">多路由</router-link>
                <router-link to="/ly">alias别名</router-link>
                <router-link to="/toBack/8/888">redirect重定向</router-link>
            </li>
        </ul>
        </div>
    `
  };
  export default {
    name: 'app',
    components: {
      'navs': navs

    },
    methods: {
      toBack(){
        this.$router.go(-1)  //后退
        //this.$router.go(1) //前进
      },
      toHome(){
        //跳转
        this.$router.push('/');
        //替换不进入历史记录
        //this.$router.replace('/')
      }

    }
  }
</script>

<style>
  html, body { padding: 0; margin: 0; overflow-x: hidden;overflow-y: auto; }

  ul { list-style: none }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 168px;
  }
  .nav{position: fixed;top: 20px;left: 50%;-webkit-transform:  translate3d(-50%,0,0);}
  .router-link-exact-active { color: #ff0000; font-size: 16px; }

  .left { float: left; width: 50%; background-color: #c36; color: #fff; }

  .right { float: right; width: 50%; background-color: #f00; color: #fff; }

  /*animation*/
  .animated {
    animation-duration: .5s;
    animation-fill-mode: both;
  }

  .animated.infinite {
    animation-iteration-count: infinite;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .fadeOut {
    animation-name: fadeOut;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  .fadeInLeft {
    animation-name: fadeInLeft;
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  .fadeInRight {
    animation-name: fadeInRight;
  }

  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }

  .fadeOutRight {
    animation-name: fadeOutRight;
  }
</style>
