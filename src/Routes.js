import{Route} from 'react-router-dom'
import PortadaView from './views.js/PortadaView'

export default function Routes ()
{return(
    <div>
       <Route path="/" exact component={PortadaView} />    
    </div>
    )
}