import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [fromBase, setFromBase] = useState(2);
  const [toBase, setToBase] = useState(10);
  const [answer, setAnswer] = useState("");
  const [alert, setAlert] = useState("form-control");
  // const [solution, setSolution] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toBase === 10) {
      setAnswer(multiplyTechnique(number, fromBase));
    } else if (fromBase === 10) {
      setAnswer(divisionTechnique(number, toBase));
    } else {
      let tempAns = multiplyTechnique(number, fromBase);
      if(tempAns === "Invalid Number"){
        setAnswer("Invalid Number");
      }else{
        setAnswer(divisionTechnique(tempAns, toBase));
      }
    }
  };

  function multiplyTechnique(num, frombase) {
    let ans = 0;
    let exponent = 0;
    // let sol = [];
    for (let i = num.length - 1; i >= 0; i--) {
      if(getNum(num[i])>=fromBase || num[i]<0){
        setAlert("form-control alert alert-danger");
        return "Invalid Number";
      }
      ans += getNum(num[i]) * Math.pow(frombase, exponent);
      exponent++;
    }
    setAlert("form-control ");
    return ans;
  }

  function divisionTechnique(num, tobase) {
    let ans = [];
    let remainder = 0;
    while (num > 0) {
      remainder = num % tobase;
      if(remainder>=tobase || remainder<0){
        setAlert("form-control alert alert-danger");
        return "Invalid Number";
      }
      ans.push(checkNum(remainder));
      num = Math.floor(num / tobase);
    }
    setAlert("form-control ");
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
    else return 0;
  }

  function getNum(num) {
    if (num < 10) return num;
    else if (num === "A") return 10;
    else if (num === "B") return 11;
    else if (num === "C") return 12;
    else if (num === "D") return 13;
    else if (num === "E") return 14;
    else if (num === "F") return 15;
    else return 0;
  }

  return (
    <section>
      <div className="navbar text-center">
        <h1>Number System Converter</h1>
      </div>
      <div className="container">
        <div className="box text-center">
          <h2>Base Converter</h2>
          <h3>Made By - Navjyot Kumar</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className={alert}
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
                <option value="2">2(Binary)</option>
                <option value="8">8(Octal)</option>
                <option value="10">10(Decimal)</option>
                <option value="16">16(Hexadecimal)</option>
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
                <option value="2">2(Binary)</option>
                <option value="8">8(Octal)</option>
                <option value="10">10(Decimal)</option>
                <option value="16">16(Hexadecimal)</option>
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
