import React from 'react';
import { Link } from 'react-router-dom';


import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row"><ul><li><a href="#"><i className="fa fa-facebook"></i></a></li>

          <li> <a href="#"><i className="fa fa-instagram"></i></a></li>

          <li><a href="https://wa.me/0606861955"><i className="fa fa-whatsapp"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li></ul>
        </div>

        <div className="row">
          <ul>
            <li><Link to="/contact">Contact us</Link></li>

            <li><Link to="/about">About us </Link></li>
            <li><Link to="/">Home</Link></li>
            <li><a href="https://wa.me/0606861955">Whatssap</a></li>
          </ul>
        </div>
        <center>
        <div>
                Copyright © 2023 <i>Laayoune_Cake</i>   
        </div>
        </center>

      </div>
    </footer>
  );
}

export default Footer;
