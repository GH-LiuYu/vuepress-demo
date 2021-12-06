const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');
module.exports = {
    // theme: 'reco',//已复制主题至vuepress文件夹下，可以注销此选项
    title: '一只高星子',
    description: '求知若饥，虚心若愚',
    head: head,
    themeConfig: themeConfig,
    //显示代码块行号
    "markdown": {
        "lineNumbers": true
    },
    //配置页码为中文显示
    "locales": {
        '/': {
            lang: 'zh-CN'
        }
    },
    plugins: plugins,
}
