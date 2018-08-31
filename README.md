# 任意门小程序插件接入指南

## 快速接入

### 一、申请使用插件

* 申请插件：在小程序管理后台-设置-第三方服务-添加插件，插件APPID： wxc7a2e8eee0e5e95f

* 使用插件：在app.json中加上以下代码

```
  "plugins": {
    "anydoorPlugin": {
      "version": "0.1.1",
      "provider": "wxc7a2e8eee0e5e95f"
    }
  }
```

### 二、导入资源文件
下载[anydoorUtils.js](https://github.com/lllhf/anydoorMiniPlugin/blob/master/anydoorUtils.js)，并将该文件放入公用文件夹中

### 三、初始化
1、在小程序app.js中对上述js资源文件进行导入

2、在app.js中的onLaunch函数中调用anydoorUtils.initAnydoorPlugin('stg')对任意门小程序插件进行初始化。**其中stg代表测试环境，pro代表生产环境**

## 接口描述
各接口均在anydoorUtils.js文件中

### 一、调用一账通登录
anydoorUtils.js中已经对该方法进行封装，只调用即可。

调用示例：

只需要在wxml文件的控件中调用该方法即可成功调出一账通登录页面，登录成功以后会返回token,回调方式为异步。
	

	tologin: function () {
    if(this.data.token == ''){
      anydoorUtils.loginYZT(function (token) {
        if (token) {
          wx.showToast({
            title: 'Token' + token,
            icon: 'success',
            duration: 2000
          })
        }
      })
    }
  }


### 二、获取登录token

登录成功后，可以通过该方式获取token

	anydoorUtils.getToken() 
	
### 三、打开任意门首页

```
anydoorUtils.indexPage()
```
	



