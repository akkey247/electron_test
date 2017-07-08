import React from 'react';
import {remote} from 'electron';
const dialog = remote.dialog;

export default class SelectDirectory extends React.Component {
  constructor(props) {
    super(props);

    // stateの初期化
    this.state = {
      directoryName: ""
    }

    //バインド
    this.selectDirectory = this.selectDirectory.bind(this);
  }

  selectDirectory() {
    dialog.showOpenDialog(null, {
      properties: ['openDirectory'],
      title: 'Select Directory',
      defaultPath: '.'
    }, (directoryName) => {
      this.setState({
        directoryName: directoryName
      });
    });
  }

  render() {
    return <div className="select-directory-box">
      <span>{this.props.itemName}:</span>
      <input type="text" id={this.props.itemId} value={this.state.directoryName} />
      <button onClick={this.selectDirectory}>
        選択
      </button>
    </div>;
  }
}
