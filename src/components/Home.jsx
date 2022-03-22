import React from "react";
// import Products from "./Products";

export default function Home({user, title, subtitle, enterKey, guestUser, inputRef}) {
  return (
    <div>
      <form>
        <div className="title">
          <h2>{title}</h2>
          <h5>{subtitle}</h5>
        </div>

        <input
          type="text"
          placeholder="Enter your name"
          ref={inputRef}
          label="name"
          onKeyPress={enterKey}
        />
        <div className="access-buttons">
          <h4 className="option">OR</h4>
          <div className="guest" onClick={guestUser}>
            Use as guest
          </div>
        </div>
      </form>
      
    </div>
  );
}
