import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <h3>Mango TV</h3>
      <dl>
        <dt>개발자 : (Team) Avengers</dt>
        <dd>- 김 경 호 (이메일)</dd>
        <dd>- 박 성 동 (이메일)</dd>
        <dd>- 이 찬 호 (이메일)</dd>
        <dd>- 전 영 욱 (dnr87@naver.com)</dd>
        <dt>호스팅 서비스 제공자</dt>
        <dd>Amazon Web Services, Inc.</dd>
      </dl>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.li`
  font-size: 0.8rem;
  line-height: 1.4;

  h3 {
    font-size: 1rem;
    margin: 0.5em 0;
  }

  dt {
    margin-top: 1em;
  }
  
  dd {
    padding-left: 0.5em;
  }
`;
