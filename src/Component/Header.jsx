import React from "react";

class Header extends React.Component {

render() {
    return (
      <header className="flex items-center p-6 font-mont">
        <div className="w-8">
          <hr className="border-2 border-black m-1" />
          <hr className="border-2 border-black m-1" />
        </div>
        <p className="flex-grow font-bold text-center text-9xl">BlogX</p>
      </header>
    );
  }
}

export default Header