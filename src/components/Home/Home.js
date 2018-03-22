import React, { Fragment } from 'react';
import ListIssues from '../ListIssues';
import Form from '../Form';
import InfinityScroll from '../InfinityScroll';

const Home = () => (
  <Fragment>
    <Form />
    <ListIssues />
    <InfinityScroll />
  </Fragment>
);

export default Home;
