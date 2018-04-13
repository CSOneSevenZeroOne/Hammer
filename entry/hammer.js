var Vue = require("vue");
require("./index/index.css")
var $ = require("jquery");
window.$ = $;
require("weui");
import Vuex from 'vuex'//var Vuex = require('vuex')
Vue.use(Vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
require("./index/entry/base.css");
import pro2 from "./index/entry/components/pro2.vue";
import pro1 from "./index/entry/components/pro1.vue";
import Smartisan from "./index/entry/components/Smartisan-OS.vue";
import allhed from "./index/entry/components/all-header.vue";
import down from "./index/entry/components/download.vue";
import page1 from "./index/entry/components/pro2/page1.vue";
import page2 from "./index/entry/components/pro2/page2.vue";
import page3 from "./index/entry/components/pro2/page3.vue";
import page4 from "./index/entry/components/pro2/page4.vue";
import page5 from "./index/entry/components/pro2/page5.vue";

import pro1p1 from "./index/entry/components/pro1/page11.vue";
import pro1p2 from "./index/entry/components/pro1/page22.vue";
import pro1p3 from "./index/entry/components/pro1/page3.vue";
import pro1p4 from "./index/entry/components/pro1/page4.vue";
import pro1p5 from "./index/entry/components/pro1/page5.vue";

//容器的样式
require("./font/iconfont.css")
//重置样式
require("./reset.css")
require("./font/iconfont.css")
import classify from "./component/classify.vue"
import product from "./component/product.vue"
import detail from "./component/detail.vue"
import register from "./component/register.vue"
import login from "./component/login.vue"
import person from "./component/person.vue"
import zhxq from "./component/zhxq.vue"

//Smartisan的路由
import Smapage1 from "./index/entry/components/Smartisan/page1.vue";
import Smapage2 from "./index/entry/components/Smartisan/page2.vue";
import Smapage3 from "./index/entry/components/Smartisan/page3.vue";
import fh from "./index/entry/components/Smartisan/fh.vue";
import kaifazhe from "./index/entry/components/Smartisan/kaifazhe.vue";
import qiangda from "./index/entry/components/Smartisan/qiangda.vue";
import use from "./index/entry/components/Smartisan/use.vue";
import kan from "./index/entry/components/Smartisan/kan.vue";
import ren from "./index/entry/components/Smartisan/ren.vue";
import yun from "./index/entry/components/Smartisan/yun.vue";
import lunheader from "./index/entry/components/all-header.vue";

import luntan from "./index/entry/components/luntan.vue";
require("./index/entry/font/iconfont.css")

const store = new Vuex.Store({
	//消息
	state: {
		footbool:true,
		bool : false,
		type : "",
		name : "",
		boolcart: false,
		title:"111",
		num:0
		
	},
	//获取值得方法
	getters: {
		getSrc(state) {
			return state.src
		}
	}
})
import xclass from "./index/index/classify.vue"
import xheader from "./index/index/index-header.vue";
import xfooter from "./index/index/footer.vue";
// import xcart1 from "./cart/content.vue";
// import xempty from "./cart/empty.vue";
import xcart from "./index/cart/cart.vue";

const router = new VueRouter({
	routes: [{
		path: '/',
		component: xheader,
	},{
		path: '/hot',
		component: xclass
	},
		{
			path: '/cart',
			component: xcart
		},
		{
			path: '/pro2',
			component: pro2,
			children: [
				{
					path: 'page1',
					component: page1
				},
				{
					path: 'page2',
					component: page2
				},
				{
					path: 'page3',
					component: page3
				},
				{
					path: 'page4',
					component: page4
				},
				{
					path: 'page5',
					component: page5
				},
			
			]
		},
		{
			path: '/Smartisan',
			component: Smartisan,
			children: [
				{
					path: 'Smapage1',
					component: Smapage1
				},
				{
					path: 'Smapage2',
					component: Smapage2
				},
				{
					path: 'Smapage3',
					component: Smapage3
				},
				{
					path: 'fh',
					component: fh
				},
				{
					path: 'kaifazhe',
					component: kaifazhe
				},
				{
					path: 'qiangda',
					component: qiangda
				},
				{
					path: 'use',
					component: use
				},
				{
					path: 'kan',
					component: kan
				},
				{
					path: 'ren',
					component: ren
				},
				{
					path: 'yun',
					component: yun
				},
			]
		},
		{
			path: '/down',
			component: down,
		},
		{
			path: '/pro1',
			component: pro1,
			children: [
				{
					path: 'pro1p1',
					component: pro1p1
				},
				{
					path: 'pro1p2',
					component: pro1p2
				},
				{
					path: 'pro1p3',
					component: pro1p3
				},
				{
					path: 'pro1p4',
					component: pro1p4
				},
				{
					path: 'pro1p5',
					component: pro1p5
				},
			]
		},
		{
			path: '/luntan',
			component: luntan,
		},
		{
			path: '/lanheader',
			component: lunheader,
		},{
			path : '/classify',
			component : classify
		},
		{
			path : '/product',
			component : product
		},
		{
			path : '/detail',
			component : detail
		},
		{
			path : '/register',
			component : register
		},
		{
			path : '/login',
			component : login
		},
		{
			path : '/person',
			component : person
		},
		{
			path : '/zhxq',
			component : zhxq
		}
	]
	// （缩写）相当于 routes: routes
})

var header = new Vue({
	el: "#index",
	template:`
     <div>
     <router-view></router-view>
	<xfooter />
	</div>
	`,
	store,
	router,
	components: {
		xheader,
		xfooter,
		xcart
	}
})
