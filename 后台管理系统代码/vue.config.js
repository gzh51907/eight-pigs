// 别名的配置
module.exports={
    configureWebpack:{
        resolve:{
            extensions:[], //添加哪些可以省略
            alias:{    //别名
                // '@':'src', 脚手架里默认的
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}