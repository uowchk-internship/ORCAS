import Header from "../src/components/header";
import SubHeader from "../src/components/subHeader";
import Footer from "../src/components/footer";

import CensorshipPage from "../src/components/staff/censorship";

export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader path="/censorship" />

      <div className="mainContent">
        <section class="page-content grid-container uw-text-block">
          <span id="d.en.105001"></span>
          <div class="grid-x grid-padding-x">
            <div class="cell large-auto">
              <p style="text-align: right">
                <a href="https://www.uowchk.edu.hk/current-students/student-learning-support-system/">Back</a>
              </p>
            </div>
          </div>
        </section>
        <section className="page-form grid-container">
          <CensorshipPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}
