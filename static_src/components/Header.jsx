import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return <AppBar title={'Чат '+this.props.chatId} iconClassNameRight = "muidocs-icon-navigation-expand-more" />
  };
};
