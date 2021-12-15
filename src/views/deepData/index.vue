<template>
    <div class="content">
        <h1>第一层</h1>
        <div>designName:{{ msg.designName }}</div>
        <h1>第二层</h1>
        <widgetData :widget-data="msg.widgetData" />
        <el-button type="primary" style="margin-top: 20px;" @click="doClick">
            点击改变数据
        </el-button>
    </div>
</template>

<script>
    import widgetData from './components/widgetData.vue'
    export default {
        components: { widgetData },
        data() {
            return {
                msg: {
                    designName: '我的设计',
                    designId: '',
                    themeId: 'THEME6F49D01582374807914FDF406607BDA0',
                    staticData: [],
                    widgetData: [
                        {
                            id: 'widget_1639551751550',
                            order: 1,
                            name: '工作表1',
                            dataInfo: {
                                dataId: 'T113769',
                                dataType: '5',
                                dataName: '直投运维监控日志表',
                            },
                            configInfo: {
                                el: 'container_1639551751550',
                                chartType: 'dts_default',
                                chartChild: 'normal',
                                mapType: '',
                                plugins: 'echarts',
                                dataParams: {},
                                ajaxURL: '',
                                designObj: {},
                                dataPanel: {
                                    dimData: [
                                        {
                                            fieldName: 'log_id',
                                            columnLength: 40,
                                            caliberId: '',
                                            kpiTag: '0',
                                            diyRelation: '',
                                            attrType: '3',
                                            iconClass: 'icon-attr-str',
                                            dimId: '',
                                            attrId: 'A16366202319484',
                                            attrClass: '0',
                                            dataId: 'T113769',
                                            isEditOrDel: '1',
                                            columnScale: 0,
                                            filterType: '9',
                                            fieldType: '0',
                                            attrName: '日志id',
                                            id: 'A163662023194841639551756643',
                                            fanyi: true,
                                            expression: '',
                                            divisor: '1',
                                            barMix: '',
                                            attrFormat: '7',
                                            labelValue: false,
                                            legendSelected: true,
                                            modifyName: '日志id',
                                            order: 'asc',
                                            prevOrder: 0,
                                            rankType: 'value',
                                            reverseOrder: 0,
                                            topRank: '',
                                            funcName: '',
                                            lineDisplayType: '1',
                                            isModifyName: false,
                                            isChecked: true,
                                            complexLevel: 'A16366202319484',
                                            treeLevel: 0,
                                        },
                                    ],
                                    attrData: [],
                                },
                            },
                            isInit: false,
                        },
                    ],
                    reportData: [],
                },
            }
        },
        methods: {
            doClick() {
                this.msg = {
                    designName: '我的设计===================',
                    widgetData: [
                        {
                            id: 'widget_1639551751550',
                            order: 1,
                            name: '工作表1===================',
                            dataInfo: {
                                dataId: 'T113769',
                                dataType: '5',
                                dataName:
                                    '直投运维监控日志表===================',
                            },
                            configInfo: {
                                el:
                                    'container_1639551751550===================',
                                chartType: 'dts_default',
                                chartChild: 'normal',
                                mapType: '',
                                plugins: 'echarts',
                                dataParams: {},
                                ajaxURL: '',
                                designObj: {},
                                dataPanel: {
                                    dimData: [
                                        {
                                            fieldName:
                                                'log_id===================',
                                            columnLength: 40,
                                            caliberId: '',
                                            kpiTag: '0',
                                            diyRelation: '',
                                            attrType: '3',
                                            iconClass: 'icon-attr-str',
                                            dimId: '',
                                            attrId: 'A16366202319484',
                                            attrClass: '0',
                                            dataId: 'T113769',
                                            isEditOrDel: '1',
                                            columnScale: 0,
                                            filterType: '9',
                                            fieldType: '0',
                                            attrName: '日志id',
                                            id: 'A163662023194841639551756643',
                                            fanyi: true,
                                            expression: '',
                                            divisor: '1',
                                            barMix: '',
                                            attrFormat: '7',
                                            labelValue: false,
                                            legendSelected: true,
                                            modifyName: '日志id',
                                            order: 'asc',
                                            prevOrder: 0,
                                            rankType: 'value',
                                            reverseOrder: 0,
                                            topRank: '',
                                            funcName: '',
                                            lineDisplayType: '1',
                                            isModifyName: false,
                                            isChecked: true,
                                            complexLevel: 'A16366202319484',
                                            treeLevel: 0,
                                        },
                                    ],
                                    attrData: [],
                                },
                            },
                            isInit: false,
                        },
                    ],
                    reportData: [],
                }
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
