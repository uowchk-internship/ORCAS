export default function RankComponent() {
  return (
    <>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
              <table style={{ width: "100%" }}>
                <tbody>
                <tr>
                    <td colSpan="3">
                      <h2>Monthly Ranking</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>Rank</td>
                    <td>Student Name</td>
                    <td>Quantity</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>1</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>2</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>3</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>4</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>5</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <h2>OverAll Ranking</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>Rank</td>
                    <td>Student Name</td>
                    <td>Quantity</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>1</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>2</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>3</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>4</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td style={{ color: "#ED0A00" }}>5</td>
                    <td>ivan</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="popup">
        Click me to check the rewards of top 3 students
        <span className="popuptext" id="myPopup">
          you have got the rewards! congrad!
        </span>
      </div>
    </>
  );
}
