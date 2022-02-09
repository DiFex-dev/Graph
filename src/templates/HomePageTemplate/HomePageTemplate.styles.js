import { css } from '@emotion/react';

const styles = css`
  .template-container {
    position: relative;
  }

  .graph-wrapper{
    display: flex;
    flex-direction: row;
  }

  .buttons{
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    margin-top: 100px;
    margin-bottom: 50px;
  }

  .btn {
    width: 70px;
    height: 70px;
    background-color: coral;
    border-radius: 50%;
    border: none;
    &:hover {
      background-color: darksalmon;
    }
  }

  .graph {
    display: flex;
    align-items: flex-end;
    width: 70%;
    background-color: gray;
    height: 500px;
  }

  .graph-item {
    position: relative;
    list-style: none;
  }

  .graph-item li {
    position: absolute;
    bottom: 0;
    width: 40px;
    background-color: black;
  }

  .one {
    left: 10px;
    height: 80px;
  }

  .two {
    left: 50px;
    height: 55px;
  }


  .graph-text {
    width: 30%;
    background-color: yellow;
  }
`;

export default styles;
