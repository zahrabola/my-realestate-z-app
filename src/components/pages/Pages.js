import Header from "../headerfooter/Header";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../home/homefolder/Home";
import Footer from "../headerfooter/Footer";
import About from "../about/About";
import Services from "../services/Services";
import Blog from "../blog/Blog";
import Pricing from "../pricing/Pricing";
import Contact from "../contact/Contact";
import SignIn from "../signin/SignIn";


const Pages = () => {
    return (
        <>
          <Router>
          <Header />
     
          <Switch>
            <Route exact path="/" component={Home}/>
             <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/pricing" component={Pricing}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch> 
          <Footer />
          </Router>
         
        </>
    )
}

export default Pages;