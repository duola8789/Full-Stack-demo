/**
 * Created by zh on 2018/6/5.
 */
import JWT from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import * as userModal from '../model/userModel'

export async function getUserInfo(ctx) {
  const id = ctx.params.id; // 获取url里传过来的参数里的id
  ctx.body = await userModal.getUserById(id); // 将请求的结果放到response的body里返回
}

export async function postUserAuth(ctx) {
  const data = ctx.request.body; // post过来的数据存在request.body里
  const userInfo = await userModal.getUserByName(data.username); // 数据库返回的数据

  if (!userInfo) {
    ctx.body = {
      success: false,
      info: '用户不存在',
      token: null
    };
    return
  }
  if (!bcrypt.compareSync(userInfo.password, data.password)) {
    ctx.body = {
      success: false,
      info: '密码错误',
      token: null
    };
    return
  }

  const userToken = {
    name: userInfo.username,
    id: userInfo.id,
  };
  const secret = 'my-first-try'; // 指定密钥，这是之后用来判断token合法性的标志
  const token = JWT.sign(userToken, secret); // 签发token
  ctx.body = {
    success: true,
    info: '登陆成功',
    token,
  }
}

