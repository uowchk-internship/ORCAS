import Header from "../src/components/header";
import SubHeader from "../src/components/subHeader";
import Footer from "../src/components/footer";

import TeacherPage from "../src/components/staff/teacher";
import BackButton from "../src/components/backButton";


export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader path="/teacher" />

      <div className="mainContent">
        <BackButton />
        <section className="page-form grid-container">

          <TeacherPage />
        </section>
      </div>

      <Footer />
    </div>
  );
}
