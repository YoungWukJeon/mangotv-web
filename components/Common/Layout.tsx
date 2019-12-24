import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Menu from '../Menu';

type LayoutProps = {
  children: ReactElement;
};

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <header>
        <Header />
      </header>
      <section>
        <nav>
          <Menu />
        </nav>
        <article>{children}</article>
      </section>
    </LayoutWrapper>
  );
}

export default Layout;

const navWidth: string = '230px';
const headerHeight: string = '70px';

const LayoutWrapper = styled.div`
  width: 100vw;

  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: ${headerHeight};
  }

  section {
    position: relative;
    width: 100%;
    margin-top: ${headerHeight};

    nav {
      position: fixed;
      width: ${navWidth};
      height: 100vw;
      outline: 1px solid black;
    }

    article {
      width: calc(100% - ${navWidth});
      margin-left: ${navWidth};
      outline: 1px solid black;
    }
  }
`;