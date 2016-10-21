import React, {Component} from 'react';

class SortMe extends Component{
  render (){
      return (<div id="sortMe" className="header-sub-navigation-container sub-navigation-visible-items">
          <button onClick={this.props.sortByTopVote}>Top</button>
          <button onClick={this.props.sortByStars}>Starred</button>
      </div>)
  }
}

export default SortMe;
