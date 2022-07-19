import Header from "../../src/components/header";
import SubHeader from "../../src/components/subHeaderStaff";
import Footer from "../../src/components/footer";

import HomepageComponent from "../../src/components/staff/homepage";
import BackButton from "../../src/components/backButton";


export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader path="/staff" />

      <div className="mainContent">
        <BackButton />
        <section className="page-form grid-container">

          <HomepageComponent />
        </section>
      </div>

      <Footer />
    </div>
  );
}
