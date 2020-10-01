import React from "react";
import LikedList from "../Components/LikedList";
import CatList from "../Components/CatList";

class Feed extends React.Component {
  render() {
    return (
      <div className="intro">
        <h1 id="wordmark">Catsat</h1>
        <p id="strapline">Look after cute cats for strangers for free.</p>
        <button
          id="allcats"
          onClick={this.props.hideLikedList}
          autoFocus={true}
        >
          All cats
        </button>
        <button id="likedcats" onClick={this.props.showLikedList}>
          Liked
        </button>
        {this.props.showLiked === true ? (
          <LikedList
            selectCat={this.props.selectCat}
            deselectCat={this.props.deselectCat}
            likedCats={this.props.likedCats}
          />
        ) : (
          <CatList
            selectCat={this.props.selectCat}
            deselectCat={this.props.deselectCat}
            likedCats={this.props.likedCats}
          />
        )}
      </div>
    );
  }
}

export default Feed;
