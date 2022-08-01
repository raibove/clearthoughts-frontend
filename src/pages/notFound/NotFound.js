import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./NotFound.css";
import oops from "../../assets/oops.png"

const NotFound = ()=>{
    return(
        <div>
            <Header/>
            <div className="oops-container">
                <img src={oops} alt="Oops" className="oops"/>
                <h2 className="oops-heading">The URL you are looking for is not found.</h2>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;