import React from "react";
import likeSVG from "../assets/Vector.svg";
import likedSVG from "../assets/LikedVector.svg";

class CatPreview extends React.Component {
  state = {
    likedCats: this.props.likedCats
  };

  componentDidMount() {
    this.checkIfLiked();
  }

  checkIfLiked = () => {
    if (
      this.props.likedCats &&
      this.props.likedCats.some((cat) => cat.id === this.props.cat.id)
    ) {
      this.flagAsLiked();
    } else {
      return;
    }
  };

  flagAsLiked = () => {
    this.setState({ flagged: "true" }, () => {});
  };

  render() {
    const { cat, selectCat } = this.props;

    return (
      <div
        onClick={() => selectCat(cat, this.props.isLiked)}
        className="previewBox"
        style={{ backgroundColor: `${cat.background_color}` }}
      >
        <div className="iconHolder">
          {this.props.isLiked === "true" || this.state.flagged === "true" ? (
            <img className="icon" src={likedSVG} alt="like icon"></img>
          ) : (
            <img className="icon" src={likeSVG} alt="like icon"></img>
          )}
        </div>
        <img className="previewImg" src={cat.image_url} alt="cat" />
        <p className="previewName">{cat.name}</p>
        <p className="ownerDetails">
          Owned by <br />
          {cat.owner.name}
        </p>
      </div>
    );
  }
}

export default CatPreview;
