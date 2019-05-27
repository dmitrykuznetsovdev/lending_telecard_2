import styled from 'styled-components';

export const AppComponent = styled.div`
  height: 100%;
  min-height: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export const Content = styled.div<{isMobile: boolean;}>`  
  margin: auto;
  height: 100%;  
  
  @media all and (max-width: 910px) {
    min-width: 320px;
  }
`;
