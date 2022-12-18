import React, { useEffect, useState } from 'react';
import './App.css';
import img1 from "./img/audi.jpg"
import img2 from "./img/carinblack.jpg"
import img3 from "./img/lambo.jpg";
import img4 from "./img/rangerover.jpg";
import img5 from "./img/ferrari.jpg";


function App() {

  const [arr, setArr] = useState([]);
  const [check, setCheck] = useState([]);
  const [massage, setMassage] = useState("");
  const [clicked, setClicked] = useState(false);
  const [twoClicked, setTwoClicked] = useState(false);
  const [color, setColor] = useState("");
  // const [disable, setdisable] = useState(false);

  useEffect(() => {
    const img = [
      { link: `${img1}`, title: "img1" },
      { link: `${img2}`, title: "img2" },
      { link: `${img3}`, title: "img3" },
      { link: `${img4}`, title: "img4" },
      { link: `${img5}`, title: "img5" },
    ];
    img.push(img[Math.floor(Math.random() * 5)]);
    img.sort(() => 0.5 - Math.random());
    setArr(img)
    
  }, []);


  useEffect(() => {
    if (check.length == 2) {
      setTwoClicked(true);
      // setdisable(true);
    }
  }, [check])
console.log(check)
  const whenClicked = (e,i) => {
    setClicked(true);
    
    setCheck([...check, {data: e.target.title, index:i}])
  }
  
  
  const verifyClicked = () => {
   
    if (check[0].data == check[1].data && check[0].index!=check[1].index) {
      setColor("green")
      setMassage("You are a human. Congratulations!");
    } else {
      setColor("red")
      setMassage(
        "We can't verify you as a human. You selected the non-identical tiles."
      );
    }
    setTwoClicked(false);
    setCheck([]);
  }

  return (
    <div>
      {/* Heading */}

      <h3 className="massage">
        Please click on the identical tiles to verify that you are not a robot
      </h3>

      {/* Images */}

      <div className="App" >
        {arr.map((list, i) => {
          return (
            <div key={i}>
              <img
                src={list.link}
                onClick={(e)=>whenClicked(e,i)}
                title={list.title}
                width="150px"
                height="100px"
                data-ns-test={list.title}
              />
            </div>
          );
        })}
      </div>

      {/* Buttons */}

      <div id="buttons">
        {clicked ? (
          <button
            className="button"
            id="reset"
            onClick={() => window.location.reload()}
          >
            Reset
          </button>
        ) : null}
        {twoClicked ? (
          <button className="button" id="btn" onClick={verifyClicked}>
            Verify
          </button>
        ) : null}
      </div>

      {/* Massages */}

      <p id="para" className="massage" style={{color:`${color}`}}>
        {massage}
      </p>

      {/* Fonts */}

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
      </style>
    </div>
  );
}

export default App;
