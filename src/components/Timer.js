import React from "react";
import style from "./Timer.css";

function SecondHand(props) {
  const getSecondDeg = (s) => {
    return {
      transform: `rotate(${s * 6 - 90}deg)`,
    };
  };

  return (
    <div className={style.container} style={getSecondDeg(props.time)}>
      <div className={style.hand}></div>
    </div>
  );
}

export default SecondHand;

// import React, { useState, useEffect } from "react";
// import { Doughnut } from "react-chartjs-2";

// export default function Timer() {
//   const initialData = [0, 40, 0, 20];
//   const [datas, setdatas] = useState(initialData);
//   const updateData = () => {
//     let workout, passedWorkout, rest, passedRest;
//     let newData;
//     [passedWorkout, workout, passedRest, rest] = [...datas];
//     if (workout > 0) {
//       workout -= 10;
//       passedWorkout += 10;
//       newData = [passedWorkout, workout, passedRest, rest];
//     } else if (rest > 0) {
//       rest -= 10;
//       passedRest += 10;
//       newData = [passedWorkout, workout, passedRest, rest];
//     } else {
//       newData = initialData;
//     }
//     console.log("datas", datas);
//     console.log("new", newData);
//     setdatas(newData);
//   };
//   //   setInterval(updateData, 3000);

//   const data = {
//     labels: ["passed workout", "workout", "passed rest", "rest"],
//     datasets: [
//       {
//         data: datas,
//         backgroundColor: ["#FFCE56", "#FF6384", "#4db56a", "#36A2EB"],
//         hoverBackgroundColor: ["#FFCE56", "#FF6384", "#4db56a", "#36A2EB"],
//       },
//     ],
//   };
//   return <Doughnut data={data} id="time" />;
// }
