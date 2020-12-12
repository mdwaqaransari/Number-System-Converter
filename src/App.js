import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [fromBase, setFromBase] = useState(2);
  const [toBase, setToBase] = useState(10);
  const [answer, setAnswer] = useState("");
  // const [solution, setSolution] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here" + typeof toBase + typeof fromBase);
    if (toBase === 10) {
      setAnswer(multiplyTechnique(number, fromBase));
    } else if (fromBase === 10) {
      setAnswer(divisionTechnique(number, toBase));
    } else {
      let tempAns = multiplyTechnique(number, fromBase);
      setAnswer(divisionTechnique(tempAns, toBase));
    }
  };

  function multiplyTechnique(num, frombase) {
    let ans = 0;
    let exponent = 0;
    // let sol = [];
    for (let i = num.length - 1; i >= 0; i--) {
      ans += getNum(num[i]) * Math.pow(frombase, exponent);
      exponent++;
    }
    return ans;
  }

  function divisionTechnique(num, tobase) {
    let ans = [];
    let remainder = 0;
    while (num > 0) {
      remainder = num % tobase;
      // console.log(remainder);
      ans.push(checkNum(remainder));
      // console.log(ans);
      num = Math.floor(num / tobase);
    }
    console.log(ans);
    return ans.reverse().join("");
  }

  function checkNum(num) {
    if (num < 10) return num;
    else if (num === 10) return "A";
    else if (num === 11) return "B";
    else if (num === 12) return "C";
    else if (num === 13) return "D";
    else if (num === 14) return "E";
    else if (num === 15) return "F";
  }

  function getNum(num) {
    if (num < 10) return num;
    else if (num === "A") return 10;
    else if (num === "B") return 11;
    else if (num === "C") return 12;
    else if (num === "D") return 13;
    else if (num === "E") return 14;
    else if (num === "F") return 15;
  }

  return (
    <section>
      <div className="navbar text-center">
        <h1>Number System Converter</h1>
      </div>
      <div className="container">
        <div className="box text-center">
          <h2>Base Converter</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="number form-control"
                name="number"
                placeholder="Enter Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fromBase">Base From :</label>
              <select
                name="fromBase"
                className="form-control"
                id="fromBase"
                value={fromBase}
                onChange={(e) => setFromBase(parseInt(e.target.value))}
              >
                <option value="2">2</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="16">16</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="toBase">Base To :</label>
              <select
                name="toBase"
                className="form-control"
                id="toBase"
                value={toBase}
                onChange={(e) => setToBase(parseInt(e.target.value))}
              >
                <option value="2">2</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="16">16</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-block">
                Convert
              </button>
            </div>
            <div className="form-group">
              <label htmlFor="answer">Answer :</label>
              <textarea
                name="answer"
                className="form-control"
                id="answer"
                value={answer}
                readOnly
              ></textarea>
            </div>
            {/* <div className="form-group">
              <label htmlFor="solution">Solution :</label>
              <textarea
                name="solution"
                id="solution"
                className="form-control"
                readOnly
              ></textarea>
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
