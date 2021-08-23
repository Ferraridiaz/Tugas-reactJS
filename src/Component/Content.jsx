import React from "react";
import gambar1 from '../img/image 1.png';
import gambar2 from '../img/image 6.png';
import gambar3 from '../img/image 2.png';
import mainContent from "./MainContent";

class Content extends React.Component {
    render() {
        return (
            <>
            <mainContent
            image={gambar1}
            title="How to be more productive?"
            date="19 may 2021, 3 comments"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .."
           /> 
           <mainContent
            image={gambar2}
            title="Do these every single day and you will become a more creative person"
            date="19 may 2021, 3 comments"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ..."
          />
           <mainContent
            image={gambar3}
            title="Destinations you want to visit"
            date="19 may 2021, 3 comments"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .."
          />
          </>
        )
    }
}

export default Content