<template>
  <div>
    <h2 class="rich_media_title">{{title}}</h2>
    <div class="rich_media_subtitle">阿里技术&nbsp;昨天</div>
    <div
      class="contianer"
      style="width: 100%; height: 100%;padding: 10px 16px 12px; padding: calc(10px + constant(safe-area-inset-top)) calc(16px + constant(safe-area-inset-right)) 12px calc(16px + constant(safe-area-inset-left)); padding: calc(10px + env(safe-area-inset-top)) calc(16px + env(safe-area-inset-right)) 12px calc(16px + env(safe-area-inset-left));"
    >
      <div id="output">
      </div>
    </div>
  </div>
</template>

<script>
import "./../assets/css/app.css";
export default {
    data(){
      return{
        title:"当猫做成手办后，网友：猫界又出新品种了？！"
      }
    },
    mounted() {
      document.title = this.title;
      console.log()
      location.href="qlinks://to/sign"
    }
};
</script>
<style>
.rich_media_title {
  font-size: 22px;
  line-height: 1.4;
  margin-bottom: 14px;
  font-weight: 400;
  margin-left: 20px;
  margin-right: 20px;
}
.rich_media_subtitle {
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin-left: 20px;
  margin-right: 20px;
  color: rgba(0, 0, 0, 0.3);
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>