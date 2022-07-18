import Header from "../src/components/header";
import SubHeader from "../src/components/subHeader";
import Footer from "../src/components/footer";

import RankPage from "../src/components/student/rank";
import BackButton from "../src/components/backButton";

export default function Search() {
  return (
    <div>
      <Header />
      <SubHeader path="/search" />

      <div className="mainContent">
        <BackButton />
        <section className="page-form grid-container">
          <RankPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}
