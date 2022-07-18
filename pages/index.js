import Header from "../src/components/header"
import SubHeader from "../src/components/subHeader";
import Footer from "../src/components/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <SubHeader path="/" />

      <h1>Hello</h1>
      
      <Footer />
    </div>
  )
}
