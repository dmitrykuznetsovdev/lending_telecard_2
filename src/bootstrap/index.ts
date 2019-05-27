import AxiosConfig from '../conf/axios';
import appSettings from '../conf/app-settings';

export function isSlashTerminatedString(str: string) {
  return typeof str === 'string' && str.charAt(str.length - 1) === '/';
}

export default function boot() {
  return AxiosConfig.getAxiosInstance()
    .get('/app-settings.json')
    .then(
      (res: any): any => {
        if (!res.data.LINK_APP_IOS_URL || !res.data.LINK_APP_ANDROID_URL) {
          return Promise.reject(new Error('Empty PUBLIC_URL'));
        }
        Object.keys(res.data).forEach(key => {
          appSettings[key] = res.data[key];
          if (/_URL$/.test(key) && !isSlashTerminatedString(res.data[key])) {
            throw new Error(
              `${key}="${res.data[key]}" must be valid URLs terminated by slash character.`
            );
          }
        });
      }
    );
}
