<template>
	<div id="individualShare" class="w1200">
		<topNav></topNav>
		<stockTable></stockTable>
		<turnoverList></turnoverList>
	</div>
</template>
<script>

import topNav from "./topNav";
import stockTable from "./stockTable";
import turnoverList from "./turnoverList";

export default {
  data() {
    return {};
  },
  components: {topNav,stockTable,turnoverList},
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>