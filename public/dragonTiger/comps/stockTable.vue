<template>
    <div class="w1200 stockTable">
    	<!-- max-height="640" -->
        <el-table :data="tableData3" max-height="640" border style="width: 100%">
            <el-table-column prop="id" label="序号" width="61" :resizable=false></el-table-column>
            <el-table-column prop="daima" label="代码" width="92" :resizable=false></el-table-column>
            <el-table-column prop="mingcheng" label="名称" width="92" :resizable=false></el-table-column>
            <el-table-column prop="zuixin" label="最新价" width="92" :resizable=false></el-table-column>
            <el-table-column prop="zhangfu" label="涨跌幅" width="92" :resizable=false></el-table-column>
            <el-table-column prop="shoupan" label="收盘价" width="92" :resizable=false></el-table-column>
            <el-table-column prop="chengjiao" label="成交金额" width="92" :resizable=false></el-table-column>
            <el-table-column prop="chengjiaoliang" label="成交量" width="92" :resizable=false></el-table-column>
            <el-table-column prop="jingmairu" label="净买入额" width="92" :resizable=false></el-table-column>
            <el-table-column prop="shangbang" label="上榜原因" width="401" :resizable=false></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
        	tableData3:[{
        		id:1,
        		daima:"000001",
        		mingcheng:"000001",
        		zuixin:"000001",
        		zhangfu:"000001",
        		shoupan:"000001",
        		chengjiao:"000001",
        		chengjiaoliang:"000001",
        		jingmairu:"000001",
        		shangbang:"000001",
        	},{
        		id:2,
        		daima:"000001",
        		mingcheng:"000001",
        		zuixin:"000001",
        		zhangfu:"000001",
        		shoupan:"000001",
        		chengjiao:"000001",
        		chengjiaoliang:"000001",
        		jingmairu:"000001",
        		shangbang:"000001",
        	}]
        };
    },
    components: {},
    computed: {},
    watch: {},
    mounted() {},
    methods: {
    }
};
</script>