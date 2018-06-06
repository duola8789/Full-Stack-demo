/**
 * Created by zh on 2018/6/5.
 */
import Mysql from '../common/mysql'; // 引入MySQL数据库

const exampleSchema = '../schema/example'; // 引入user的表结构
const Example = Mysql.import(exampleSchema);// 将Sequelize与表结构对应

export async function getAllExamples() {
  return await Example.findAll()
}

export async function getExampleById(id) {
  return await Example.findOne({
    where: {
      id
    }
  })
}

export async function createExample(data) {
  await Example.create({
    title: data.title,
    image: data.image
  });
  return true
}
