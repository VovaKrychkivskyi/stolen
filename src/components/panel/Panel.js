import React from 'react';
import arrow from '../consts/arrow.png';

import './Panel.scss';

class Panel extends React.Component {
  constructor(props) {
    super(props);

    const {isOpenByDefault} = props;

    this.state = {
      isOpen: isOpenByDefault,
      inputVal: 'test'
    };
  }

  test = 'test';

  onClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  onChange = (event) => {
    this.setState({
      inputVal: event.target.value
    });
  };

  render() {
    const {children, label} = this.props;
    const {isOpen} = this.state;

    return (
      <div className="may-panel card">

        <div className="may-panel-header card-header">
          <div>{label}</div>
          <div className={`may-panel-header-chevron ${isOpen ? 'up' : ''}`} onClick={this.onClick}>
            <img src={arrow} alt="chevron arrow"/>
          </div>
        </div>
        {
          isOpen && (
            <div className="card-body">
              {children}
            </div>
          )
        }
      </div>
    );
  }
}

export default Panel;