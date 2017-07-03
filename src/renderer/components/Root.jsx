import React from 'react';
import {ipcRenderer} from 'electron';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    // stateの初期化
    this.state = {count: 0}
    //バインド
    this.sendPing = this.sendPing.bind(this);

    ipcRenderer.on('reply', (event, arg) => {
      console.log(arg);
    });
  }

  sendPing() {
    this.setState({
      count: this.state.count + 1
    });
    ipcRenderer.send('message', {"count":this.state.count,"message":"test"});
  }

  /* 画面を生成 */
  render() {
    return <div>
      Send Count:
      <button onClick={this.sendPing}>
        {this.state.count}
      </button>
    </div>;
  }
}
