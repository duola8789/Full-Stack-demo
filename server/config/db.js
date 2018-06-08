/**
 * Created by zh on 2018/6/5.
 */

let dbInfo;

if(process.env.NODE_ENV === 'development') {
  dbInfo = 'mysql://root:zhouhao8789@172.21.0.15/test'; // 测试库
} else {
  dbInfo = 'mysql://root:zhouhao8789@172.21.0.15/zhou'; // 线上库
}

module.exports  = exports = {
  mysql: {
    default: dbInfo
  },
  jwtSecret: 'my-first-try',
};
