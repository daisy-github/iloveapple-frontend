import React from 'react';
import { Grid, Header } from 'semantic-ui-react'

const Thankyou = () => (
  <Grid.Row className="wrapper thanks">
	  <Grid.Column computer={2} mobile={16}></Grid.Column>
	  <Grid.Column computer={12} mobile={16}>
	  	<p>Thank you for sharing your experience, Your post will be shown shorty after admin approval.</p>
	  </Grid.Column>	
  </Grid.Row>
);


const Thanks = () => <Thankyou/>;

export default Thanks;