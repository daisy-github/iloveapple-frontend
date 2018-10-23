import React from 'react';
import { Grid, Header } from 'semantic-ui-react'

const Thankyou = () => (
  <Grid.Row className="wrapper thanks">
	  <Grid.Column computer={2} mobile={16}></Grid.Column>
	  <Grid.Column computer={12} mobile={16}>
	  	<p>Your post will be show shorty after admin approval.</p>
	  </Grid.Column>	
  </Grid.Row>
);


const Thanks = () => <Thankyou/>;

export default Thanks;