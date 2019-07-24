import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { container } from '../IoC';

import { Locale } from './Locale';

export const i18nInstanceKey = 'i18nInstanceKey';
const i18nInstance: i18n.i18n = i18n.use(LanguageDetector);

i18nInstance.init({
  detection: {
    lookupQuerystring: 'locale',
  },
  ns: ['app'],
  defaultNS: 'app',
  nonExplicitWhitelist: true,
  load: 'languageOnly',
  fallbackLng: Locale.RU,
  debug: process.env.NODE_ENV !== 'production',
  resources: {
    ru: {
      app: {
        signIn: 'Войти',
        signUp: 'Регистрация',
        signUpText: 'Доступна только клиентам Газпромбанка',
        signUpHint: 'Введите номер телефона, к которому привязана карта или договор',
        toLogin: 'Войти',
        toSignUp: 'Регистрация',
        next: 'Далее',
        phone: 'Телефон',
        otp: 'Код',
        otpText: 'Введите код из смс №{{code}}.\nМы отправили его на номер',
        otpTextNoPhone: 'Введите код из смс',
        otpWrongPhone: 'Изменить телефон',
        login: 'Логин',
        password: 'Пароль',
        passwordText: 'Придумайте пароль',
        passwordConfirmText: 'Повторите пароль',
        email: 'E-mail',
        loginText: 'Придумайте логин',
        emailText: 'Получайте важные уведомления и выгодные предложения от банка',
        cardContractText: 'Введите номер карты или договора',
        card: 'Карта',
        contract: 'Договор',
        error: 'Ошибка',
        errorMessage: 'Что-то пошло не так',
        errorButton: 'На главную',
        errorServer: 'Произошла ошибка на сервере',
        toRecovery: 'Не помню логин и пароль',
        recovery: 'Восстановление доступа',
        recoveryText: 'Введите номер телефона, к которому привязана карта или договор',
        blocked: {
          title: 'Доступ заблокирован',
          text: 'Обратитесь в ближайший офис банка или позвоните нам:',
          shortPhone: '*0701',
          shortPhoneHint: 'Телефон для абонентов МТС, Билайн, Мегафон, Tele2, Мотив',
          longPhone: '+7 495 913 79 99',
          longPhoneHint: 'из любой точки мира по тарифам вашего оператора',
        },
        validations: {
          latinOnly: 'Только латиница',
          minLenght: 'Минимум - {{ len }} символов',
          upperLowerCase: 'Буквы верхнего и нижнего регистра',
          specialChars: 'Хотя бы один спецсимвол из списка: {{ chars }}',
          email: 'Введите почту и получайте выгодные предложения от банка',
          notContainsPhone: 'Не содержит телефон',
          notMatchLogin: 'Не совпадает с логином',
        },
        hideBalance: 'Скрыть балансы',
        showBalance: 'Показать балансы',
        balanceDescription:
          'Расчетная сумма средств по всем продуктам по курсу ЦБ. Не включает кредитные средства',
      },
      step1: {
        title: 'Главная',
        text: 'История',
      },
      step2: {
        title: 'Главная',
        text: 'История',
      },
      step3: {
        title: 'Главная',
        text: 'История',
      },
      step4: {
        title: 'Главная',
        text: 'История',
      },
      step5: {
        title: 'Главная',
        text: 'История',
      },
    },
  },
});

export { i18nInstance };

container.bind(i18nInstanceKey).toConstantValue(i18nInstance);
