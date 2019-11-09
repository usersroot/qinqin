<template> <!-- vue实例外创建 -->
<div class="page-group">
         <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav" style="background-color:rgb(250,88,178)">
                <h5>亲亲购物网</h5>
            </header>
            <!-- 工具栏 -->
            <nav class="bar bar-tab">
                <router-link 
                v-for = "nav in navs" 
                :key = "nav.id"
                :to = "nav.name"  active-class = "active" class="tab-item external " 
                >
                    <span class="icon icon-home"></span>
                    <span class="tab-label">{{ nav.text }} </span>
                </router-link> 
            </nav>
            <!-- 这里是页面内容区 -->
           <div class="content">
              <router-view>
                
              </router-view>
           </div>
                
          
        </div>
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
export default {
  data () {
    return {
      navs: [
        {
          id: 1,
          path: '/home',
          text: '首页',
          name: 'home'
        },
        {
          id: 2,
          path: '/homecourt',
          text: '9.9包邮',
          name: 'homecourt'
        },
        {
          id: 3,
          path: '/kind',
          text: '分类',
          name: 'kind'
        },
        {
          id: 4,
          path: '/shop',
          text: '购物车',
          name: 'shop'
        },
        {
          id: 5,
          path: '/mine',
          text: '我的',
          name: 'mine'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">

    
    h5
      text-align center
      color #fff
      margin 0
      line-height 48px
  .page
    width 100%
    height 100%
  .content
    background #fff
</style>