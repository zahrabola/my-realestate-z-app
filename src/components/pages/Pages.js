import Header from "../headerfooter/Header";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../home/homefolder/Home";
const Pages = () => {
    return (
        <>
          <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
          </Router>
         
        </>
    )
}

export default Pages;