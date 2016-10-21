import React, {Component} from 'react';
import Upvote from './Upvote';

class NewsText extends Component {
  toggle(){
    this.props.toggleStar(this.props.ind);
  }
  render(){
    return (
      <div className="story-list-item montana-list-item ">
      <Upvote vote={this.props.votes} increaseVote={this.props.increaseVote} ind={this.props.ind} />
      <div className="list-story-grouper list-story-main-grouper">{this.props.content}<span onClick={this.toggle.bind(this)} className={this.props.starred ? 'star':'not-star'}>&#9733;</span></div>
      </div>
    )
  }
}

export default NewsText;
