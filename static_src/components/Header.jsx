import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropsTypes from 'prop-types';

export default class Header extends React.Component {
  static propsTypes = {
    chatId: PropsTypes.number,
  };

  static defaultProps = {
    chatId: 1,
  };

  render() {
    return <AppBar title="Проститутки Нижнего" iconClassNameRight="muidocs-icon-navigation-expand-more" />
  };
};