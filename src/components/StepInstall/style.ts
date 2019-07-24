import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 900px;
  height: 100%;
  margin: auto;
  @media all and (max-width: 910px) {
    width: 320px;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  border-left: solid 1px #e0e0e0;

  @media all and (max-width: 910px) {
    border-left: none;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;

  @media all and (max-width: 910px) {
    flex-direction: column;
  }
`;

export const GridCol = styled.div`
  display: block;
  flex: 1;
  justify-content: space-around;
`;

export const GridColDescription = styled(GridCol)`
  min-width: 400px;

  @media all and (max-width: 910px) {
    min-width: 100%;
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const GridStep = styled(Grid)`
  min-height: 620px;
  padding-left: 26px;
  margin-bottom: 40px;

  @media all and (max-width: 910px) {
    padding-left: 0px;
  }
`;

export const ContentTitle = styled.h2`
  margin-top: 80px;
  font-family: Roboto;
  font-size: 42px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #303239;

  @media all and (max-width: 910px) {
    margin-top: 40px;
    font-size: 28px;
    line-height: 1.29;
    margin-left: 0px;
    margin-right: 20px;
  }
`;

export const Image = styled.img`
  float: right;
  margin-right: 30px;
  max-width: 300px;
  @media all and (max-width: 910px) {
    float: none;
    margin-right: 0px;
    width: 100%;
    max-width: 100%;
  }
`;

export const Description = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #000000;

  @media all and (max-width: 910px) {
    padding-right: 20px;
    font-size: 15px;
    line-height: 1.47;
  }
`;

export const StepTitle = styled.h3`
  margin-bottom: 1em;
  padding-top: 10px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #303239;

  &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    left: -8px;
    top: 22px;
    width: 16px;
    height: 16px;
    background-color: #195dbd;
  }

  @media all and (max-width: 910px) {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 0;

    &:before {
      display: none;
    }
  }
`;
