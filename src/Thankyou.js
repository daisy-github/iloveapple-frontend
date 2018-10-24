import React from 'react';
import { Grid, Header, Icon, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";
const Thankyou = () => (
  <Grid.Row className="wrapper thanks">
	  <Grid.Column computer={2} mobile={16}></Grid.Column>
	  <Grid.Column computer={12} mobile={16} className="inner">
	  	<Icon name="check circle outline"/>
	  	<p>Thank you for sharing your experience.</p>
	  	<p>Your post will be shown shorty after admin approval.</p>
	  	<Button primary floated='left' className="custom post_button" as={Link} to="/">
            Back to Home            
      	</Button>
	  </Grid.Column>	
  </Grid.Row>
);


const Thanks = () => <Thankyou/>;

export default Thanks;