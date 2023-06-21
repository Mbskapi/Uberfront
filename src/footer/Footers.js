import React from "react";

const today =new Date();

const Footers = () => {
    return(
        <footer>
           <p>CopyWeite &copy; {today.getFullYear()} </p> 
        </footer>
     
    )
}
export default Footers;   