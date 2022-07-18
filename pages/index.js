import Header from "../src/components/header"
import SubHeader from "../src/components/subHeader";
import Footer from "../src/components/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <SubHeader path="/" />

      <div className="mainContent">
        <section className="page-form grid-container">

          <h1>Hello</h1>
        </section>
      </div>


      <Footer />
    </div>
  )
}
