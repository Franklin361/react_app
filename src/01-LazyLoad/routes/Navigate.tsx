
import { Link, Route, Routes, Navigate as Nav} from 'react-router-dom';
import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../pages/';


export const Navigate = () => {

    // const match = useMatch('');
    // console.log({match})

    return (
        <div>
            <h2>LazyLayout Pages</h2>
             <div style={{ display:'flex', flexDirection:'column' }}>
             <Link to="lazy1">Lazy Page 1</Link>
             <Link to="lazy2">Lazy Page 2</Link>
             <Link to="lazy3">Lazy Page 3</Link>
             </div>

             <Routes>
                 <Route path="lazy1" element={<LazyLoad1/>}/>
                 <Route path="lazy2" element={<LazyLoad2/>}/>
                 <Route path="lazy3" element={<LazyLoad3/>}/>
                 <Route path="*" element={ <LazyLoad1/> } />
             </Routes>
        </div>
    )
}
