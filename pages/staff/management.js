import Header from "../../src/components/header";
import SubHeader from "../../src/components/subHeaderStaff";
import Footer from "../../src/components/footer";

import ManagementPage from "../../src/components/staff/management";
import BackButton from "../../src/components/backButton";

export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader path="/staff/management" />

      <div className="mainContent">
        <BackButton />

        <section className="page-form grid-container">
          <ManagementPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}
