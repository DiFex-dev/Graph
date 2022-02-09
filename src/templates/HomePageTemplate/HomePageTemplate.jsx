import React from 'react';

import { Layout } from '../../components/Layout';
import { Wrapper } from '../../components/Wrapper';
import styles from './HomePageTemplate.styles';

const HomePageTemplate = ({ pageContext: { PageData } }) => (
  <Layout title={PageData.seo.title} description={PageData.seo.description} image={PageData.seo.image}>
    <div css={styles}>
      <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
        <div className="buttons">
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
        </div>
        <div className="graph-wrapper">
          <div className="graph">
            <ul className="graph-item">
              <li  height={'80px'}></li>
              <li  height={'55px'}></li>
            </ul>
          </div>
          <div className="graph-text"></div>
        </div>
      </Wrapper>
    </div>
  </Layout>
);

export default HomePageTemplate;
