<template>
    <div class="content">
        <div>widgetData.dataInfo.dataName:{{ dataInfo.dataName }}</div>
    </div>
</template>

<script>
   
    export default {
        props: {
            dataInfo: {
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
