module.exports = {
    title: 'Courses Assignments and Notes',
    //base: '/DouglasCourses/', // 这是部署到github相关的配置 下面会讲

    themeConfig: {
        nav: [{
            text: 'Another Page',
            link: '/hello.html'
        }],
        sidebar: [{
                title: 'Intro to Programming',
                path: '/IntroProgramming/',
                collapsable: true,
                sidebarDepth: 1,
                children: [{
                        title: 'Class Notes',
                        collapsable: true,
                        sidebarDepth: 2,
                        children: [
                            'IntroProgramming/ClassNotes/class1'
                        ]
                    },
                    {
                        title: 'Homework',
                        sidebarDepth: 1,
                        children: [
                            'IntroProgramming/HW/hw1'
                        ]
                    },
                    'IntroProgramming/class2',
                ]
            },
            {
                title: 'Web Development',
                path: '/WebDevelopment/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'WebDevelopment/lab1'
                ]
            },
            {
                title: 'System Analysis',
                path: '/SystemAnalysis/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'SystemAnalysis/assignment1'
                ]
            },
        ]

    },

}