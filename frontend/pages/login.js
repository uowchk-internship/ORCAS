import Header from "../src/components/header";
import SubHeader from "../src/components/subHeaderStudent";
import Footer from "../src/components/footer";

import LoginPage from "../src/components/staff/login";
import BackButton from "../src/components/backButton";

export default function Rank() {
  return (
    <div>
      <Header />
      <SubHeader path="/login" />
      
      <div className="mainContent">
      <BackButton />

        <section className="page-form grid-container">
          <LoginPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}

