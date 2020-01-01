import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Category from './Category';

function Menu() {
  return (
    <MenuList>
      <li>시청 중</li>
      <li>ON Air</li>
      <Category />
      <Footer />
    </MenuList>
  );
}

export default Menu;

const MenuList = styled.ul`
  width: 80%;
  height: 100%;
  margin: 0 auto;

  li {
    border-bottom: 1px solid gray;
    padding: 10px 0;
  }
`;
