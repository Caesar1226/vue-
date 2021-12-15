<template>
    <div class="content">
        <div v-for="(item, index) in dimData" :key="index">
            widgetData.configInfo.dataPanel.dimData: {{ item.fieldName }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            dimData: {
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
