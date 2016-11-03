import React from 'react';
import Day1 from './day1';
import Day2 from './day2';
import Day3 from './day3';
import {Fullpage, Slide, TopNav, SideNav} from 'fullpage-react';

const fullPageOptions = {
  threshold: 100,
  sensitivity: 100
};
const topNavOptions = {
  footer: false, //topNav can double as a footer if true
  align: 'left', //also supports center and right alignment
  activeStyles: {backgroundColor: 'white'},
  hoverStyles: {backgroundColor: 'yellow'},
  nonActiveStyles: {backgroundColor: 'gray'}
};
const sideNavOptions = {
  right: '2%', //left alignment is default
  top: '50%', //top is 50% by default
  activeStyles: {color: 'white'},
  hoverStyles: {color: 'yellow'},
  nonActiveStyles: {color: 'gray'}
};


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      hover: null
    };
    this.updateActiveState = this.updateActiveState.bind(this);
  }

  updateActiveState(newActive) {
    this.setState({'active': newActive});
  }

  shouldComponentUpdate(nP, nS) {
    //ensure hoverStyles and activeStyles update
    return nS.active != this.state.active || nS.hover != this.state.hover;
  }

  onMouseOver(idx) {
    this.setState({'hover': idx});
  }

  onMouseOut(e) {
    this.setState({'hover': null});
  }

  compareStyles(component, idx) {
    return idx == this.state.active ? component.activeStyles : idx == this.state.hover ? component.hoverStyles : component.nonActiveStyles
  }

  render() {
    return (
      <Fullpage active={this.updateActiveState}>
        <Slide>
          <Day1 />
        </Slide>
        <Slide>
          <Day2 />
        </Slide>
        <Slide>
          <Day3 />
        </Slide>
      </Fullpage>
    );
  }
}

module.exports = App;
