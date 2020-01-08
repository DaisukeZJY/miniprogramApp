// 缓存配置

const plistDataConfig = {
  relations: [
    {
      name: '爸爸',
      no: 1
    },
    {
      name: '妈妈',
      no: 2
    },
    {
      name: '爷爷',
      no: 3
    },
    {
      name: '奶奶',
      no: 4
    },
    {
      name: '外公',
      no: 5
    },
    {
      name: '外婆',
      no: 6
    },
    {
      name: '姐姐',
      no: 7
    },
    {
      name: '哥哥',
      no: 8
    }
  ],
}

const cacheKeyConfig = {
  // token缓存key
  tokenCacheKey: 'tokenCacheKey',
  // accId
  accIdCacheKey: 'accIdCacheKey',
  // 用户信息 需要配合用户accId
  userInfoCacheKey: 'userInfoCacheKey',

  // 是否当前用户更换头像
  isCurrentAccountChangeIconKey: 'isCurrentAccountChangeIconKey',
  // 是否当前孩子更换头像
  isCurrentStuChangeIconKey: 'isCurrentStuChangeIconKey',


  // 获取地区数据字典
  proCityComnityDataKey: 'proCityComnityDataKey',
  // 热门地区数据字典
  hotCityComnityDataKey: 'hotCityComnityDataKey'
}

module.exports = {
  plistDataConfig: plistDataConfig,
  cacheKeyConfig: cacheKeyConfig,
}