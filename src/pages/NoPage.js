import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
// import myImage from '../images/letMeBeClear.webp'; // Use import for the image


export default function NoPage() {
  return(
    <>
      <Header/>
      {/* <img src={myImage} alt="peaceOut" /> */}
      <p>It seems as though you have come to a page that does not exist.</p>
      <p>Please roll this d20 to determine your fate</p>
      <Footer/>
    </>
  )
}