<!--  -->
<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.input" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="sure">确 定</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>
    <button @click="btn">按钮</button>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return { ruleForm: { input: "" }, dialogVisible: false };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    sure() {
      if (!this.ruleForm.input) {
        Toast("确认");
        return;
      }
      Toast("通过");
    },
    handleClose() {
      this.dialogVisible = false;
    },
    async btn() {
      this.dialogVisible = true;
    }
  }
};
</script>
<style lang='scss' scoped>
div {
  font-size: 30px;
  button {
    cursor: pointer;
  }
}
</style>
