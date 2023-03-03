// parse函数 主函数
export default function (templateString) {
  // 指针
  var index = 0
  // 未处理的字符串
  let tailStr = templateString
  // 剩余部分
  var rest = ''
  // 匹配开始的html标签
  var startRegExp = /^\<([a-z]+[1-6]?)\>/
  // 匹配结束的html标签
  const endTagRegExp = /^\<\/([a-z]+[1-6]?)\>/
  while (index < templateString.length - 1) {
    console.log(templateString[index])

    rest = templateString.substring(index)
    // 切换遍历到这个字符 是不是一个开始标签
    if (startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1]
      console.log('检测到开始标记', tag)
      // 指标移动标签的长度加2 为什么要加2 因为<>也占位
      index += tag.length + 2
    } else if (endTagRegExp.test(tailStr)) {
      // 切换遍历到这个字符 是不是一个结束标签
      index++
    }
  }
}