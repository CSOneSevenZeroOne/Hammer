var Vue = require("vue");
require("./index.css")
var $ = require("jquery");
window.$ = $;
require("weui");
import Vuex from 'vuex'//var Vuex = require('vuex')
Vue.use(Vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
	// routes: [{
	// 	path: '/home',
	// 	component: home,
	// 	children: [{
	// 		path: 'page1',
	// 		component: page1
	// 	},
	// 		{
	// 			path: 'page2',
	// 			component: page2
	// 		},
	// 		{
	// 			path: 'page3',
	// 			component: page3
	// 		}
	// 	]
	// },
	// 	{
	// 		path: '/cart',
	// 		component: cart
	// 	}
	// ]
	// （缩写）相当于 routes: routes
})

const store = new Vuex.Store({
	//消息
	state: {
		count: 0,
		bool: false,
		src: "img",
		isShowDialog: false
	},
	//获取值得方法
	getters: {
		getSrc(state) {
			//处理数据
			return state.src
		}
	}
})

import xheader from "./index/index-header.vue";
import xlunbotu from "./index/lunbotu.vue";
import xfooter from "./index/footer.vue";
import xnav from "./index/nav.vue";
import xcontent from "./index/content.vue";
import xcart1 from "./cart/content.vue";
import xempty from "./cart/empty.vue";



var header = new Vue({
	el: "#index",
	template:`
     <div>
	<!--<xheader />-->
	<!--<xlunbotu />-->
	<!--<xnav />-->
	<!--<xcontent />-->
	<xfooter />
	<!--<xcart1 />-->
	<xempty />
	</div>
	`,
	store,
	router,
	components: {
		xheader,
		xlunbotu,
		xnav,
		xcontent,
		xfooter,
		xcart1,
		xempty
	}
})
require("./fzh.js")
require("./fzh2.js")
require("./fzh3.js")

