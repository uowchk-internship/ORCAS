import Header from "../src/components/header"
import SubHeader from "../src/components/subHeaderStudent";
import Footer from "../src/components/footer"

import HomeComponent from "../src/components/student/homepage"

export default function Home() {
  return (
    <div>
      <Header />
      <SubHeader path="/" />

      <div className="mainContent">
          <HomeComponent />
      </div>


      <Footer />
    </div>
  )
}
