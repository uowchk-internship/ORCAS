import { useState, useEffect } from 'react'
import { Select } from '@mantine/core';

import RankItem from './rankItem'
import { getMonths } from '../../functions/ranking'

export default function RankComponent() {
  const [fetched, setFetched] = useState(false)

  const [selectedMonth, setSelectedMonth] = useState("")
  const [months, setMonths] = useState([
    { value: '05-2022', label: '05-2022' }
  ])

  useEffect(() => {
    const fetchMonths = async () => {
      let result = await getMonths();

      //Put into select list
      let items = []
      for (let item of result) {
        items.push({ value: item, label: item })
      }

      setSelectedMonth(result[result.length - 1])
      setMonths(items)
      setFetched(true)

    }

    if (!fetched) {
      fetchMonths()
    }
  })

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div className="uw-blockhead" style={{ width: "50%", display: "inline-block" }}>
          Monthly Ranking
        </div>
        <h2 className="uw-blockhead" style={{ width: "50%", display: "inline-block" }}>
          Overall Ranking
        </h2>
      </div>
      <div style={{ width: "50%" }}>
        <Select
          style={{ paddingLeft: 50, paddingRight: 50 }}
          position="center"
          value={selectedMonth}
          data={months}
        />

      </div>

      <div style={{ display: "inline-block", width: "50%", paddingLeft: 20, paddingRight: 20 }} >
        <table>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Student Name</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
          </tbody>
        </table>
      </div>

      <div style={{ display: "inline-block", width: "50%", paddingLeft: 20, paddingRight: 20 }} >
        <table>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Student Name</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
            <RankItem />
          </tbody>
        </table>
      </div>


      <div className="popup">
        Click me to check the rewards of top 3 students
        <span className="popuptext" id="myPopup">
          you have got the rewards! congrad!
        </span>
      </div>
    </>
  );
}
