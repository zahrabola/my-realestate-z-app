import Header from "../headerfooter/Header";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../home/homefolder/Home";
import Footer from "../headerfooter/Footer";
const Pages = () => {
    return (
        <>
          <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
          <Footer />
          </Router>
         
        </>
    )
}

export default Pages;