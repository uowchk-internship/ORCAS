import Header from "../src/components/header";
import SubHeader from "../src/components/subHeader";
import Footer from "../src/components/footer";

import RankPage from "../src/components/student/rank";

export default function Rank() {
  return (
    <div>
      <Header />
      <SubHeader path="/rank" />

      <div className="mainContent">
        <RankPage />
      </div>

      <Footer />
    </div>
  );
}
