<!--  -->
<template>
  <div>
    <p>total:{{num}}</p>
    <ul>
      <li
        ref="li"
        v-for="item in data"
        :key="item"
        :class="{on:item==1}"
        @click="onPage(item,$event)"
      >{{item}}</li>
      <li v-if="num>6" @click="onPage(item,$event)">...</li>
      <li v-if="num>6" @click="onPage(item,$event)">{{num}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["total", "currentPage", "size"],
  components: {},
  computed: {
    num() {
      return Math.ceil(this.total / this.size);
    },
    data() {
      return this.num > 5 ? 5 : this.num;
    }
  },
  mounted() {},
  methods: {
    onPage(ops, event) {
      const val = event.target.textContent;
      const li = document.querySelectorAll("li");
      for (let i = 0; i < li.length; i++) {
        li[i].className = "";
      }
      if (val == ops) {
        event.target.className = "on";
        this.$emit("page", val);
      }
    }
  }
};
</script>
<style lang='scss' scoped>
li {
  border: 1px solid #ccc;
  float: left;
  padding: 5px;
  margin-right: 10px;
  color: #666;
  cursor: pointer;
  &.on {
    color: red;
    background: #eee;
  }
}
p {
  margin: 20px 0;
}
</style>