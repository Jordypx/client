import { Link } from "react-router-dom";


const SuccessPage = () => {
    return ( 
        <div className="confir">
            <h1>Confirmed!</h1>
            <Link to="/"><button className="btn">Back to home</button></Link>
        </div>
     );
}

 
export default SuccessPage;