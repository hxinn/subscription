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
           <div v-html="msg">

           </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import TinymceEditor from '../components/tinymce-editor'
export default {
  components: {
    TinymceEditor
  },
  data () {
    return {
      title:'',
      msg: '<h1 style="text-align: center;"><strong>开始你的创作</strong></h1>',
      disabled: false
    }
  },
  methods: {
    // 鼠标单击的事件
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    // 清空内容
    clear () {
      this.$refs.editor.clear()
    }
  }
}
</script>