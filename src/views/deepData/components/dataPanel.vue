<template>
    <div class="content">
        <h1>第五层</h1>
        <dimData :dim-data="dataPanel.dimData" />
    </div>
</template>

<script>
    import dimData from './dimData.vue'
    export default {
        components: { dimData },
        props: {
            dataPanel: {
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
