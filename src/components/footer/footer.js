import React from "react";
import './footer.css'
import imageleft from '../../Logos/DEVLOGOTIPOWHITE.png'
import imageright from '../../Logos/DEVISOTIPOWHITE.png'


const footer = () => {
  return (
    <footer>
        <section>
            <img class="imageright" src={imageright}/>
        </section>
        <section>
            <img class="imageleft" src={imageleft}/>
        </section>  
    </footer>      
  );
};


export default footer;
