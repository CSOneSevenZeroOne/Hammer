<template>
    <div id="stationery">
        <div class="phone">
            <p id="p1" v-text="type">文具</p>
        </div>

        <a href="#/product" @click="gettype">
            <div class="phone" id="img1">
                <img src="../../hammer-img/18.png" alt="" style="width:100%">
            </div>
        </a>

        <div class="myul">
            <ul id="oul">
                <li class="bord-b bord-r">
                    <p>
                        <span>记事本</span> <i class="iconfont icon--youjiantou"></i>
                    </p>
                </li>
                <li>
                    <p>
                        <span>明信片</span> <i class="iconfont icon--youjiantou"></i>
                    </p>

                </li>
            </ul>
        </div>


        <div id="bord"></div>
    </div>


</template>


<script>
    export default {
        data() {
            return {
                type: "文具",
            }
        },
        methods: {
            gettype() {
                this.$store.state.type = this.type
                //                console.log(this.$store.state.type);
            },
        }
    }
</script>


<style scoped>

    .phone{
        padding:0 0.12rem;
        border-bottom:1px solid #f1f1f1;
    }
    #p1{
        font-size:0.16rem;
        line-height:0.4rem;
        color:#666666;
    }
    #img1{
        padding:0.13rem 0.12rem;
    }
    .myul{
        overflow:hidden;
    }
    #oul > li{
        float:left;
        padding:0.14rem 0.12rem 0.14rem 0.12rem;
        width:1.63rem;
        line-height:0.26rem;
        height:0.32rem;
    }
    #oul > li > p{
        background:url("../../hammer-img/53.jpg") no-repeat left top;
        background-size:contain;
    }
    #oul > li span{
        margin-left:0.5rem;
    }
    #oul > li i{
        float:right;
    }
    .bord-b{
        border-bottom:1px solid #f5f5f5;
    }
    .bord-r{
        border-right:1px solid #f5f5f5;
    }
    #bord{
        height:0.08rem;
        background:linear-gradient(#e2e2e2, #e7e7e7);
    }
</style>