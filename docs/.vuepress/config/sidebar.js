const getDocPath = require('./getDocPath')
module.exports = {
    // '/document/study/': [
    //     {
    //         title:'vue',
    //         sidebarDepth: 2,
    //         collapsable:true,
    //         children: ['/document/study/vue/vue1','/document/study/vue/vue2','/document/study/vue/']
    //     },{
    //         title:'js',
    //         sidebarDepth: 2,
    //         collapsable:true,
    //         children: ['/document/study/js/js1','/document/study/js/js2','/document/study/js/']
    //     }
    // ],
    // '/document/css/': [
    //     {
    //         title:'css',
    //         sidebarDepth: 2,
    //         collapsable:true,
    //         children: ['/document/css/css1','/document/css/css2']
    //     }
    // ],


    '/document/study/': [
        getDocPath('vue',true,'/document/study/vue/'),
        getDocPath('js',true,'/document/study/js/'),
    ],
    '/document/css/': [
        getDocPath('css',true,'/document/css/'),
    ],


}
