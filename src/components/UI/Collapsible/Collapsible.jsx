import React, { Component } from 'react';
import M from 'materialize-css';
import CollapsibleItem from './CollapsibleItem/CollapsibleItem';

export class Collapsible extends Component {
  elemsColap = null;
  instancesColap = null;
  componentDidMount() {
    this.elemsColap = document.querySelectorAll('.collapsible');
    this.instancesColap = M.Collapsible.init(this.elemsColap);
  }

  render() {
    const plansList = this.props.list.map(item => (
      <CollapsibleItem
        key={item.id}
        item={item}
        onCurrentSet={() => this.props.onCurrentSet(item.id)}
      />
    ));

    return <ul className="collapsible">{plansList}</ul>;
  }
}

export default Collapsible;
