
// =========数组相关===============
function remove(array, value){
  for (var i = 0; i < array.length; i++){
    if (array[i] == value) {
      array.splice(i, 1)
      return 0
    }
  }
  return -1
}

// =========正则表达式相关===============
 /**是否全市中文 */
function checkAllChinese(str){
  var reg = /^[\u4E00-\u9FA5]+$/
  return reg.test(str)
}

 /**是否包含中文 */
function checkContainChinese(str) {
  var reg = /.*[\u4E00-\u9FA5]+.*$/
  return reg.test(str)
}

/**只允许数字与英文 */
function checkNumAndEnglish(str) {
  var reg = /^[0-9A-Za-z]+$/
  return reg.test(str)
}

module.exports = {
  remove,


  checkAllChinese,
  checkContainChinese,
  checkNumAndEnglish
}
