<template>
  <div class="tinymce-editor">
    <editor v-model="myValue" :init="init" :disabled="disabled" @onClick="onClick"></editor>
  </div>
</template>
<script>
import { uploadfile ,urlUploadfile} from "@/api";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
import "tinymce/icons/default/icons";
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import "tinymce/plugins/image"; // 插入上传图片插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/wordcount"; // 字数统计插件
import "tinymce/plugins/advlist"; // 有序列表
import "tinymce/plugins/autolink"; // 自动导入链接
import "tinymce/plugins/autosave"; // 自动保存
import "tinymce/plugins/link"; // 插入链接
import "tinymce/plugins/emoticons"; // 表情
import "tinymce/plugins/table"; // 表格
import "tinymce/plugins/hr"; // 分割线
import "tinymce/plugins/paste"; // 粘贴
import "tinymce/plugins/importcss"; // 粘贴
let that;
export default {
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
    // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
    baseUrl: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default:
        "advlist autolink link image lists emoticons table hr paste importcss "
    }
  },

  data() {
    return {
      init: {
        language_url: `${this.baseUrl}/tinymce/langs/zh_CN.js`,
        language: "zh_CN",
        skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide`,
        content_css: `${this.baseUrl}/tinymce/skins/content/default/content.css`,
        // skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide-dark`, // 暗色系
        // content_css: `${this.baseUrl}/tinymce/skins/content/dark/content.css`, // 暗色系
        height: 800,
        plugins: this.plugins,
        importcss_append: true,
        // CONFIG: ContentStyle 这块很重要， 在最后呈现的页面也要写入这个基本样式保证前后一致， `table`和`img`的问题基本就靠这个来填坑了
        content_style: `
            *                         { padding:0; margin:0; }
            html, body                { height:100%; }
            img                       { max-width:100%; display:block;height:auto; }
            a                         { text-decoration: none; }
            iframe                    { width: 100%; }
            p                         { line-height:1.6; margin: 0px; }
            table                     { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
            .mce-object-iframe        { width:100%; box-sizing:inherit; margin:0; padding:0; }
            ul,ol                     { list-style-position:inside; }
            section                   { box-sizing:inherit;}
          `,
        fontsize_formats: "10px 11px 12px 14px 16px 18px 20px 24px",
        // CONFIG: Paste
        paste_webkit_styles: "all",
        paste_remove_styles_if_webkit: false,
        paste_retain_style_properties: "all",
        paste_word_valid_elements: "*[*]", // word需要它
        paste_data_images: true, // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
        paste_convert_word_fake_lists: false, // 插入word文档需要该属性
        paste_merge_formats: true,
        nonbreaking_force_tab: false,
        paste_auto_cleanup_on_paste: false,
        emoticons_database_url: `${this.baseUrl}/tinymce/emojis.js`,
        toolbar: [
          " bold  italic underline strikethrough link forecolor backcolor hr | styleselect |  fontsizeselect | table alignleft aligncenter alignright alignjustify bullist numlist outdent indent | undo redo | image emoticons blockquote removeformat "
        ],
        branding: false,
        menubar: true,
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          console.log("upload:", blobInfo);
          //   const img = "data:image/jpeg;base64," + blobInfo.base64();
          const formData = new FormData();
          formData.append("files", blobInfo.blob(), blobInfo.filename());
          uploadfile(formData).then(result => {
            let resultData = result.data;
            console.log("data", resultData);
            if (resultData.code === 200) {
              success(resultData.data[0]);
            } else {
              failure("上传失败: " + resultData.message);
            }
          });
        },
        // 图片粘贴
        paste_preprocess: function(plugin, args) {
          let imageArray = []
          args.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function(
            match,
            capture
          ) {
            imageArray.push(capture);
          });
          
          // let imageArray = Array.from(imageSet)
          console.log("arrays",imageArray)
          that.uploadRemoteFile(imageArray, 0);
        }
      },
      // 上传远程图片
      uploadRemoteFile(imageArray, n) {
        console.log("index",n,"length",imageArray.length)
        if (n < imageArray.length) {
          let imgUrl = imageArray[n];
          console.log("index",n);
          let data = { url: imgUrl };
          let index = n;
          urlUploadfile(data).then(result => {
            let resultData = result.data;
            if (resultData.code === 200) {
              let lineUrl = resultData.data;
              console.log("index:", index, "remote", imgUrl, "data", lineUrl);
              let html = tinymce.activeEditor.getContent();
              html = html.replace(imageArray[index], lineUrl);
              tinymce.activeEditor.setContent(html);
            } else {
              console.log("上传图片失败：", resultData.message);
            }
            this.uploadRemoteFile(imageArray, ++n);
          });
        }else{
          let html = tinymce.activeEditor.getContent();
          this.value = html
        }
    
      },
      myValue: this.value
    };
  },
  mounted() {
    that = this;
    tinymce.init({});
  },
  methods: {
    // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    // 需要什么事件可以自己增加
    onClick(e) {
      this.$emit("onClick", e, tinymce);
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = "";
    }
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>
