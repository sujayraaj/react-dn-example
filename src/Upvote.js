import React, {Component} from 'react';

class Upvote extends Component {
  increment(){
    var val = this.props.vote+1;
    var ind = this.props.ind;
    this.props.increaseVote(val,ind);
  }
  render(){
    return(  <button className="story-upvote-button toggle-login" onClick={this.increment.bind(this)} >
    <svg  className="upvote-up-arrow" height="7"
    id="svg-up-arrow" role="img" version="1.1" viewBox="0 0 11 7" width="11">
    <path d="m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96"/>
    </svg>
    <span className="story-upvote-button-number unvoted-number">{this.props.vote}</span></button>);
  }
}

export default Upvote;

/*
<button aria-label="Upvote this story to 13 points" class="story-upvote-button toggle-login" itemscope=true itemtype="../schema.org/LikeAction.html">
  <svg aria-label=up-arrow class=upvote-up-arrow height=7
  id=svg-up-arrow role=img version="1.1" viewBox="0 0 11 7" width=11>
  <path d="m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96"/>
</svg>
<span class="story-upvote-button-number unvoted-number">12</span>
*/
