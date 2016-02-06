import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      Hello App Handler
      <ul>
        <li><Link to=''>Home</Link></li>
        <li><Link to='about'>About</Link></li>
      </ul>
      {this.props.children}
    </div>)
  }
};
