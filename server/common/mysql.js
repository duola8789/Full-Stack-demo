/**
 * Created by zh on 2018/6/5.
 */
import Sequelize from 'sequelize';
import config from '../config/server';

const mysql = new Sequelize(config.mysql.default, {
  define: {
    timestamps: false,
  },
  operatorsAliases: false
});
export default mysql;
