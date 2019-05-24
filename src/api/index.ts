import { AxiosRequestConfig } from 'axios';

import AxiosConfig from '../conf/axios';

import { IAPI } from './interfaces';

const domains = {

};

const domainsMock = {

};

/**
 *
 * @param request
 */
function createRequestMock(request: any) {
  return (params: IAnyValues) => {
    const config: AxiosRequestConfig = request(params);
    return AxiosConfig.getAxiosInstanceMock()(config);
  };
}

/**
 *
 * @param request
 */
function createRequest(request: any) {
  return (params: IAnyValues) => {
    const config: AxiosRequestConfig = request(params);
    return AxiosConfig.getAxiosInstance()(config);
  };
}

const createMethods = (reqRespObj: any, domainName: string) =>
  Object.keys(reqRespObj).reduce((methods, methodName) => {
    if (domainsMock[domainName] && process.env.NODE_ENV === 'development') {
      methods[methodName] = createRequestMock(reqRespObj[methodName]);
    } else {
      methods[methodName] = createRequest(reqRespObj[methodName]);
    }

    return methods;
  }, {});

const wrapAllByCreateMethods = (obj: IAnyValues) =>
  Object.keys(obj).reduce((domain, domainName) => {
    domain[domainName] = createMethods(obj[domainName], domainName);
    return domain;
  }, {}) as IAPI;

const methodsForBackendCall = wrapAllByCreateMethods(domains);

export default methodsForBackendCall;
