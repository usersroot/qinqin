<template>
    <div id="box">
       <el-tabs :tab-position="tabPosition" class="tabs">
            <el-tab-pane 
                v-for='category in categorys' 
                :key='category.cid'
                :label="category.name"
            >
                <div v-for="(item,index) in category.floors"
                    :key=" index"
                    class="list"
                >
                    <h2 > {{item.name}}</h2>
                    <ul class="content_list">
                        <li v-for="li in item.list" :key="li.api_cid">
                            <router-link 
                            class="list_img"
                            :to="{
                                name:'list',
                                params:{
                                    id:1
                                },
                                query:{
                                    cid:li.api_cid
                                }
                            }"
                            >
                                <img :src="li.img" alt="" class="img">
                                <span>{{li.name}}</span>
                            </router-link> 
                        </li>
                    </ul>
                </div>
            
            </el-tab-pane>
            
        </el-tabs>
    </div>
</template>


<script>
export default {
   data () {
    return {
      categorys: null,
      tabPosition: 'left' 
    }
  },
  async mounted () {
    //进行数据请求，然后赋值我们当前组件的数据
    const result =await this.$http({
      url: '/index.php',
      params: {
        r: 'class/category',
        type: 1
      }
    })
    console.log(result)
    this.categorys = result.data.data.data 
  }
}

</script>

<style lang="stylus">
    #box
        height 100%
        .tabs
            overflow auto
            .el-tabs__nav
                overflow auto 
                .list
                    height 640px 
                    display flex
                    justify-content columns 
                    
    .el-tabs__content
        height 640px
        overflow auto 
    .content_list
        list-style none 
        display flex
        justify-content row
        flex-wrap wrap
        padding 10px
        .list_img
            display flex
            justify-content columns
            flex-direction column 
            align-items center
            padding 10px

    .img 
        width 68px               
        
</style>