import React from "react";
import { connect } from "react-redux";
import CatPreview from "./CatPreview";

const CatList = ({ cats, selectCat, deselectCat, likedCats }) => (
  <div id="cat-list">
    {cats.map((cat) => (
      <CatPreview
        key={cat.id}
        cat={cat}
        selectCat={selectCat}
        deselectCat={deselectCat}
        likedCats={likedCats}
      />
    ))}
  </div>
);

const mapStateToProps = ({ cats }) => ({
  cats
});

export default connect(mapStateToProps)(CatList);
