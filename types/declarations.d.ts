declare var __DEV__: boolean;
declare var NODE_ENV: any;
declare var __localeId__: string;

declare module '*.json'

declare type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;

interface IAnyValues {
  [propName: string]: any;
}
