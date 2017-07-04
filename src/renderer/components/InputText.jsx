import React from 'react';
import {remote} from 'electron';

export default class SelectDirectory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      {this.props.itemName}:
      <input type="text" id={this.props.itemId} />
    </div>;
  }
}
