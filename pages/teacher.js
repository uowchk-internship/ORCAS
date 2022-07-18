import Header from "../src/components/header";
import SubHeader from "../src/components/subHeader";
import Footer from "../src/components/footer";

import TeacherPage from "../src/components/staff/teacher";

export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader />

      <div className="mainContent">
        <TeacherPage />
      </div>

      <Footer />
    </div>
  );
}
