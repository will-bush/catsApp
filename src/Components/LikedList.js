import React from "react";
import CatPreview from "./CatPreview";

class LikedList extends React.Component {
  render() {
    const { likedCats, selectCat, deselectCat } = this.props;

    return (
      <div id="liked-list">
        {likedCats && likedCats.length >= 1 ? (
          likedCats.map((cat) => (
            <CatPreview
              key={cat.id}
              cat={cat}
              selectCat={selectCat}
              deselectCat={deselectCat}
              isLiked="true"
            />
          ))
        ) : (
          <p className="noCatsLiked">
            You haven't liked any cats, you monster.
          </p>
        )}
      </div>
    );
  }
}

export default LikedList;
