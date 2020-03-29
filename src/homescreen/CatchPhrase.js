import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

const Wrapper = styled.div`
  width: 40%;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  ${media.lessThan("767px")`
    height: 200px;
    width: 100%;
    align-items: center;
  `}
  ${media.between("medium", "1025px")`
    height: 200px;
    width: 100%;
    align-items: center;
  `}
`

const Phrase = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 60px;
  margin-top: 100px;
  ${media.lessThan("767px")`
    margin-top: 0;
    font-size: 40px;
  `}
  ${media.between("medium", "1025px")`
    margin-top: 0;
  `}
`

const CatchPhrase = () => {
  return (
    <Wrapper>
      <Phrase>
        目指せ3連勝!!
      </Phrase>
    </Wrapper>
  )
}

export default CatchPhrase;