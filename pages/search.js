import Header from "../src/components/header";
import SubHeader from "../src/components/subHeaderStudent";
import Footer from "../src/components/footer";

import SearchPage from "../src/components/student/search";
import BackButton from "../src/components/backButton";

export default function Search() {
  return (
    <div>
      <Header />
      <SubHeader path="/search" />

      <div className="mainContent">
        <BackButton />
        <section className="page-form grid-container">
          <SearchPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}
