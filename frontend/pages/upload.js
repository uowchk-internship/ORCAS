import Header from "../src/components/header";
import SubHeader from "../src/components/subHeaderStudent";
import Footer from "../src/components/footer";

import UploadPage from "../src/components/student/upload";
import BackButton from "../src/components/backButton";

export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader path="/upload" />

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
