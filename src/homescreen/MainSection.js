import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import CatchPhrase from './CatchPhrase';
import Mobile from './Mobile';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  background: linear-gradient(to bottom right,rgba(31,255,255, 0.6),rgba(238,255,65, 0.6) 50%,rgba(239,154,154, 0.6)); 
`

const Header = styled.div`
  height: 80px;
  ${media.lessThan("767px")`
    display: flex;
    justify-content: center;
  `}
`

const Title = styled.div`
  height: 80px;
  line-height: 80px;
  font-size: 35px;
  color: #fff;
  padding-left: 30px;
  font-weight: bold;
  ${media.lessThan("767px")`
    padding: 0;
  `}
`

const Main = styled.div`
  display: flex;
  ${media.lessThan("767px")`
    display: block;
  `}
  ${media.between("medium", "1025px")`
    display: block;
  `}
`

const MainSection = () => {
  return (
    <Wrapper>
      <Header>
        <Title>
          じゃんけんx3
        </Title>
      </Header>
      <Main>
        <CatchPhrase />
        <Mobile />
      </Main>
    </Wrapper>
  )
}

export default MainSection;