import appSettings from '../conf/app-settings';

export default function boot() {
  return new Promise((resolve) => {
    appSettings.LINK_APP_IOS_URL = window['SERVICES_URL'].LINK_APP_IOS_URL;
    appSettings.LINK_APP_ANDROID_URL = window['SERVICES_URL'].LINK_APP_ANDROID_URL;
    resolve(1);
  })
}
