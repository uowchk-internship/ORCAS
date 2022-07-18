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
        <CensorshipPage />
      </div>

      <Footer />
    </div>
  );
}
