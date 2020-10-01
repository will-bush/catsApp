import React from "react";
import likeSVG from "../assets/Vector.svg";
import likedSVG from "../assets/Liked.svg";
import exit from "../assets/exit.svg";
import exit2 from "../assets/exit2.svg";

class CatDetail extends React.Component {
  state = {
    isLiked: false,
    styling: "likeContainer"
  };

  handleLike = (cat) => {
    if (this.state.isLiked || cat.isLiked === "true") {
      console.log("Cat is already liked.");
    } else {
      this.props.likeCat(cat);
      this.setState({
        isLiked: true,
        styling: "likedContainer"
      });
    }
  };

  render() {
    const { cat, deselectCat } = this.props;

    return (
      <div
        className="detailContainer"
        id="cat-detail"
        style={{ backgroundColor: `${cat.background_color}` }}
      >
        <img className="detailImage" src={cat.image_url} alt="cat"></img>
        <div className="exit" onClick={deselectCat}>
          <img className="exitIcon" src={exit} alt="like icon" />
          <img className="exitIcon" src={exit2} alt="like icon" />
        </div>
        <div
          className={cat.isLiked ? "likedContainer" : this.state.styling}
          onClick={() => this.handleLike(cat)}
        >
          {this.state.isLiked || cat.isLiked === "true" ? (
            <img className="likeIcon" src={likedSVG} alt="like icon"></img>
          ) : (
            <img className="likeIcon" src={likeSVG} alt="like icon"></img>
          )}
          {this.state.isLiked || cat.isLiked === "true" ? (
            <p className="likedText">Liked</p>
          ) : (
            <p className="likeText">Like</p>
          )}
        </div>
        <p className="detailName">{cat.name}</p>
        <p className="detailAge">{cat.age} years old</p>
        <p className="detailDescription">{cat.description}</p>
        <div className="detailedOwnerDetails">
          <p className="ownedByText">Owned by {cat.owner.name}</p>
          <div className="detailsColumns">
            <p className="detailsTitle">Phone</p>
            <p className="detailsValue">{cat.owner.phone}</p>
          </div>
          <div className="detailsColumns">
            <p className="detailsTitle">Email</p>
            <p className="detailsValue">{cat.owner.email}</p>
          </div>
          <div className="detailsColumns">
            <p className="detailsTitle">Location</p>
            <p className="detailsValue">{cat.owner.address}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CatDetail;
