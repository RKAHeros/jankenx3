import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import iosImage from '../images/ios-image.png';
import androidImage from '../images/android-image.png';

const Wrapper = styled.div`
  width: 60%;
  height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  ${media.lessThan("767px")`
    width: 100%;
    height: auto;
    display: block;
    padding-bottom: 40px;
  `}
  ${media.between("medium", "1025px")`
    width: 100%;
    height: auto;
  `}
`

const IosMobile = styled.div`
  width: 210px;
  height: 427px;
  margin: 0px auto 20px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  position: relative;
  ::before{
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    background-image: url(${iosImage});
    background-size: cover;
    background-position: center;
    border-radius: 25px;
  }
  ::after{
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    width: 95px;
    height: 12px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  ${media.lessThan("767px")`
    margin: 0 auto;
    margin-bottom: 40px;
  `}
  ${media.between("medium", "1025px")`
    margin-bottom: 40px;
  `}
`

const AndroidMobile = styled.div`
  width: 230px;
  height: 427px;
  margin: 0px auto 20px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  position: relative;
  ::before{
    content: '';
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    background: #262626;
    width: 95px;
    height: 6px;
    border-radius: 30%;
  }
  ::after{
    content: '';
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    background: #262626;
    width: 95px;
    height: 6px;
    border-radius: 30%;
  }
  ${media.lessThan("767px")`
    margin: 0 auto;
  `}
  ${media.between("medium", "1025px")`
    margin-bottom: 40px;
  `}
`

const ScreenShot = styled.div`
  position: absolute;
  top: 40px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 50px);
  background-image: url(${androidImage});
  background-size: cover;
  background-position: center;
`

const CatchPhrase = () => {
  return (
    <Wrapper>
      <IosMobile></IosMobile>
      <AndroidMobile>
        <ScreenShot></ScreenShot>
      </AndroidMobile>
    </Wrapper>
  )
}

export default CatchPhrase;