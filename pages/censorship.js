import Header from "../src/components/header";
import SubHeader from "../src/components/subheader";
import Footer from "../src/components/footer";

import CensorshipPage from "../src/components/staff/censorship";

export default function Upload() {
  return (
    <div>
      <Header />
      <SubHeader />

      <div className="mainContent">
        <CensorshipPage />
      </div>

      <Footer />
    </div>
  );
}
