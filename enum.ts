/**
 * 枚举：enum
 * 要写很多if,elseif,elseif,else的时候考虑用枚举
 * 枚举写法
 * enum Status{
 *  '唱歌'，
 *  '跳舞',
 *  '写作业',
 * }
 * 枚举默认下标从0开始，如果想要修改从0开始的下标，可以以下设置：
 * enum Status{
 *  '唱歌' = 1,
 *  '跳舞',
 *  '写作业',
 * }
 * { '0': '唱歌', '1': '跳舞', '2': '写作业', '唱歌': 0, '跳舞': 1, ' 
    写作业': 2 }
 */

function getServe(status: number) {
  if (status === 0) {
    return '唱歌'
  } else if (status === 1) {
    return '跳舞'
  } else if (status === 2) {
    return '写作业'
  }
}

const ress = getServe(0)
console.log(res)

enum Status {
  '唱歌',
  '跳舞',
  '写作业',
}

function getServes(status: number) {
  if (status === Status.唱歌) {
    return '唱歌'
  } else if (status === Status.跳舞) {
    return '跳舞'
  } else if (status === Status.写作业) {
    return '写作业'
  }
}

console.log(Status)

const res22 = getServes(1)
console.log(res2)
