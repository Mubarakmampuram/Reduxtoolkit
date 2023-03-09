import React from "react";
import MediaCard from "./MediaCard";

function MenuList({ data }) {
  return (
    <div>
      <MediaCard data={data}></MediaCard>
    </div>
  );
}

export default MenuList;
