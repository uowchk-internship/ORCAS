import Header from "../../src/components/header";
import SubHeader from "../../src/components/subHeaderStaff";
import Footer from "../../src/components/footer";

import UploadPage from "../../src/components/staff/upload";
import BackButton from "../../src/components/backButton";

export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader path="/staff/upload" />

      <div className="mainContent">
        <BackButton />

        <section className="page-form grid-container">
          <UploadPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}
