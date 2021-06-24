import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Select } from 'semantic-ui-react'

const dummyCities = [{city:'SLC'},{city:'Draper'}]

const Cities = (props) => {
    const [cities, setCities] = useState([])
    useEffect(()=>{
        getCities()
    },[])

    const getCities = async()=>{
       try{
        //  let res = await axios.get('/api/cities')
        //  setCities(res.data)
        setCities(dummyCities)
       } catch(err) {
           console.log(err)
           console.log(err.response)
       }
    }

    const normalizeCityData = () => {
        return cities.map((c) => {
          return { key: c.city, value: c.city, text: c.city };
        });
      };
      
      const handleChange = (e, { value }) => {
        alert(value);
      };

    const cityOptions = normalizeCityData();
    return (
        <div>
            <h1>cities</h1>
            <Select
                onChange={handleChange}
                placeholder="Select City"
                options={cityOptions}
                />
        </div>
    )
}

export default Cities