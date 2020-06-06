<template>
  <el-container>
    <el-header class="top">
      <div class="logo">{{ title }}</div>
      <el-button class="about">关于</el-button>
    </el-header>
    <el-main class="main-body">
      <el-row :gutter="10" class="main-section">
        <el-col :span="12">
          <tinymce-editor ref="editor" v-model="msg" :disabled="disabled" @onClick="onClick"></tinymce-editor>
        </el-col>
        <el-col :span="12">
          <div class="panel-container">
            <div class="meta-panel" v-html="msg"></div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import TinymceEditor from "../components/tinymce-editor";
export default {
  components: {
    TinymceEditor
  },
  data() {
    return {
      title: "",
      msg: '<h1 style="text-align: center;"><strong>开始你的创作</strong></h1>',
      disabled: false
    };
  },
  methods: {
    // 鼠标单击的事件
    onClick(e, editor) {
      console.log("Element clicked");
      console.log(e);
      console.log(editor);
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear();
    }
  }
};
</script>

<style>
.panel-container {
  width: 415px;
  position: relative;
  margin: 2em auto 0;
}
.meta-panel {
  position: relative;
  width: 100%;
  margin: auto auto 4em auto;
  padding: 1em 1em 0.5em 1em;
  background-color: #fff;
  -webkit-box-shadow: 0 0 6px rgba(63, 70, 82, 0.5);
  -moz-box-shadow: 0 0 6px rgba(63, 70, 82, 0.5);
  box-shadow: 0 0 6px rgba(63, 70, 82, 0.5);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>