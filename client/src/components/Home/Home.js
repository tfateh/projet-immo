
import React , {useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousels  from '../Carousel/Carousels';
import Footer from '../Footers/Footers';
import  {getAllProducts}  from "../../js/actions/productsActions";
import { useDispatch } from "react-redux";
import Headers from "../Headers/Headers";


const Home=()=> {
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
    
  }, )
 return(
     <div Style = {{bgcolor:"rgb(202, 200, 200)"}}>
       <Headers/>
       <Carousels/>
       <Footer/>
     </div>

 )   

}
export default Home;