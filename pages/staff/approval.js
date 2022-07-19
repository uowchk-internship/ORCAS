import Header from "../../src/components/header";
import SubHeader from "../../src/components/subHeaderStaff";
import Footer from "../../src/components/footer";

import CensorshipPage from "../../src/components/staff/approval";
import BackButton from "../../src/components/backButton";

export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader path="/staff/approval" />

      <div className="mainContent">
        <BackButton />

        <section className="page-form grid-container">
          <CensorshipPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}
