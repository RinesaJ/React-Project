import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import webIcon from "./icon/web.png";
import ruler from "./icon/ruler.png";
import globe from "./icon/globe.png";
import medal from "./icon/medal.png";
import explore from "./icon/explore.png";
import megaphone from "./icon/megaphone.png";
import offer from "./icon/offer.png";
import text from "./icon/text.png";
import idea from "./icon/idea.png";




function App() {
  const [lists] = useState([
    { icon: <img src={webIcon} alt="Web Icon" />, title: "The TLD", text: `Does the domain extension match the language of the domain name?` },
    { icon:  <img src={ruler} alt="Ruler Icon" />, title: 'Domain Length', text: `Is the domain short enough to remember?` },
    { icon:  <img src={globe} alt="Web Icon" />, title: 'Language', text: `How complex is the actual domain name?` },
    { icon:  <img src={medal} alt="Web Icon" />, title: 'International recognition', text: `Can the domain name be used on the international scale?` },
    { icon:  <img src={explore} alt="Web Icon" />, title: 'Search engine', text: `Does the domain follow search engine guidelines?` },
    { icon:  <img src={megaphone} alt="Web Icon" />, title: 'Advertising Potential', text: `Could the domain be used for advertising campaingns?` },
    { icon:  <img src={offer} alt="Web Icon" />, title: 'Sales Opportunities', text: `Can the domain name be used on an international scale?` },
    { icon:  <img src={text} alt="Web Icon" />, title: 'Typo susceptibility', text: `How high is the risk of mistyping the domain name?` },
    { icon:  <img src={idea} alt="Web Icon" />, title: 'Bussines Potential', text: `Can the domain be used as your company address?` }
  ]);

  return (
    <div>
      <section>
        <div className="container">
        <div className="lists">
          {lists.map((item, i) => (
            <div key={i} className="list"> 
              <div className="icon">
                {item.icon}
                </div>
              <div className="title">
                <h4>{item.title}</h4></div>
                <div className="text">
                <p>{item.text}</p></div>
                </div>
          ))}
      </div>
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;