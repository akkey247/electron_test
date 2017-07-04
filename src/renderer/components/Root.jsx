import React from 'react';
import {ipcRenderer} from 'electron';
import SelectDirectory from './SelectDirectory.jsx';
import InputText from './InputText.jsx';

export default class Root extends React.Component {
  constructor(props) {
    super(props);

    // バインド
    this.sendPing = this.sendPing.bind(this);

    // レスポンス受け取り
    ipcRenderer.on('reply', (event, arg) => {
      alert(arg);
    });
  }

  sendPing() {
    const json = {
      "url": document.getElementById('url').value,
      "savepath": document.getElementById('dirName').value + '/test.html'
    }
    console.log(json);
    ipcRenderer.send('message', json);
  }

  // 画面を生成
  render() {
    return <div>
      <SelectDirectory itemName='出力ディレクトリ' itemId='dirName' />
      <InputText itemName='URL' itemId='url' />
      <button onClick={this.sendPing}>
        送信
      </button>
    </div>;
  }
}
