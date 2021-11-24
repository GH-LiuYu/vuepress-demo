// 侧边栏配置
module.exports = {
    '/documents/': [
        {
            title: 'git',   // 必要的
            path: '/documents/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                {
                    title: 'a',   // 必要的
                    path: '/documents/doc-git/a',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                },
                {
                    title: '命令',   // 必要的
                    path: '/documents/doc-git/命令',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                },
                {
                    title: 'b',   // 必要的
                    path: '/documents/doc-git/b',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                },
            ]
        },
    ],
}
