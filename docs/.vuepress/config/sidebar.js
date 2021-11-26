const getDocPath = require('./getDocPath')
module.exports = {
    // getDocPath('git',true,'./../git'),
    // getDocPath('blog',true,'./../blog'),
    './../../documents/git/': [
        getDocPath('vuedoc',true,'./../../documents/git/vuedoc/'),
        getDocPath('test',true,'./../../documents/git/test/'),
    ],
}
