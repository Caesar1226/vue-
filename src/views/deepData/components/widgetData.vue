<template>
    <div class="content">
        <div v-for="(item, index) in widgetData" :key="index">
            widgetData.name:{{ item.name }}
            <h1>第三层</h1>
            <dataInfo :data-info="item.dataInfo" />
            <configInfo :config-info="item.configInfo" />
        </div>
    </div>
</template>

<script>
    import dataInfo from './dataInfo.vue'
    import configInfo from './configInfo.vue'
    export default {
        components: { dataInfo, configInfo },
        props: {
            widgetData: {
                type: Array,
                default: function() {
                    return []
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
