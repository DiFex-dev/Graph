import { css } from '@emotion/react';

import { colors } from '../../styles';
import { p2r, SecondaryProps } from '../../styles/fonts';

const gradient = 'linear-gradient(180deg, rgb(247, 94, 37), rgb(240, 147, 113))';

const styles = css`
  .graph-wrapper {
    display: flex;
    flex-direction: row;
    height: ${p2r(200)};
  }

  .buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    width: 100%;
    margin: ${p2r(100)} 0 ${p2r(50)};
  }

  .btn {
    width: 70px;
    height: ${p2r(70)};
    background-color: ${colors.coral};
    border: none;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colors.orange};
      transition: all 0.3s ease;
    }
  }

  .graph {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 70%;
    height: 100%;
    border-right: 2px solid ${colors.black};
  }

  .graph-item {
    position: relative;
    top: ${p2r(47)};
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    border-top: 2px solid ${colors.black};
    transform: scale(-1);
    transform: scaleY(-1);
  }

  .first {
    background: ${gradient};
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.darkOrange};
    }

    &.active {
      background: ${colors.darkOrange};
    }

    .graphText-first {
      position: relative;
      top: 100%;
      left: 0;
      display: none;
      text-align: center;
      transform: rotate(-180deg);
      transform: scale(1, -1);

      &.active {
        display: block;
      }
    }
  }

  .second {
    background: ${gradient};
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.darkOrange};
    }

    &.active {
      background: ${colors.darkOrange};
    }

    .graphText-second {
      position: relative;
      top: 100%;
      left: 0;
      display: none;
      text-align: center;
      transform: rotate(-180deg);
      transform: scale(1, -1);

      &.active {
        display: block;
      }
    }
  }

  .third {
    background: ${gradient};
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.darkOrange};
    }

    &.active {
      background: ${colors.darkOrange};
    }

    .graphText-third {
      position: relative;
      top: 100%;
      left: 0;
      display: none;
      text-align: center;
      transform: rotate(-180deg);
      transform: scale(1, -1);

      &.active {
        display: block;
      }
    }
  }

  .fourth {
    background: ${gradient};
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.darkOrange};
    }

    &.active {
      background: ${colors.darkOrange};
    }

    .graphText-fourth {
      position: relative;
      top: 100%;
      left: 0;
      display: none;
      text-align: center;
      transform: rotate(-180deg);
      transform: scale(1, -1);

      &.active {
        display: block;
      }
    }
  }

  .fifth {
    background: ${gradient};
    transition: all 0.3s ease;

    &:hover {
      background: ${colors.darkOrange};
    }

    &.active {
      background: ${colors.darkOrange};
    }

    .graphText-fifth {
      position: relative;
      top: 100%;
      left: 0;
      display: none;
      text-align: center;
      transform: rotate(-180deg);
      transform: scale(1, -1);

      &.active {
        display: block;
      }
    }
  }

  .graph-item li {
    width: 100%;
    background-color: ${colors.liteOrange};
    animation: ani 2s forwards;
  }

  @keyframes ani {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .graph-text {
    display: flex;
    flex-direction: row;
    width: 30%;
  }

  .graph-points {
    ${SecondaryProps};
    font-size: ${p2r(18)};
  }

  .graph-axisY {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .graph-axisX {
    position: relative;
    top: ${p2r(47)};
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .line-y {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: flex-end;
  }

  .line-yHatch {
    width: 10px;
    height: ${p2r(2)};
    background-color: ${colors.black};
  }

  .line-xHatch {
    width: 2px;
    height: ${p2r(10)};
    background-color: ${colors.black};

    &:last-child {
      position: relative;
      top: 0;
      left: 2px;
    }
  }

  .line-yInfo {
    position: relative;
    top: ${p2r(10)};
    left: 0;
  }

  .line-xInfo {
    position: relative;
    top: 0;
    left: -12px;
    font-size: ${p2r(14)};
  }

  .graph-axisYName {
    position: relative;
    top: ${p2r(-30)};
    left: -82px;
    font-size: ${p2r(18)};
    text-transform: uppercase;
  }

  .graph-axisXName {
    position: relative;
    top: ${p2r(65)};
    left: -47.5%;
    font-size: ${p2r(18)};
    text-transform: uppercase;
  }

  .firstPoint {
    position: relative;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }

  .secondPoint {
    position: relative;
    top: ${p2r(-42)};
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }

  .thirdPoint {
    position: relative;
    top: ${p2r(-104)};
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }

  .fourthPoint {
    position: relative;
    top: ${p2r(-145)};
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }

  .fifthPoint {
    position: relative;
    top: ${p2r(-186)};
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      transition: all 0.3s ease;
    }
  }
`;

export default styles;
