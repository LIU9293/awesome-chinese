import React, {Component} from 'react';
import './day2.css';

class Day2 extends Component {
  render(){
    return(
      <div className="day_wapper day2">
        <div className="day2_text_container_1">
          <div className="day2_text day2_text_big">
            黑夜
          </div>
        </div>
        <div className="day2_content">
          <div className="day2_text">
            给了我黑色的眼睛
          </div>
          <div className="day2_text">
            我却用它去寻找<p className="day2_text_shadow">光明</p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Day2
