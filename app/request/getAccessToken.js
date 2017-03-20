/**
 * Created by xiangwenwen on 2017/2/17.
 */

const axios = require('axios');
const logger = require('../logger');
const env = require('../env');
const CorpID = env.CorpID;
const CorpSecret = env.CorpSecret;
const OAPI_HOST = env.OAPI_HOST[env.scheme];

/*
 *
 *   通过corpId，corpsecret换取AccessToken
 * */
function *getAccessToken(){
    const accessTokenRequest = {
        url: OAPI_HOST + '/gettoken',
        method: 'get',
        params: {
            corpid: CorpID,
            corpsecret: CorpSecret
        }
    };
    return axios(accessTokenRequest).then(function(response){
        const data = response.data;
        if (data.errcode === 0){
            TokenCache = data.access_token;
            logger.info('token：' + TokenCache);
        }
        return data;
    }).catch(function (err) {
        logger.log('error','get access token request error');
        return {
            errcode: 500,
            errmsg: 'get access token request bad',
            error: err
        }
    });
}

module.exports = getAccessToken;