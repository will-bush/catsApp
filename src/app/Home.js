import React from "react";
import CatDetail from "../Components/CatDetail";
import Feed from "../Components/Feed";

class Home extends React.Component {
  state = {
    showLiked: false,
    showDetail: null,
    likedCats: []
  };

  showLikedList = () => {
    this.setState({
      showLiked: true
    });
  };

  hideLikedList = () => {
    this.setState({
      showLiked: false
    });
  };

  selectCat = (cat, liked) => {
    this.setState({
      showDetail: { ...cat, isLiked: liked }
    });
  };

  deselectCat = () => {
    this.setState({
      showDetail: null
    });
  };

  likeCat = (cat) => {
    this.setState({
      likedCats: [...this.state.likedCats, cat]
    });
  };

  render() {
    return (
      <>
        {this.state.showDetail ? (
          <CatDetail
            cat={this.state.showDetail}
            deselectCat={this.deselectCat}
            likeCat={this.likeCat}
          />
        ) : (
          <Feed
            showLiked={this.state.showLiked}
            hideLikedList={this.hideLikedList}
            showLikedList={this.showLikedList}
            selectCat={this.selectCat}
            deselectCat={this.deselectCat}
            likedCats={this.state.likedCats}
          />
        )}
      </>
    );
  }
}

export default Home;
