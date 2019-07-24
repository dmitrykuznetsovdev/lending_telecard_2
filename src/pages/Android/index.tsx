import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { withIsMobile, withIntl } from '../../dal/commonDecorators';
import { Header } from '../../components/Header/header';
import { DownloadAppButton } from '../../components/DownloadAppButton';
import appSettings from '../../conf/app-settings';
import {
  Image,
  StepTitle,
  Description,
  Content,
  Wrapper,
  ContentTitle,
  GridStep,
  GridCol,
  GridColDescription,
} from '../../components/StepInstall/style';

import screen1 from './img/screen1.png';
import screen2 from './img/screen2.png';
import screen3 from './img/screen3.png';
import screen4 from './img/screen4.png';
import { Root } from './style';

interface IProps {
  isMobile?: boolean;
  t: (s: string) => string;
}

function StepOne({ isMobile }: Partial<IProps>) {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>
          1. Нажмите{' '}
          <DownloadAppButton
            isFullWidth={isMobile}
            dimension="small"
            url={appSettings.LINK_APP_ANDROID_URL}>
            Скачать приложение
          </DownloadAppButton>
        </StepTitle>
        <Description>
          Появится предупреждение, что приложение может нанести вред вашему устройству. Не
          волнуйтесь, все идет по плану. Нажмите «Ок».
        </Description>
      </GridColDescription>
      <GridCol>
        <Image src={screen1} />
      </GridCol>
    </GridStep>
  );
}

function StepSecond() {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>2. Когда приложение скачается, нажмите «Открыть»…</StepTitle>
      </GridColDescription>
      <GridCol>
        <Image src={screen2} />
      </GridCol>
    </GridStep>
  );
}

function StepThird() {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>3. Установить</StepTitle>
        <Description>
          …и следом «Установить». Когда установка закончится, приложение будет готово к работе.
        </Description>
      </GridColDescription>
      <GridCol>
        <Image src={screen3} />
      </GridCol>
    </GridStep>
  );
}

function StepFour() {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>4. Нажмите «Разрешить».</StepTitle>
        <Description>
          Когда вы откроете его в первый раз, приложение попросит разрешение совершать звонки и
          управлять ими. Нажмите «Разрешить».
          <br /> <br />
          Готово! Приложением можно пользоваться.
        </Description>
      </GridColDescription>
      <GridCol>
        <Image src={screen4} />
      </GridCol>
    </GridStep>
  );
}

@observer
class IosPage extends Component<IProps> {
  render() {
    const { isMobile } = this.props;
    return (
      <Root>
        <Header title="Телекард 2.0 для Android" system="android" />
        <Wrapper>
          <ContentTitle>Как установить приложение</ContentTitle>
          <Content>
            <StepOne isMobile={isMobile} />
            <StepSecond />
            <StepThird />
            <StepFour />
          </Content>
        </Wrapper>
      </Root>
    );
  }
}

export default withIsMobile(withIntl(IosPage));
