import React, { Component } from 'react';
import { Input, Menu, Button } from 'semantic-ui-react';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'Home' };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu secondary size="large" color="orange">
        <Menu.Item
          name="Home"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Foro"
          active={activeItem === 'Foro'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Noticias"
          active={activeItem === 'Noticias'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>
            <Button primary>Entrar</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
