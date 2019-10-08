<template>
	<div class="w1200">
		<salesRanking></salesRanking>
		<salesHand></salesHand>
	</div>
</template>
<script>

import salesHand from "./salesHand";
import salesRanking from "./salesRanking";

export default {
  data() {
    return {
    	turnoverLeft:[],
    	turnoverRight:[]
    };
  },
  components: {salesRanking,salesHand},
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>