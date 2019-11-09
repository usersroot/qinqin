<template > <!-- vue实例外创建 -->
    <div>
        <img :src="result.pic" alt="">
        <h3>{{result.title}}</h3>
        <span>天猫价：{{result.jiage}}</span>
    </div>
</template>


<script>
export default {
    data(){
        return{
            result:null
        }
    },
    computed: {
        // 直接当做普通属性调用不加括号
        // 任何data中数据变化立即重新计算
        // 计算属性会缓存
        getuser_data(){
             this.result=this.$route.query
            console.log('query',this.$route.query)
        }
    },
        
    

}
</script>

<style lang="stylus" scope>
    img 
        width 350px
</style>