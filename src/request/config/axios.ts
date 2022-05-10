import Axios, { AxiosResponse, AxiosError } from 'axios';
import http, { Agent } from 'http';
import { ThirdPartyServiceException } from 'src/errors/bussiness-exception';
import { THIRD_PARTY_SERVICE_ERROR_CODE } from 'src/utils/error-code';

/**
 * @description HTTP 错误码转错误提示文本
 * @param {AxiosResponse} response Axios response object
 */
const getErrorCode2text = (response: AxiosResponse): string => {
  /** http status code */
  const code = response.status;
  /** notice text */
  let message = 'Request Error';
  switch (code) {
    case 400:
      message = 'Request Error';
      break;
    case 401:
      message = 'Unauthorized, please login';
      break;
    case 403:
      message = '拒绝访问';
      break;
    case 404:
      message = '访问资源不存在';
      break;
    case 408:
      message = '请求超时';
      break;
    case 500:
      message = '位置错误';
      break;
    case 501:
      message = '承载服务未实现';
      break;
    case 502:
      message = '网关错误';
      break;
    case 503:
      message = '服务暂不可用';
      break;
    case 504:
      message = '网关超时';
      break;
    case 505:
      message = '暂不支持的 HTTP 版本';
      break;
    default:
      message = '位置错误';
  }
  return message;
};

const onFulfilled = () => {};

/**
 * @returns  {AxiosResponse} result
 * @tutorial see more:https://github.com/onlyling/some-demo/tree/master/typescript-width-axios
 * @example
 * service.get<{data: string; code: number}>('/test').then(({data}) => { console.log(data.code) })
 */
const service = Axios.create({
  baseURL: 'https://aws.okx.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
  },
  // httpAgent: new Agent({ keepAlive: true }),
});

service.interceptors.request.use(async (value) => {
  // const { proxy } = (await Axios.get('http://127.0.0.1:5010/get')).data;
  // const proxyHost = proxy.split(':')[0];
  // const proxyPort = Number.parseInt(proxy.split(':')[1]);

  // console.log({
  //   host: proxyHost,
  //   port: proxyPort,
  // });

  value.proxy = {
    host: '102.68.128.218',
    port: 8080,
  };

  //  value.httpAgent = http.httpOverHttp({proxy: {host: '183.167.217.152', port: '630001'}});

  return value;
});

/**
 * @description 响应收到后的拦截器
 * @returns {}
 */
service.interceptors.response.use(
  /** 请求有响应 */
  async (response: AxiosResponse) => {
    if (response.status === 200 && response.data.code === '0') {
      return Promise.resolve(response);
    } else {
      return Promise.reject(
        new ThirdPartyServiceException(
          THIRD_PARTY_SERVICE_ERROR_CODE.THIRD_PARTY_SERVICE_ERROR,
          '第三方服务请求异常',
          500,
        ),
      );
    }
  },
  /** 请求无响应 */
  async (error: AxiosError) => {
    let errorMessage: string =
      error?.response?.data?.message ||
      error.message ||
      error?.response?.data?.data ||
      '未预料的服务器内部错误';

    const IS_TIMEOUT =
      errorMessage.indexOf('timeout') !== -1 ||
      errorMessage.indexOf('超时') !== -1;

    const IS_UNAUTHORIZED = error?.response?.status === 401;

    if (IS_TIMEOUT) {
      errorMessage = '请求超时';
    }

    if (IS_UNAUTHORIZED) {
      errorMessage = '第三方服务授权异常';
    }

    console.log(error);
    // console.log(error.response.data);
    console.log(error.stack);

    return Promise.reject(new Error(errorMessage));
  },
);

export default service;
