<template>
    <div>
        <div :style="{display:boolcart?'block':'none'}">
            <xcart></xcart>
        </div>
        <div :style="{display:!boolcart?'block':'none'}">
            <xempty></xempty>
        </div>
        <xfooter></xfooter>
    </div>
</template>

<script>
	import xcart from "./content.vue"
	import xempty from "./empty.vue"
	import xfooter from "../index/footer.vue"
	export default {
		data(){
			return {
		     arr:{}
            }
        },
		components:{
			xcart,
			xempty,
			xfooter
		},
		computed: {
			boolcart() {
				var herf=this
				var tel=window.sessionStorage.getItem("login")
				var cart=window.sessionStorage.getItem("cart")
				if (!tel && typeof(tel)!="undefined" && tel!=0){
					if (!cart && typeof(cart)!="undefined" && cart!=0){
						return this.$store.state.boolcart
					}else {
						console.log(cart);
						return this.$store.state.boolcart=true
				     }
				}else {
					return 	this.$store.state.boolcart=true
                }
			}
		},
		mounted() {
			require("../../font1")()
		}
	}
</script>

<style scoped>
</style>