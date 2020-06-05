<template>
  <el-container>
    <el-header class="top">
      <div class="logo">{{ title }}</div>
      <el-button class="about">关于</el-button>
    </el-header>
    <el-main class="main-body">
      <el-row :gutter="10" class="main-section">
        {{msg}}
        <tinymce-editor ref="editor" v-model="msg" :disabled="disabled" @onClick="onClick"></tinymce-editor>
        <button @click="clear">清空内容</button>
        <button @click="disabled = true">禁用</button>
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
      msg: 'Welcome to Use Tinymce Editor',
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