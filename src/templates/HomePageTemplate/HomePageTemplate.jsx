import React from 'react';

import { Graph } from '../../components/Graph';
import { Layout } from '../../components/Layout';
import { Wrapper } from '../../components/Wrapper';
import styles from './HomePageTemplate.styles';

const HomePageTemplate = ({ pageContext: { PageData } }) => {
  const { data } = PageData;
  const { bars, lineX, lineY, lineName } = data;

  return (
    <Layout title={PageData.seo.title} description={PageData.seo.description} image={PageData.seo.image}>
      <div css={styles}>
        <Wrapper maxWidth={'1440px'} width={'100%'} mobileWidth={'90%'}>
          <Graph bars={bars} lineX={lineX} lineY={lineY} lineName={lineName} />
        </Wrapper>
      </div>
    </Layout>
  );
};

export default HomePageTemplate;
