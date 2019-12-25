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
    border-bottom: 3px solid gray;
  }

  section {
    position: relative;
    width: 100%;
    margin-top: ${headerHeight};

    nav {
      position: fixed;
      width: ${navWidth};
      height: 100vh;
    }

    article {
      width: calc(100% - ${navWidth});
      margin-left: ${navWidth};
    }
  }
`;