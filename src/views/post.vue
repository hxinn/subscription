<template>
    <div>
        <h2 class="rich_media_title">{{ title }}</h2>
        <div class="rich_media_subtitle">阿里技术&nbsp;昨天</div>
        <!-- <div
            class="contianer"
            style="
                width: 100%;
                height: 100%;
                padding: 10px 16px 12px;
                padding: calc(10px + constant(safe-area-inset-top))
                    calc(16px + constant(safe-area-inset-right)) 12px
                    calc(16px + constant(safe-area-inset-left));
                padding: calc(10px + env(safe-area-inset-top))
                    calc(16px + env(safe-area-inset-right)) 12px
                    calc(16px + env(safe-area-inset-left));
            "
        >
            <div id="output"></div>
        </div> -->
        <el-row style="text-align: center;">
            <el-button @click="openView('qlinks://to/news')"
                >打开新闻列表</el-button
            >
            <el-button
                @click="openView('qlinks://to/news?id=42223348285118')"
                type="primary"
                >打开新闻列表详情</el-button
            ><br /><br />
            <el-button @click="openView('qlinks://to/sign')" type="success"
                >签到</el-button
            >
            <el-button @click="openView('qlinks://to/luckyWheel')" type="info"
                >大转盘</el-button
            ><br /><br />
            <el-button @click="openView('qlinks://to/login')" type="warning"
                >登陆</el-button
            >
            <el-button @click="openView('qlinks://to/bookmarks')" type="danger"
                >书签</el-button
            ><br /><br />
        </el-row>
        <el-row style="text-align: center;">
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button
                type="warning"
                icon="el-icon-star-off"
                circle
            ></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
    </div>
</template>

<script>
import "./../assets/css/app.css"
export default {
    data() {
        return {
            title: "当猫做成手办后，网友：猫界又出新品种了？！",
        }
    },
    mounted() {
        document.title = this.title
        console.log()
        location.href = "qlinks://to/sign"
    },
    methods: {
        openView(url) {
            console.log("url", url)
            location.href = url
        },
    },
}
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
