import { useState, useEffect } from "react";
import { Select, Modal } from "@mantine/core";

import RankItem from "./rankItem";
import { getMonths } from "../../functions/ranking";

export default function RankComponent() {
  const [fetched, setFetched] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  //Ranking data
  const [allRankings, setAllRankings] = useState({});

  const [selectedMonth, setSelectedMonth] = useState("");
  const [months, setMonths] = useState([
    { value: "05-2022", label: "05-2022" },
  ]);

  useEffect(() => {
    const fetchMonths = async () => {
      let result = await getMonths();
      console.log(result);

      let completeRankings = {};
      let completeMonths = [];
      for (let rankOfMonth of result) {
        if (rankOfMonth.length > 0) {
          //save the month name
          let currentMonthName = rankOfMonth[rankOfMonth.length - 1].month;
          if (currentMonthName !== "overall") {
            completeMonths.push(currentMonthName);
          }

          //get fitst 5 elements
          let firstFiveRank = [];
          for (const [i, value] of rankOfMonth.entries()) {
            if (i < 5) {
              firstFiveRank.push(value);
            }
          }
          //save object
          completeRankings[currentMonthName] = firstFiveRank;
        }
      }

      //sort with the month name
      completeMonths.sort();

      // //Put into select list
      setSelectedMonth(completeMonths[completeMonths.length - 1]);
      setMonths(completeMonths);
      setAllRankings(completeRankings);
      setFetched(true);
    };

    if (!fetched) {
      fetchMonths();
    }
  });

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div
          className="uw-blockhead"
          style={{ width: "50%", display: "inline-block" }}
        >
          Monthly Ranking
        </div>
        <h2
          className="uw-blockhead"
          style={{ width: "50%", display: "inline-block" }}
        >
          Overall Ranking
        </h2>
      </div>
      <div style={{ width: "50%" }}>
        <Select
          style={{ paddingLeft: 50, paddingRight: 50 }}
          position="center"
          value={selectedMonth}
          onChange={setSelectedMonth}
          data={months}
        />
      </div>

      <div
        style={{
          display: "inline-block",
          width: "50%",
          paddingLeft: 20,
          paddingRight: 20,
          verticalAlign: "top",
        }}
      >
        <table>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Student Email</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            {allRankings[selectedMonth] !== undefined ? (
              [...allRankings[selectedMonth]].map((item, i) => {
                return <RankItem data={item} key={i} sequence={i} />;
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>

      <div
        style={{
          display: "inline-block",
          width: "50%",
          paddingLeft: 20,
          paddingRight: 20,
          verticalAlign: "top",
        }}
      >
        <table>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Student Email</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            {allRankings["overall"] !== undefined ? (
              [...allRankings["overall"]].map((item, i) => {
                return <RankItem data={item} key={i} sequence={i} />;
              })
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>

      <div className="popup">
        <a onClick={() => {setShowPopup(true)}}>Click me</a> to check the rewards of top 3 students
        <span className="popuptext" id="myPopup">
          you have got the rewards! congrad!
        </span>
      </div>

      <Modal
        opened={showPopup}
        onClose={() => setShowPopup(false)}
        title="Reward: 

        First place student can get $1000 book coupon.
        Second place student can get $500 book coupon.
        Third place student can get $250 book coupon.
        
        Please contact the staff to get the reward. The phone number is 2707 4669 or send us a email uowchk-slss@uow.edu.hk"
      >
        
      </Modal>
    </>
  );
}
