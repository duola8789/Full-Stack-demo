/**
 * Created by zh on 2018/6/5.
 */
import JWT from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import * as exampleModal from '../model/exampleModel'
import config from '../../config/common';

export async function getExampleById(ctx) {
  const id = ctx.params.id; // 获取url里传过来的参数里的id
  const ret = await exampleModal.getExampleById(id);
  ctx.body = {
    success: !!ret,
    retDsc: ret ? '查询成功' : '无数据',
    ret
  };
}

export async function getAllExamples(ctx) {
  const ret = await exampleModal.getAllExamples();
  ctx.body = {
    success: !!ret,
    retDsc: ret ? '查询成功' : '无数据',
    ret
  };
}


export async function createExample(ctx) {
  const data = ctx.request.body; // post过来的数据存在request.body里
  const ret = await exampleModal.createExample(data);
  ctx.body = {
    success: ret,
    retDsc: ret ? '增加成功' : '增加失败',
  };
}
