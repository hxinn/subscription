<template>
  <el-container>
    <el-header class="top">
      <div class="logo">{{ title }}</div>
      支持第三方插件复制,如 <a href="https://xiumi.us">秀米</a>等
    </el-header>
    <el-main class="main-body">
      <el-row :gutter="10" class="main-section">
        <el-col :span="12">
          <tinymce-editor ref="editor" v-model="msg" :disabled="disabled" @onClick="onClick"></tinymce-editor>
        </el-col>
        <el-col :span="12" class="preview-wrapper">
          <section>
            <div ref="output" v-show="perview"></div>
            <div class="preview" contenteditable="true">
              <div class="output" v-html="formateHtml(msg)"></div>
            </div>
          </section>
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
      msg: "",
      disabled: false,
      perview: false
    };
  },
  methods: {
    // 鼠标单击的事件
    onClick(e, editor) {
      //   console.log("Element clicked");
      //   console.log(e);
      console.log(editor);
    },
    // // 清空内容
    clear() {
      this.$refs.editor.clear();
    },
    formateHtml(content) {
      let ele = this.$refs.output;
      if (ele != null && ele != undefined) {
        ele.innerHTML = content;
        let str = ele.innerHTML.replace(/<\/?.+?>/g, "");
        str = ele.innerHTML.replace(/[\r\n]/g, "");
        return str;
      }
      return content;
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: "PingFang SC", BlinkMacSystemFont, Roboto, "Helvetica Neue",
    sans-serif;
}
.el-message__icon {
  display: none;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top {
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}
.top .logo {
  margin-right: 20px;
}
#editor {
  height: 100%;
  display: block;
  border: none;
  width: 100%;
  padding: 10px;
}
section {
  height: 100%;
}
.main-body {
  display: flex;
  flex-direction: column;
  padding-top: 0;
  padding-bottom: 10px;
}
.ctrl {
  flex-basis: 60px;
  display: flex;
  flex: 1;
  align-items: center;
}
.preview-wrapper {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  padding: 0;
  align-items: center;
  justify-content: center;
  display: flex;
}
.main-section {
  display: flex;
  height: 100%;
}
.hint {
  opacity: 0.6;
  margin: 20px 0;
}
.preview {
  margin: 20px auto;
  width: 375px;
  padding: 20px;
  font-size: 16px;
  outline: none;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
}
.preview ul,
.preview ol {
  padding-left: 40px !important;
}
.CodeMirror {
  height: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  padding: 20px;
  width: 100%;
  font-family: "PingFang SC", BlinkMacSystemFont, Roboto, "Helvetica Neue",
    sans-serif;
}
/* ele ui */
.el-form-item {
  margin-bottom: 0px !important;
}
/*wechat code block*/
.rich_media_content .code-snippet *,
.rich_media_content .code-snippet__fix * {
  max-width: 1000% !important;
}
.code-snippet__fix {
  word-wrap: break-word !important;
  ont-size: 14px;
  margin: 10px 0;
  display: block;
  color: #333;
  position: relative;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  display: flex;
  line-height: 26px;
}
.code-snippet__fix .code-snippet__line-index {
  counter-reset: line;
  flex-shrink: 0;
  height: 100%;
  padding: 1em;
  list-style-type: none;
}
.code-snippet__fix .code-snippet__line-index li {
  list-style-type: none;
  text-align: right;
}
.code-snippet__fix .code-snippet__line-index li::before {
  min-width: 1.5em;
  text-align: right;
  left: -2.5em;
  counter-increment: line;
  content: counter(line);
  display: inline;
  color: rgba(0, 0, 0, 0.15);
}
.code-snippet__fix pre {
  overflow-x: auto;
  padding: 1em;
  padding-left: 1em;
  padding-left: 0;
  white-space: normal;
  flex: 1;
  -webkit-overflow-scrolling: touch;
}
.code-snippet__fix code {
  text-align: left;
  font-size: 14px;
  display: block;
  white-space: pre;
  display: flex;
  position: relative;
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
}
.output {
  width: 100%;
}
</style>