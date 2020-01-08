// 请求路径配置

// 基础路径
const baseUrl = 'https://wewills.net'

const urlConfig = {
// ======================第三方SDK模块==========================
  tencentMapKey: 'YK3BZ-YROKI-FNPGL-5AZGV-2TH6T-2LBSQ',

// ======================基本路径==========================
  // 基本路径
  baseUrl,

  // 查看图片
  iconPhotoUrl: `${baseUrl}/scs/app/showPhoto?photoId=`,

  // ======================静态数据模块==========================
  // 获取数据字典
  findDictsUrl: `${baseUrl}/scs/app/findDicts`,
  // 获取地区数据字典
  findProCityComnityUrl: `${baseUrl}/scs/app/findProCityComnity`,
  // 获取热门地区数据字典
  findComnityHotCityUrl: `${baseUrl}/scs/app/findComnityHotCity`,

// ======================登录模块==========================
  // 登录
  loginUrl: `${baseUrl}/scs/app/applogin`,
  // 退出登录
  outLoginUrl: `${baseUrl}/scs/app/outlogin`,
  // 获取验证码
  verifyCodeUrl: `${baseUrl}/scs/app/findVerifyCode`,
  // 身份选择
  identityUrl: `${baseUrl}/scs/app/identity`,
  // 提交学生信息
  subStuUrl: `${baseUrl}/scs/app/subStu`,
  // 获取学生信息
  findStuUrl: `${baseUrl}/scs/app/findStu`,
  // 提交老师信息
  subTeachUrl: `${baseUrl}/scs/app/subTeach`,
  // 班级邀请码获取信息
  findClassInfoUrl: `${baseUrl}/scs/app/findClassInfo`,
  // 提交老师或者学生信息校验
  subValidCardUrl: `${baseUrl}/scs/app/subValidCard`,
  // 班主任换班级
  subTeacTranClassUrl: `${baseUrl}/scs/app/subTeacTranClass`,

// ======================用户模块==========================
  // 上传头像
  photoUploadUrl: `${baseUrl}/scs/app/photoUpload`,
  // 修改昵称
  editNickNameUrl: `${baseUrl}/scs/app/nickname`,
  // 更换手机号
  modifyMobileUrl: `${baseUrl}/scs/app/modifyMobile`,
  // 修改密码
  modifyPwdUrl: `${baseUrl}/scs/app/modifyPwd`,

  // 意见反馈
  feeBackUrl: `${baseUrl}/scs/app/feedback`,
  // 消息通知设置接口
  msgNotifySetUrl: `${baseUrl}/scs/app/msgNotifySet`,
  // 获取消息设置
  findMsgNotifySetUrl: `${baseUrl}/scs/app/findMsgNotifySet`,

  // 获取支付列表
  listOrderUrl: `${baseUrl}/scs/app/listOrder`,
  // 创建订单
  createOrderrUrl: `${baseUrl}/scs/app/createOrder`,
  // 查询订单
  queryOrderUrl: `${baseUrl}/scs/app/queryOrder`,

  // 获取 我的孩子-查询
  queryStusUrl: `${baseUrl}/scs/app/queryStus`,
  // 子帐户-添加
  subAccAddUrl: `${baseUrl}/scs/app/subAccAdd`,
  // 我的孩子-帐户解绑
  unbindUrl: `${baseUrl}/scs/app/unbind`,
  // 班级邀请码获取信息
  findClassInfoUrl: `${baseUrl}/scs/app/findClassInfo`,
  // 我的孩子-修改标签号
  alterTagNumUrl: `${baseUrl}/scs/app/alterTagNum`,
  // 我的孩子-转班
  stuTransferUrl: `${baseUrl}/scs/app/stuTransfer`,
  // 我的孩子--设置最晚回家时间
  setStuLatestTimeUrl: `${baseUrl}/scs/app/setStuLatestTime`,
  // 我的孩子--设置家庭地址/小区
  setStuHomeAddrUrl: `${baseUrl}/scs/app/setStuHomeAddr`,
  // 我的孩子--获取家庭设置信息（地址和最晚回家时间
  queryStuHomeSetUrl: `${baseUrl}/scs/app/queryStuHomeSet`,

// ======================发现模块==========================
  // 老师介绍连接
  teacherfaqWebUrl: `${baseUrl}/scs/static/html/faq/teacherfaq.html`,
  // 家长介绍连接
  partenfaqWebUrl: `${baseUrl}/scs/static/html/faq/partenfaq.html`,

// ======================首页模块==========================
  // 家长-首页获取学生信息
  homeStuInfoUrl: `${baseUrl}/scs/app/findHomeStu`,
  // 家长-首页消息列表
  homeStuMsgsUrl: `${baseUrl}/scs/app/findHomeStuMessage`,
  // 家长-首页孩子列表
  findStuSelectUrl: `${baseUrl}/scs/app/findStuSelect`,
  // 家长-时间配比
  homeTimeRatioUrl: `${baseUrl}/scs/app/timeRatio`,
  
// ======================安全模块==========================
  // 告警信息
  alarmsUrl: `${baseUrl}/scs/app/alarms`,
  // 获取基站
  stationsUrl: `${baseUrl}/scs/app/stations`,
  // 获取学生最新点位信息
  stuLastLocateUrl: `${baseUrl}/scs/app/findStuLastLocate`,
  // 获取历史轨迹信息
  stuTrackListUrl: `${baseUrl}/scs/app/findStuTrackList`,

// ======================协议模块==========================
  // 登录协议
  oginPtotocolUrl: `${baseUrl}/scs/app/textInfo?textType=DL`,
  // 家长人脸认证
  facePtotocolUrl: `${baseUrl}/scs/app/textInfo?textType=RL&accType=P`,
  // 家长人脸认证问题说明
  faceProblemUrl: `${baseUrl}/scs/app/textInfo?textType=SYR&accType=P`,
  // 支 说明
  pyaTipUrl: `${baseUrl}/scs/app/textInfo?textType=ZF&accType=P`,
  // 学生动态说明
  stuDynamicTipUrl: `${baseUrl}/scs/app/textInfo?textType=DT&accType=P`,
}

// 模块化
module.exports = urlConfig