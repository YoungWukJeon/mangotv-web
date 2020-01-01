import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IoIosFootball, IoMdApps } from 'react-icons/io';
import {GLOBAL_COLOR} from '../../static/styles/global-styles';

function Category() {
  return (
    <li>
      <CategoryTitle>
        <IoMdApps /> 
        <span>카테고리</span>
      </CategoryTitle>
      <CategoryList>
        <li>
          <Link href="/">
            <a>
              <IoIosFootball />
              <span>전체</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sport">
            <a>
              <IoIosFootball />
              <span>스포츠</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/game">
            <a>
              <IoIosFootball />
              <span>게임</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/bora">
            <a>
              <IoIosFootball />
              <span>일상</span>
            </a>
          </Link>
        </li>
      </CategoryList>
    </li>
  );
}

export default Category;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  margin: 10px 0 14px;

  span{
    display: inline-block;
    vertical-align: text-bottom;
    margin-left: 5px;
  }
`

const CategoryList = styled.ul`
  padding-left: 20px;

  li{
    margin: 8px 0;

    a:hover{
      color: ${GLOBAL_COLOR.mainColor};
    }

    span{
      display: inline-block;
      margin-left: 5px;
      vertical-align: middle;
    }
  }
`;
