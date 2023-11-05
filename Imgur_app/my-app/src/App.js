import React from "react";
import Search from "./components/header_section/header.js";
import Logo from "./components/header_section/logo.js";
import Button from "./components/header_section/button.js";
import Explorer from "./components/explore_section/explorer.js";
import PostSection from "./components/post_section/postSection.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="imgur-app">
        {/* Header section */}
        <div className="header">
          <div className="left-side">
            <Logo />
            <Button name="New post" color="#1bb76e" />
          </div>

          <Search />

          <div className="right-side">
            <Button name="Go Ad-Free" color="#6432f9" />
            <Button name="Sign in" color="transparent" />
            <Button name="Sign up" color="#1bb76e" />
          </div>
        </div>
      </div>
      {/* Explore section */}
      <div className="explore">
        <Explorer />
      </div>
      {/* Post section */}
      <div>
        <PostSection />
      </div>
    </div>
  );
}

export default App;
