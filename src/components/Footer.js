import React from "react";

function Footer({title,copy}){
   
    return(
        <div className="footer">
            
           <h3>{title}</h3> 
            <h4>{copy}</h4>
            
        </div>
    )
}




Footer.defaultProps ={
    title:'Contact-Us',
    copy:'Copywrites',
}
export default Footer;