import React from 'react';
import './day1.css';

class Day1 extends React.Component {
  render() {
    return (
      <div className="day_wapper day1">
        <div className="day1_content">
          <div className="day1_text">
            北冥有鱼  其名为鲲
          </div>
          <div className="day1_text">
            鲲之大  不知其几千里也
          </div>
          <div className="day1_text">
            化而为鸟  其名为鹏
          </div>
          <div className="day1_text">
            鹏之背  不知其几千里也
          </div>
        </div>
        <div className="day1_title">
          <div className="day1_text" style={{position: 'absolute', bottom: '90px', fontSize: '45px'}}>
            逍遥游 • 庄子
          </div>
        </div>
        <div className="day1_image">
        </div>
      </div>
    );
  }
}

module.exports = Day1;
