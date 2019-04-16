import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import PostItem from "./Postitem";
import Sidebar from './Sidebar'
import {
  Link,
} from 'react-router-dom'
import { Grid, Icon, Item, Loader, List,Header} from 'semantic-ui-react'
import LayoutWrapper from './LayoutWrapper';

const Category = parentProps => {
  return(
console.log('parent props',parentProps)
  )

};
const QUERY = gql`
  query Posts($type:String!){
    GetPostByCategory(type:$type){
      _id
      title
      content
      device
      email
      firstName
      lastName
      country
      state
      city
      zip
      createdAt
      updatedAt
    }
  }
`;

export default LayoutWrapper(Category);
