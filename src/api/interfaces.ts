import { AxiosRequestConfig } from 'axios';

export interface IAPI {

}

export type EndPoints<T> = { [P in keyof T]: string };

export type Configs<T> = { [P in keyof T]: (params: FirstArgument<T[P]>) => AxiosRequestConfig };
