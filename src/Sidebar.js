import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, Accordion, Icon ,Grid,Header} from "semantic-ui-react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import DeviceRenderer from "./DeviceRenderer";

class SimpleList extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleCategory = async type => {
    console.log(type);
  };

  render() {
    const { data } = this.props;
    const { activeIndex } = this.state;
    console.log("device type", data);
    return (
      <Grid.Row className="sidebar-right">
        <Grid.Column className="list_block">
          <Header as='h3'  content='Archive' />
        {data.GetDevices !== undefined
          ? data.GetDevices.map((type, index) => (
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="angle right" />
                  {type.typeName}
                </Accordion.Title>

                <Accordion.Content active={activeIndex === 0}>
                  {type.device !== undefined
                    ? type.device.map((device, index) => (
                        <List>
                          <List.Item>
                            <List.Content>
                              <Link to={"/device/"+device._id}>{device.name}</Link>
                            </List.Content>
                          </List.Item>
                        </List>
                      ))
                    : null}
                </Accordion.Content>
              </Accordion>
            ))
          : null}
       </Grid.Column> 
      </Grid.Row>
    );
  }
}

export const FETCH_DEVICES = gql`
query fetchDevices {
  GetDevices {
    typeId
    typeName
    device {
      _id
      name
    }
  }
}
`;

export default graphql(FETCH_DEVICES)(SimpleList);
