import Header from "../src/components/header";
import SubHeader from "../src/components/subHeader";
import Footer from "../src/components/footer";

import CensorshipPage from "../src/components/staff/censorship";
import BackButton from "../src/components/backButton";

export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader path="/censorship" />

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