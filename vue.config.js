module.exports={
    devServer: {
        open:true,
        proxy:{
            'index.php':{
                target:'http://www.qinqin.net',
                changeOrigin:true
            }
        }
    }
}