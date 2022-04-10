
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousels  from '../Carousel/Carousels';
import Footer from '../Footers/Footers';
import SignIn from '../SignIn';
import SignUp from '../SignUp/SignUp';




function Home () {
 return(
     <div Style = {{bgcolor:"rgb(202, 200, 200)"}}>
       <Carousels/>,
       <SignIn/>,
       <SignUp/>,
       <Footer/>
       
     </div>

 )   

}
export default Home;