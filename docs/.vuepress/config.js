module.exports = {
    title: 'Courses Assignments and Notes',
    //base: '/DouglasCourses/', // 这是部署到github相关的配置 下面会讲

    themeConfig: {
        nav: [{
            text: 'Another Page',
            link: '/hello.html'
        }],
        //add sidebar config below 
        sidebar: [{
                //first folder
                title: 'Intro to Programming',
                path: '/IntroProgramming/',
                collapsable: true,
                //first level sidebarDepth is 1 
                sidebarDepth: 1,
                //add its childeren here 
                children: [
                    //first children, a.k.a. first subfolder 
                    {
                        //subfoler title
                        title: 'Class Notes',
                        collapsable: true,
                        //set its depth to 2 since its a seoncd level folder
                        //it looks like this sidebarDepth is actually not useful 
                        //setting it to any will not affect the site, 
                        // might just here for a visual
                        sidebarDepth: 2,

                        //add children of this folder, 
                        //each path will be an individual .md file
                        children: [
                            'IntroProgramming/ClassNotes/class1',
                            'IntroProgramming/ClassNotes/class2',

                        ]
                    },
                    //second children, a.k.a. second subfoler 
                    {
                        //folder title
                        title: 'Homework',
                        //sidebar depth should be 2 but seems like setting it to 5 is also okay
                        sidebarDepth: 5,
                        children: [
                            'IntroProgramming/HW/hw1'
                        ]
                    },

                ]
            },

            //second folder
            {
                title: 'Web Development',
                path: '/WebDevelopment/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    '/WebDevelopment/lab1/code',
                    // {
                    //     title: 'Lab 1',
                    //     collapsable: true,
                    //     children: [
                    //         '/WebDevelopment/lab1/code',
                    //     ]
                    // },
                    {
                        title: 'Lab 2',
                        collapsable: true,
                        children: [
                            '/WebDevelopment/lab2/live',
                            {
                                title: 'HTML',
                                collapsable: true,
                                children: [
                                    '/WebDevelopment/lab2/HTML/jtc_index_html',
                                    '/WebDevelopment/lab2/HTML/jtc_services_html'
                                ]

                            },
                            {
                                title: 'CSS',
                                collapsable: true,
                                children: [
                                    '/WebDevelopment/lab2/CSS/jtc_base_css',
                                    '/WebDevelopment/lab2/CSS/jtc_layout_css'
                                ]

                            }
                        ]
                    },
                    '/WebDevelopment/lab'
                ]
            },
            //third folder
            {
                title: 'System Analysis',
                path: '/SystemAnalysis/',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'SystemAnalysis/assignment1'
                ]
            },
            {
                title: 'LeetCode',
                path: '/LeetCode',
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    'LeetCode/binaryTree',
                    'LeetCode/binarySearch'
                ]
            },
        ]

    },

}