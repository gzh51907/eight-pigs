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
                'pages':'@/pages',
                // 'router':'@/router',
                // 'store':'@/store',  这两个在所有文件都可以通过this.$router 和this.$store获取，都只需要引入一次 kop[]
            }
        }
    }
}