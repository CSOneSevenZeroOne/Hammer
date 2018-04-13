<template>
    <div id="classify">
        <xfooter />
        <xheader />
        <xmobilephone />
        <xairclear />
        <xshell />
        <xcharge />
        <xheadset />
        <xclothing />
        <xstationery />
        <xbrand />
        <xbooks />
        <xprojector />



    </div>


</template>


<script>
	import xfooter from "../index/index/footer.vue";
    import xheader from "./classify/header.vue";
    import xmobilephone from "./classify/mobilephone.vue";
    import xairclear from "./classify/airclear.vue";
    import xshell from "./classify/shell.vue";
    import xcharge from "./classify/charge.vue";
    import xheadset from "./classify/headset.vue";
    import xclothing from "./classify/clothing.vue";
    import xbrand from "./classify/brand.vue";
    import xbooks from "./classify/books.vue";
    import xstationery from "./classify/stationery.vue";
    import xprojector from "./classify/projector.vue";



    export default {
        //注册组件
        components : {
            xmobilephone,
            xairclear,
            xshell,
            xcharge,
            xheadset,
            xclothing,
            xbrand,
            xbooks,
            xstationery,
            xprojector,
            xfooter,
            xheader
        },
		mounted() {
			require("../font")()
		}
    }
</script>

<style scoped>

</style>