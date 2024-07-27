import { useEffect, useState } from 'react';
import boatsApi from '../api/boats-api';
import SingleItem from './sinlge-item/SingleItem';

export default function Catalog(){
    const [boats, setBoats] = useState([]);
    useEffect(()=>{
        (async () => {
           const result = await boatsApi.getAll()
           setBoats(result);
       })();
   },[])

    return (
        <section className="catalog">
             {boats.length > 0
            ? boats.map(boat => <SingleItem key={boat._id} {...boat}/>)
            :  <h3 className="no-articles">No boats yet</h3>
        }

        
        </section>
    )
}