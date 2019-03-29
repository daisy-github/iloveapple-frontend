import React from 'react';
import { Grid, Header } from 'semantic-ui-react'
import LayoutWrapper from './LayoutWrapper';

const AboutDiv = () => (
  <Grid.Row className="wrapper">
	  <Grid.Column computer={2} mobile={16}></Grid.Column>
	  <Grid.Column computer={12} mobile={16}>
	  	<Header as="h2">About Us</Header>
	  	<p>This is an example of a WordPress page, you could edit this to put information about yourself or your site so readers know where you are coming from. You can create as many pages like this one or sub-pages as you like and manage all of your content inside of WordPress.</p>
	  </Grid.Column>	
  </Grid.Row>
);


const About = () => <AboutDiv/>;

export default LayoutWrapper(About);