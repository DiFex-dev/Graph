import SlideIn from '@economist/fabric-components/animation/SlideIn/SlideIn';
import React from 'react';

import styles from './Graph.styles';

const Graph = ({ bars, lineX, lineY, lineName }) => {
  function firstHoverOn() {
    document.getElementById('first').classList.add('active');
    document.getElementById('firstPoint').classList.add('active');
    document.getElementById('text-first').classList.add('active');
  }

  function firstHoverOff() {
    document.getElementById('first').classList.remove(`active`);
    document.getElementById('firstPoint').classList.remove('active');
    document.getElementById('text-first').classList.remove('active');
  }

  function secondHoverOn() {
    document.getElementById('second').classList.add('active');
    document.getElementById('secondPoint').classList.add('active');
    document.getElementById('text-second').classList.add('active');
  }

  function secondHoverOff() {
    document.getElementById('second').classList.remove(`active`);
    document.getElementById('secondPoint').classList.remove('active');
    document.getElementById('text-second').classList.remove('active');
  }

  function thirdHoverOn() {
    document.getElementById('third').classList.add('active');
    document.getElementById('thirdPoint').classList.add('active');
    document.getElementById('text-third').classList.add('active');
  }

  function thirdHoverOff() {
    document.getElementById('third').classList.remove(`active`);
    document.getElementById('thirdPoint').classList.remove('active');
    document.getElementById('text-third').classList.remove('active');
  }

  function fourthHoverOn() {
    document.getElementById('fourth').classList.add('active');
    document.getElementById('fourthPoint').classList.add('active');
    document.getElementById('text-fourth').classList.add('active');
  }

  function fourthHoverOff() {
    document.getElementById('fourth').classList.remove(`active`);
    document.getElementById('fourthPoint').classList.remove('active');
    document.getElementById('text-fourth').classList.remove('active');
  }

  function fifthHoverOn() {
    document.getElementById('fifth').classList.add('active');
    document.getElementById('fifthPoint').classList.add('active');
    document.getElementById('text-fifth').classList.add('active');
  }

  function fifthHoverOff() {
    document.getElementById('fifth').classList.remove(`active`);
    document.getElementById('fifthPoint').classList.remove('active');
    document.getElementById('text-fifth').classList.remove('active');
  }

  return (
    <div css={styles}>
      <SlideIn translateY="0px" translateX="200px">
        <div className="buttons">
          <button className="btn" onMouseEnter={() => firstHoverOn()} onMouseLeave={() => firstHoverOff()}>
            1
          </button>
          <button className="btn" onMouseEnter={() => secondHoverOn()} onMouseLeave={() => secondHoverOff()}>
            2
          </button>
          <button className="btn" onMouseEnter={() => thirdHoverOn()} onMouseLeave={() => thirdHoverOff()}>
            3
          </button>
          <button className="btn" onMouseEnter={() => fourthHoverOn()} onMouseLeave={() => fourthHoverOff()}>
            4
          </button>
          <button className="btn" onMouseEnter={() => fifthHoverOn()} onMouseLeave={() => fifthHoverOff()}>
            5
          </button>
        </div>
      </SlideIn>
      <div className="graph-wrapper">
        <div className="graph">
          <ul className="graph-item" id="graphId">
            {bars.map((bars) => (
              <li style={{ height: bars.value }} id={bars.barId} className={bars.barId}>
                {bars.barId && (
                  <p id={`text-${bars.barId}`} className={`graphText-${bars.barId}`}>
                    {bars.value}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <div className="graph-axisX">
            {lineX.map((lineX) => (
              <div className="line-x">
                <div className="line-xHatch" />
                <div className="line-xInfo">{lineX.lineXInfo}</div>
              </div>
            ))}
          </div>
          <div className="graph-axisXName">{lineName.lineXName}</div>
        </div>
        <div className="graph-text">
          <div className="graph-axisY">
            {lineY.map((lineY) => (
              <div className="line-y">
                <div className="line-yHatch" />
                <div className="line-yInfo">{lineY.lineYInfo}</div>
              </div>
            ))}
          </div>
          <div className="graph-axisYName">{lineName.lineYName}</div>
          <div className="graph-points">
            {bars.map((bars) => (
              <p id={bars.pointsId} className={bars.pointsId}>
                {bars.points}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
