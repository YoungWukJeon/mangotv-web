import React from 'react';
// import LoginDialog from './LoginDialog';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import LoginDialog from './LoginDialog';
import Link from 'next/link';

function Header() {

  return (
    <>
      <LogoWrapper>
        <Link href="/">
          <a><img src={require('../../static/images/logo_test.png')} alt="mangotv logo"/></a>
        </Link>
      </LogoWrapper>
      <SearchWrapper>
        <SearchInput />
      </SearchWrapper>
      <UserInfoWrapper>
        <LoginDialog />
      </UserInfoWrapper>
    </>
  )
}

export default Header;

const LogoWrapper = styled.h1`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);

  img {
    width: 150px;
    height: 70px;
  }
`

const SearchWrapper = styled.div`
  position: absolute;
  width: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const UserInfoWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;