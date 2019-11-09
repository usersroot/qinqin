<template> <!-- vue实例外创建 -->
    <div>
        <ul class="content_box">
            <li v-for="list in lists"
            :key="list.id"
            class="content_list"
            >
               <router-link 
               class="content_list"
               :to="{
                   name:'product',
                   query:{
                       jiage:list.jiage,
                       title:list.d_title,
                       pic:list.pic,
                       tianmaojia:list.quan_tiaojian,
                   },
                   params:{
                       id:list.id
                   }
               }"
               > 
                    <div class="img ui-act-label left">
                        <img :src="list.pic" style="background: rgb(245, 245, 245); display: block;">
                    </div>    
                    <div class="cent left">       
                        <h5 class="tianmao">{{list.d_title}}</h5>        
                        <div class="num col-aaa " style="opacity: 1;">            
                            <span>天猫价¥ {{list.quan_tiaojian}}</span>
                            <span class="fr">已售<b class="col-red">{{list.xiaoliang}}</b>件</span>        
                        </div>        
                        <div class=" money col-money">
                            <p class="quan fr"><i>{{list.quan_jine}}元券</i></p>券后价 
                            <span class=""><i>¥</i>{{list.jiage}}</span>        
                            </div>    
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
    export default {
        data() {
            return {
                lists:null,
                count:1
            }
        },
        async mounted(){
            const result=await this.$http({
                url:'/index.php',
                params:{
                    r:"class/cyajaxsub",
                    page: 1,
                    cid: this.$route.query.cid,
                    px: "t",
                    cac_id: "",
                }
            })
            console.log(result)
            this.lists=result.data.data.content
        },
        methods:{
            getmore(){

            }
        }

    }
</script>

<style lang="stylus">
    .content_box
        width 100%
        height 100%
        padding 5px
        .content_list
            widht 100%
            height 147px
            overflow hidden
            border 1px solid #e0e0e0
            margin-top 5px
            img 
                width 126px
    .left
        float left
    .right
        float right

    .cent
        height 100%
        width 264px
        box-sizing border-box
        padding 10px
    h5,p
        margin 0
</style>