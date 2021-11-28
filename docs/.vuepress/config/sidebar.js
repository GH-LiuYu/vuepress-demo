const getDocPath = require('./getDocPath')
module.exports = {
    '/document/study/': [
        getDocPath('vue',true,'/document/study/vue/'),
        getDocPath('js',true,'/document/study/js/'),
    ],
    '/document/css/': [
        getDocPath('css',true,'/document/css/'),
    ],
}
