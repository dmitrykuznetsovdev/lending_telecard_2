import React, {Component} from 'react';
import {observer} from 'mobx-react';

import {withIsMobile, withIntl} from '../../dal/commonDecorators';
import {Header} from '../../components/Header/header';
import {DownloadAppButton} from '../../components/DownloadAppButton';
import {
  Image,
  StepTitle,
  Description,
  Content,
  Wrapper,
  ContentTitle,
  GridStep,
  GridCol,
  GridColDescription
} from '../../components/StepInstall/style';

import screen1 from './img/screen1.png';
import screen2 from './img/screen2.png';
import screen3 from './img/screen3.png';
import screen4 from './img/screen4-1.png';
import screen4_1 from './img/screen4-2.png';
import screen5 from './img/screen5.png';
import screen6 from './img/screen6.png';
import { Root } from './style';

interface IProps {
  isMobile?: boolean;
  t: (s: string) => string;
}

function StepOne({isMobile}: Partial<IProps>) {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>
          1. <DownloadAppButton isFullWidth={isMobile} dimension="small" url="#">
            Скачать приложение
          </DownloadAppButton>
        </StepTitle>
      </GridColDescription>
      <GridCol>
        <Image src={screen1}/>
      </GridCol>
    </GridStep>
  )
}

function StepSecond() {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>
          2. Подтвердите установку
        </StepTitle>
        <Description>
          Появится предупреждающий
          поп-ап, выберите «Установить».
        </Description>
      </GridColDescription>
      <GridCol>
        <Image src={screen2}/>
      </GridCol>
    </GridStep>
  )
}

function StepThird() {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>
          3. Установка началась
        </StepTitle>
        <Description>
          На главном
          экране телефона вы увидите,
          когда она закончится.
        </Description>
      </GridColDescription>
      <GridCol>
        <Image src={screen3}/>
      </GridCol>
    </GridStep>
  )
}

function StepFour() {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>
          4. Перейдите в настройки телефона
        </StepTitle>
        <Description>
          «Основные» →
          «Профили и управл.
          устройством» → Bank GPB.AO
          <br /> <br />
        </Description>
        <Image src={screen4}/>
        <Image src={screen4_1}/>
      </GridColDescription>
    </GridStep>
  )
}

function StepFive() {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>
          5. Нажмите «Доверять BANK GPB,AO»…
        </StepTitle>
      </GridColDescription>
      <GridCol>
        <Image src={screen5}/>
      </GridCol>
    </GridStep>
  )
}

function StepSix() {
  return (
    <GridStep>
      <GridColDescription>
        <StepTitle>
          6. … и еще раз «Доверять».
        </StepTitle>
      </GridColDescription>
      <GridCol>
        <Image src={screen6}/>
      </GridCol>
    </GridStep>
  )
}

@observer
class IosPage extends Component<IProps> {
  render() {
    const {isMobile} = this.props;

    return (
      <Root>
        <Header title="Телекард 2.0 для iOS" system="ios" />
        <Wrapper>
          <ContentTitle>
            Как установить приложение
          </ContentTitle>
          <Content>
            <StepOne isMobile={isMobile}/>
            <StepSecond/>
            <StepThird/>
            <StepFour/>
            <StepFive/>
            <StepSix/>
          </Content>
        </Wrapper>
      </Root>
    );
  }
}

export default withIsMobile(withIntl(IosPage));
