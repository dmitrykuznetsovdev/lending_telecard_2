import React, {Component} from 'react';
import {observer} from 'mobx-react';

import { withIsMobile } from '../../dal/commonDecorators';
import {DownloadAppButton} from '../../components/DownloadAppButton';

import {Header} from './header';
import screen1 from './img/screen1.jpg';
import screen2 from './img/screen2.jpg';
import screen3 from './img/screen3.jpg';
import screen5 from './img/screen5.jpg';
import screen6 from './img/screen6.jpg';
import screen7 from './img/screen7.jpg';
import {
  Root,
  Step,
  StepFirst,
  StepImage,
  StepTitle,
  StepText,
  Content,
  FontBI,
  List,
  Wrapper,
  ContentTitle,
} from './style';

interface IProps {
  isMobile?: boolean;
}

function StepOne({isMobile}: Partial<IProps>) {
  return (
    <StepFirst>
      <StepImage src={screen1}/>
      <StepTitle>
        1. Загрузите телекард 2.0
      </StepTitle>
      <StepText>
        Для этого нажмите на кнопку ниже и переходите к&nbsp;следующему шагу.
        <br />
        <DownloadAppButton dimension="medium" isFullWidth={isMobile}>
          Скачать приложение
        </DownloadAppButton>
      </StepText>
    </StepFirst>
  )
}

function StepSecond() {
  return (
    <Step>
      <StepImage src={screen2}/>
      <StepTitle>
        2. Откройте страницу в iTunes
      </StepTitle>
      <StepText>
        Телефон предложит вам открыть страницу в приложении iTunes.
        Соглашайтесь&nbsp;&mdash;&nbsp;нажмите <FontBI>«Открыть»</FontBI>.
      </StepText>
    </Step>
  )
}
function StepThird() {
  return (
    <Step>
      <StepImage src={screen3}/>
      <StepTitle>
        3. Подтвердите установку
      </StepTitle>
      <StepText>
        Появится диалоговое окно с предложением установить приложение <FontBI>«Telecard»</FontBI> от
        dbo.gazprombank.ru. Нажмите&nbsp;<FontBI>«Установить»</FontBI>.
      </StepText>
    </Step>
  )
}

function StepFour() {
  return (
    <Step>
      <StepImage src={screen5}/>
      <StepTitle>
        4. Разрешите пользоваться приложением от BANK GPB, AO
      </StepTitle>
      <StepText>
        Из-за того, что <FontBI>«Телекард 2.0»</FontBI> установлен не из App Store понадобится
        подтвердить, что вы доверяете этому приложению и подтверждаете его надежность. Для этого:

        <List>
          <li>Зайдите в настройки вашего телефона.</li>
          <li>Перейдите в раздел <FontBI>«Основные»</FontBI>, а в нем&nbsp;&mdash;&nbsp;в
            раздел <FontBI>«Профиль»</FontBI>.
          </li>
          <li>Под заголовком <FontBI>«Корпоративная&nbsp;программа»</FontBI> вы увидите
            профиль <FontBI>«BANK&nbsp;GPB,&nbsp;AO»</FontBI>. Нажмите на него.
          </li>
          <li>Подтвердите, что доверяете нам и хотите пользоваться приложением&nbsp;&mdash;&nbsp;нажмите&nbsp;<br />
            <FontBI>«Доверять&nbsp;BANK&nbsp;GPB,&nbsp;AO»</FontBI>.
          </li>
        </List>
      </StepText>
    </Step>
  )
}

function StepFive() {
  return (
    <Step>
      <StepImage src={screen6}/>
      <StepTitle>
        5. Подтвердите действие
      </StepTitle>
      <StepText>
        Появится еще одно диалоговое окно в котором нужно подтвердить разрешение пользоваться нашими
        приложениями.
        Подтверждайте&nbsp;&mdash;&nbsp;нажмите <FontBI>«Доверять»</FontBI>.
      </StepText>
    </Step>
  )
}

function StepSix() {
  return (
    <Step>
      <StepImage src={screen7}/>
      <StepTitle>
        6. Зарегистрируйтесь
      </StepTitle>
      <StepText>
        Вернитесь на главный экран, откройте приложение и введите номер телефона, привязанный к вашей карте
        Газпромбанка.
        Затем введите код подтверждения из СМС.
        <br/><br/>
        После подтверждения номера придумайте надежный пароль. Рекомендуем создать пароль минимум из шести
        символов, который содержит: цифры, заглавные и строчные буквы
        английского алфавита.
        <br/><br/>
        Готово!
      </StepText>
    </Step>
  )
}

@observer
class IosPage extends Component<IProps> {
  render() {
    const { isMobile } = this.props;

    return (
      <Root>
        <Header />
          <Wrapper>
            <ContentTitle>
              Как установить приложение
            </ContentTitle>
            <Content>
              <StepOne isMobile={isMobile} />
              <StepSecond />
              <StepThird />
              <StepFour />
              <StepFive />
              <StepSix />
            </Content>
            <br />
            <DownloadAppButton isFullWidth={isMobile}>
              Скачать приложение
            </DownloadAppButton>
          </Wrapper>
      </Root>
    );
  }
}

export default withIsMobile(IosPage);
