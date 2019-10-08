<template>
	<div class="w1200 turnoverList">
		<div class="turnoverLeft fl">
			<div class="tr">
				<div class="w317 fl item">买入金额前5营业部</div>
				<div class="w93 fl item">买入额/万</div>
				<div class="w93 fl item">卖出额/万</div>
				<div class="w93 fl item">净额/万</div>
			</div>
		</div>
		<div class="turnoverRight fr">
			<div class="tr">
				<div class="w317 fl item">买入金额前5营业部</div>
				<div class="w93 fl item">买入额/万</div>
				<div class="w93 fl item">卖出额/万</div>
				<div class="w93 fl item">净额/万</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
    	turnoverLeft:[],
    	turnoverRight:[]
    };
  },
  components: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>