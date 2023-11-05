import React from "react";
import FlexContainer from "./flexContainer";

export default function postSection() {
  return (
    <div>
      <FlexContainer
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <div id="tagContainer">
          <div>
            <FlexContainer
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <h3 class="tagLines">MOST VIRAL</h3>
              <h3 class="tagLines">NEWEST+</h3>
            </FlexContainer>
          </div>
          <div id="imgContainer">
            <FlexContainer
              direction="col"
              alignItems="center"
              justifyContent="space-between"
            >
              <div class="images"></div>
              <div class="images1"></div>
              <div class="images2"></div>
              <div class="images3"></div>
            </FlexContainer>
          </div>
          <div id="imgContainer">
            <FlexContainer
              direction="col"
              alignItems="center"
              justifyContent="space-between"
            >
              <div class="images4"></div>
              <div class="images5"></div>
              <div class="images6"></div>
              <div class="images7"></div>
            </FlexContainer>
          </div>
          <div id="imgContainer">
            <FlexContainer
              direction="col"
              alignItems="center"
              justifyContent="space-between"
            >
              <div class="images8"></div>
              <div class="images9"></div>
              <div class="images10"></div>
              <div class="images11"></div>
            </FlexContainer>
          </div>
        </div>
      </FlexContainer>
    </div>
  );
}
