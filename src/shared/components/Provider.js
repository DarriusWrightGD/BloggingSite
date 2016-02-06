import React from 'react';

export default class Provider extends React.Component{
  getChildContext(){
    return {
      store: this.props.store,
      muiTheme: this.props.muiTheme
    };
  }

  render(){
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object,
  muiTheme: React.PropTypes.object
};
