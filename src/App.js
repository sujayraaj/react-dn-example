import React, { Component } from 'react';
import './App.css';
import NewsData from './NewsData';
import Sort from './Sort.js';
import SortMe from './SortMe.js';
import NewsText from './NewsText.js';

class App extends Component {
  constructor(props){
    super(props);
    var newsData=NewsData.slice(0);
    newsData = newsData.map(obj => Object.assign({},obj));
    newsData.sort(Sort.compareTwoNewsByVotes);
      this.state = {
      newsData: newsData,
      currentSort:'top'
    }
  }
  sortByTopVote(){
    if(this.state.currentSort==='star'){
    var newsData=this.backup.slice(0);
    newsData = newsData.map(obj => Object.assign({},obj));
      newsData.sort(Sort.compareTwoNewsByVotes);
      var currentSort ='top';
      this.setState({
        newsData,
        currentSort
      });
    }
  }
  sortByStars(){
    if(this.state.currentSort ==='top' ){
    this.backup = this.state.newsData;
    var newsData=this.state.newsData.slice(0);
    var currentSort = 'star'
    newsData = newsData.map(obj => Object.assign({},obj));
    newsData = newsData.filter(obj=> obj.starred);
      newsData.sort(Sort.compareTwoNewsByVotes);

      this.setState({
        newsData,
        currentSort
      });
    }
  }
  increaseVote(val,ind){
    var newsData=this.state.newsData.slice(0);
    newsData = newsData.map(obj => Object.assign({},obj));
    newsData[ind].votes=val;
    newsData.sort(Sort.compareTwoNewsByVotes);
    this.setState({
      newsData,
    });
  }

  toggleStar(ind){
    var newsData=this.state.newsData.slice(0);
    newsData = newsData.map(obj => Object.assign({},obj));
    if(newsData[ind].starred) newsData[ind].starred=false;
    else newsData[ind].starred = true;
    this.setState({
      newsData,
    });
  }


  render() {

    var content = [];
    this.state.newsData.forEach((obj,ind) => content.push(<NewsText key={ind} content={obj.content} votes={obj.votes} increaseVote={this.increaseVote.bind(this)} ind={ind} starred={obj.starred} toggleStar={this.toggleStar.bind(this)}/>),this);
    return (
      <div className="App">
        <SortMe sortByStars={this.sortByStars.bind(this)} sortByTopVote={this.sortByTopVote.bind(this)}/>
        {content}
      </div>
    );
  }
}

export default App;
