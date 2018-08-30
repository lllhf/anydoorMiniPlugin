var plugin = requirePlugin("anydoorPlugin")

function loginYZT(loginCallBack) {
  plugin.setLoginCallBack(loginCallBack);
  wx.navigateTo({
    url: "plugin://anydoorPlugin/login?env=" + plugin.getEnvironment(),
  })
}

function indexPage() {
  wx.navigateTo({
  url: "plugin://anydoorPlugin/index",
  })
}

function getToken() {
  return plugin.getToken();
}

function initAnydoorPlugin(enviroment){
  plugin.setYztAppid("11002");
  plugin.setEnvironment(enviroment);
}
module.exports = {
  //调起一账通登录页面
  loginYZT: loginYZT,
  //拿一账通token
  getToken: getToken,
  //初始化任意门插件
  initAnydoorPlugin: initAnydoorPlugin,
  //打开任意门首页
  indexPage: indexPage
}