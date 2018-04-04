<template>
    <div id="classify">

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
        <xfooter />


    </div>


</template>


<script>
    import xheader from "./header.vue";
    import xmobilephone from "./mobilephone.vue";
    import xairclear from "./airclear.vue";
    import xshell from "./shell.vue";
    import xcharge from "./charge.vue";
    import xheadset from "./headset.vue";
    import xclothing from "./clothing.vue";
    import xbrand from "./brand.vue";
    import xbooks from "./books.vue";
    import xstationery from "./stationery.vue";
    import xprojector from "./projector.vue";
    import xfooter from "./footer.vue";


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
        }
    }
</script>

<style scoped>

</style>