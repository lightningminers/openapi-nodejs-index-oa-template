/**
 * Created by xiangwenwen on 2017/2/16.
 */

const config = {
    scheme: 'release',
    connect: {
        beta: 'mongodb://127.0.0.1:27017/tokentable',
        release: 'mongodb://127.0.0.1:27017/tokentable'
    },
    CorpID: '',
    CorpSecret: '',
    OAPI_HOST: {
        beta: '',
        release: 'https://oapi.dingtalk.com'
    }
};

if (process.env.NODE_ENV !== 'product') {
    config.scheme = 'beta';
}

module.exports = config;
