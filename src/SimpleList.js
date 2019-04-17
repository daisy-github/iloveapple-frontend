import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, Accordion, Icon } from "semantic-ui-react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

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
      <div>
        {data.GetDeviceTypes !== undefined
          ? data.GetDeviceTypes.map((type, index) => (
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="angle right" />
                  {type.type}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <List>
                    <List.Item>
                      <List.Content>
                        <Link to="/">Semantic UI</Link>
                      </List.Content>
                    </List.Item>
                  </List>
                </Accordion.Content>
              </Accordion>
            ))
          : null}
      </div>
    );
  }
}

export const FETCH_DEVICES = gql`
  query Devices {
    GetDeviceTypes {
      type
    }
  }
`;

export default graphql(FETCH_DEVICES)(SimpleList);
