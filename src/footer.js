import './footer.css';

function Footer() {
    return (
      /* "_id": "new9",
      "name": "pic49.jpg",
      "lat": "1056",
      "lng": "600",
      "location": "Teyvat"
  }*/
  //images stored locally (?), but have id, names, and store their lat/longitude locally
    <div className="footer">Created by <div className= "author"><a className = "footerlink" href="https://www.google.com">Lanney Wang.</a></div>
    <br />
    Inspired by <a className = "footerlink" href="https://www.geoguessr.com">geoguessr</a>
    </div>
    );
  }

export default Footer;
