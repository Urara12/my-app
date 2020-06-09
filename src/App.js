import React, { useState, useEffect } from "react";
import "./App.css";
import { Doughnut } from "react-chartjs-2";
// import Timer from "./components/Timer";

function App() {
  const initialData = [0, 10, 0, 20];
  const [datas, setdatas] = useState([0, 0, 0, 0]);
  // const [passedSecond, setPassedSecond] = useState(0);
  const [power, setPower] = useState(false);
  let startTime;
  let timer;

  useEffect(() => {
    console.log(power);
    timer = setInterval(() => {
      if (power) {
        updateData();
      } else {
        console.log("!");
        clearInterval(timer);
      }
    }, 3000);
  }, [power]);

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
      workout -= 10;
      passedWorkout += 10;
      newData = [passedWorkout, workout, passedRest, rest];
    } else if (rest > 0) {
      rest -= 10;
      passedRest += 10;
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
    setPower(true);
    // startTime = new Date();
    // timer = setInterval(() => {
    //   // const now = new Date();
    //   // console.log("start", startTime);
    //   // console.log("now", now);

    //   // const time = Math.floor((now - startTime) / 1000);
    //   // console.warn(time);
    //   // setPassedSecond(time);
    //   if (power) {
    //     updateData();
    //   } else {
    //     clearInterval(timer);
    //   }
    // }, 3000);
  };
  // console.log("passed", passedSecond);
  const powerOff = () => {
    console.warn("!!!!");
    setPower(false);
  };

  return (
    <div className="App">
      <h1>Title</h1>
      <div>
        <input type="text" value="your name" />
        <input type="button" value="save" />
      </div>

      <input type="button" value="▶️" onClick={startTimer} />
      <input type="button" value="⏸" onClick={powerOff} />

      <Doughnut data={data} id="time" />
      {/* <Timer time={passedSecond} /> */}
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}

export default App;

//
// chart.js動かすver
// const updateData = () => {
//   let workout, passedWorkout, rest, passedRest;
//   let newData;
//   [passedWorkout, workout, passedRest, rest] = [...datas];

//   // newDtas[0] += 10;
//   // newDtas[1] -= 10;
//   // console.log("//////////////////////");
//   // console.log(newDtas);
//   // // datas = newDtas;
//   // setdatas(newDtas);
//   if (workout > 0) {
//     workout -= 10;
//     passedWorkout += 10;
//     newData = [passedWorkout, workout, passedRest, rest];
//   } else if (rest > 0) {
//     rest -= 10;
//     passedRest += 10;
//     newData = [passedWorkout, workout, passedRest, rest];
//   } else {
//     newData = initialData;
//   }
//   console.log("datas", datas);
//   console.log("new", newData);
//   setdatas(newData);
// };
// // setInterval(updateData, 3000);
// // updateData();
