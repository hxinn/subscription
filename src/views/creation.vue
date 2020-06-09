<template>
  <el-container>
    <el-header class="top" height="200" direction="vertical">
      <div class="part-container">

        <div class="left-part">
          <div class="image"></div>
        </div>

        <div class="right-part">

          <el-input
            type="text"
            placeholder="请输入文章的标题"
            v-model="title"
            maxlength="20"
            show-word-limit
          ></el-input>

          <el-input
            style="margin-top:1em"
            type="textarea"
            placeholder="文章描述分享时的摘要"
            v-model="desction"
            maxlength="30"
            show-word-limit
          ></el-input>

        </div>
      </div>
      <div style="position: absolute;right: 20px;">
        支持第三方插件复制,如
        <a href="https://xiumi.us" target="_blank">秀米</a>等
      </div>
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
              <h2 class="rich_media_title">{{title}}</h2>
              <div class="rich_media_subtitle">QLinks&nbsp;昨天</div>
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
      title: "返璞归真",
      desction:"面对事之成败,自己努力去做到波澜不惊,成则总结,摆则反思",
      msg: "正文内容",
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
  height: 200px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}
.part-container {
  position: absolute;
  width: 40%;
}
.part-container .left-part {
  position: relative;
  float: left;
  width: 125px;
  height: 125px;
  text-align: center;
  background: #999;
}
.part-container .left-par .image {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.part-container .right-part {
  position: absolute;
  left: 125px;
  right: 0;
  top: 10px;
  padding-left: 0.5em;
  text-align: center;
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
.rich_media_title {
  font-size: 22px;
  line-height: 1.4;
  margin-bottom: 14px;
  font-weight: 400;
}
.rich_media_subtitle {
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 14px;
}
</style>