//npm
//import Vue from "vue";
//手动下载
import Vue from "vue";


require("weui");
//容器的样式
require("../font/iconfont.css")
//重置样式
require("./reset.css")


//状态管理
import Vuex from 'vuex'

Vue.use(Vuex)
//路由管理
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import classify from "./component/classify.vue"
import product from "./component/product.vue"

const router = new VueRouter({
    routes : [{
        path : '/',
        component : classify
        },
        {
            path : '/product',
            component : product
        }

    ]
    // （缩写）相当于 routes: routes
})


/**/
//基站
const store = new Vuex.Store({
    //消息
    state : {
        bool : false,
        type : ""
    },
    //获取值得方法
    getters : {
        getSrc(state){
            //处理数据
            return state.type
        }
    }
})



import xclassify from "./component/classify.vue"
import xproduct from "./component/product.vue"

new Vue({
    el : "#demo",
       template:`
       <div style="width:100%;height:100%">
       <router-view></router-view>
       </div>
       `,
    //容器数据
    data: {

    },
    store,
    router,
    //容器的逻辑
    methods: {},
    //注册组件
    components : {
        xclassify,
        xproduct
    }
})