import React, {Component} from 'react';
import './day3.css';

class Day3Char extends Component{
  render(){
    return(
      <div className="day3_char_container">
        <div className="day3_char_line_vertical"></div>
        <div className="day3_char_line_horizontal"></div>
        <div className="day3_text">
          {this.props.children}
        </div>
      </div>
    )
  }
}

class Day3 extends Component {
  render(){
    return(
      <div className="day_wapper day3">
        <div className="day3_gradiant_background"></div>
        <div>
          <Day3Char>
            好
          </Day3Char>
          <Day3Char>
            好
          </Day3Char>
          <Day3Char>
            学
          </Day3Char>
          <Day3Char>
            习
          </Day3Char>
        </div>
        <div>
          <Day3Char>
            天
          </Day3Char>
          <Day3Char>
            天
          </Day3Char>
          <Day3Char>
            向
          </Day3Char>
          <Day3Char>
            上
          </Day3Char>
        </div>
      </div>
    )
  }
}

module.exports = Day3
