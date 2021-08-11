import{Route} from 'react-router-dom'
// import PortadaView from './views.js/PortadaView'
import PortadaViewAdopciones from './views.js/PortadaViewAdopciones'
import Caracts from './components/Caracts'
import PortadaView from './views.js/PortadaView'


export default function Routes ()
{return(
    <div>
       <Route path="/portadaview" exact component={PortadaView} />
       <Route path="/" exact component={PortadaViewAdopciones} />    
    </div>
    )
}