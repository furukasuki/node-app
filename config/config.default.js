'use strict';
const sequelizeConfig = require('./config.sequelize');
module.exports = appInfo => {
    const config = exports = {};
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1510991679580_9861';
    // add your config here
    config.middleware = [];
    config.sequelize = sequelizeConfig;


//  跨域白名单   
 config.security = {
        // csrf: {
        //     enable: false,
        //     ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
        // },
    domainWhiteList: ['http://localhost:8080']
    };
    config.cors = {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };


    return config;
};

