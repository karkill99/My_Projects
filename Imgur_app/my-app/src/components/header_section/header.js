import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

export default function Search() {
  return (
    <div>
      <input />
      <FontAwesomeIcon
        className="search-icon"
        icon="fa-solid fa-magnifying-glass"
        style={{ color: "#ffffff" }}
      />
    </div>
  );
}
