/**
 * Created by zh on 2018/6/5.
 */

let dbInfo;

if(process.env.NODE_ENV === 'development') {
  dbInfo = 'mysql://root:zhouhao8789@bj-cdb-4r2j5j8v.sql.tencentcdb.com:63283/test'; // 测试库
} else {
  dbInfo = 'mysql://root:zhouhao8789@172.21.0.15:3306/zhou'; // 线上库
}

module.exports  = exports = {
  mysql: {
    default: dbInfo
  },
  jwtSecret: 'my-first-try',
};
