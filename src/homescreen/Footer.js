import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100px;
  background: rgb(45,48,57);
  display: flex;
`

const LinkItem = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: rgb(125,134,158);
    &:hover{
      opacity: .6;
    }
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <LinkItem><Link to='/privacy'>Privacy Policy</Link></LinkItem>
    </Wrapper>
  )
}

export default Footer;