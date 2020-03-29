import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions'

let styles = {
  
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={e => { e.persist(); this.setState({ hover: false }) }}
        onMouseOver={e => { e.persist(); this.setState({ hover: true }) }}
        onClick={e => {e.persist(); this.props.getNews()}}
      >Press to see News</button> 
    );
  }

};

const mapDispatchToProps = {
  getNews: getNews,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;