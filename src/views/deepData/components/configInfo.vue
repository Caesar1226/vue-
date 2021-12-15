<template>
    <div class="content">
        <h1>第四层</h1>
        <div>widgetData.configInfo.el:{{ configInfo.el }}</div>
        <dataPanel :data-panel="configInfo.dataPanel" />
    </div>
</template>

<script>
    import dataPanel from './dataPanel.vue'
    export default {
        components: { dataPanel },
        props: {
            configInfo: {
                type: Object,
                default: function() {
                    return {}
                },
            },
        },
        methods: {
            doClick(msg) {
                alert(msg)
            },
        },
    }
</script>
<style scoped>
    .home {
        padding-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
</style>
