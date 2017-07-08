import React from 'react';
import {remote} from 'electron';

export default class SelectDirectory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="input-text-box">
      <span>{this.props.itemName}:</span>
      <input type="text" id={this.props.itemId} />
    </div>;
  }
}
