import React from 'react';
import {AppBar, LeftNav, MenuItem} from 'material-ui';

class App extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {navOpen:false};
    this.menuItems = [
        { route:'/', text:'Home'},
        { route:'/about', text:'About'}
    ];
  }

  toggleNavbar = ()=>{
    this.setState({navOpen:!this.state.navOpen});
  };

  selectedMenuItem = (route)=>{
    this.context.router.push(route);
    this.toggleNavbar();
  };

  render(){
    const menuItemsView = this.menuItems.map((item, index)=>{
        return (<MenuItem key= {index} onTouchTap={()=>{
          this.selectedMenuItem(item.route);
        }
      }>{item.text}</MenuItem>);
    });
    return (<div>
      <AppBar
        onLeftIconButtonTouchTap={this.toggleNavbar}
        title='Wright Blogging'/>
      <LeftNav open={this.state.navOpen}>
        {menuItemsView}
      </LeftNav>
      {this.props.children}
    </div>);
  }
}

App.contextTypes ={
  router: React.PropTypes.object
};

export default App;
