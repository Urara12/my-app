import React, { useState, useEffect } from "react";
import "./App.css";
import { Doughnut } from "react-chartjs-2";

function App() {
  const initialData = [0, 40, 0, 20];
  const [datas, setdatas] = useState([...initialData]);
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  let timer;

  const data = {
    labels: ["passed workout", "workout", "passed rest", "rest"],
    datasets: [
      {
        data: datas,
        backgroundColor: ["#FFCE56", "#FF6384", "#4db56a", "#36A2EB"],
        hoverBackgroundColor: ["#FFCE56", "#FF6384", "#4db56a", "#36A2EB"],
      },
    ],
  };

  const updateData = () => {
    let workout, passedWorkout, rest, passedRest;
    let newData;
    [passedWorkout, workout, passedRest, rest] = [...datas];

    if (workout > 0) {
      workout -= 1;
      passedWorkout += 1;
      newData = [passedWorkout, workout, passedRest, rest];
    } else if (rest > 0) {
      rest -= 1;
      passedRest += 1;
      console.log(rest);
      newData = [passedWorkout, workout, passedRest, rest];
      if (rest === 0) {
        newData = initialData;
      }
    } else {
      console.error("else");
      newData = initialData;
    }
    console.log("datas", datas);
    console.log("new", newData);
    setdatas(newData);
  };

  const startTimer = () => {
    console.log("!");
    timer = setInterval(updateData, 1000);
  };

  const endTimer = () => {
    console.warn("!!!!");
    clearInterval(timer);
  };

  const registerUser = () => {
    console.log("!");
    setUser(userName);
  };

  return (
    <div className="App">
      <h1>🏋️‍♂️Training Timer🏋️‍♀️</h1>
      <h2> Welcome {user}</h2>
      <div>
        username:
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input type="button" value="save" onClick={registerUser} />
      </div>

      <input type="button" value="start" onClick={startTimer} />
      <input type="button" value="stop" onClick={endTimer} />

      <Doughnut data={data} id="time" />
      {/* <Timer time={passedSecond} /> */}
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}

export default App;
