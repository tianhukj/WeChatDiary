const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "6ab01632e2b44936b4951d8019007eab",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx3e5290f51659ebd0",

  // 微信公众号的appsecret
  APP_SECRET: "33538d4e786ad10dd0da9cea1c79ca57",

  // 微信公众号的模板ID
  TEMPLATE_ID: "rdlKXnh-mlQGnwmV7wXKSXRnI9-nZe_qXuJhe3VCeAo",

  // 天行API的key
  TXApiKey: "96fd738b99e30ffa1014dad845cd0764",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "小颉颉吖",
      // 用户列表的`微信号`
      userId: "ovvpK7AjmE8fA3lodi0uJVrVjxL8",
      // 星座
      star: "水瓶座",
      // 生日 - 格式：08-22
      birthday: "02-05",
      // 城市 - 格式：支持省市县区
      city: "东营市",
    },
  ],


  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: true,
    // 毒鸡汤
    duJiTang: true,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: true,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
