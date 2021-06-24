import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Select, Table } from 'semantic-ui-react'

const Cities = (props) => {
    const [cities, setCities] = useState([])
    const [cityProperties, setCityProperties] = useState(null)
    useEffect(() => {
        getCities()
    }, [])

    const getCities = async () => {
        try {
            let res = await axios.get('/api/cities')
            setCities(res.data)
        } catch (err) {
            console.log(err)
            console.log(err.response)
        }
    }

    const normalizeCityData = () => {
        return cities.map((c) => {
            return { key: c.city, value: c.city.toLowerCase(), text: c.city };
        });
    };

    const handleChange = async (e, { value }) => {
        try {
          let res = await axios.get(`/api/cities/${value}`)
          setCityProperties(res.data)
        } catch(err){
            console.log(err)
            console.log(err.response)
        }
    };
    const getRows = () => {
        return cityProperties.map((p) => (
          <Table.Row>
            <Table.Cell>{p.beds}</Table.Cell>
            <Table.Cell>{p.baths}</Table.Cell>
            <Table.Cell>{p.sq_ft}</Table.Cell>
            <Table.Cell>{p.price}</Table.Cell>
          </Table.Row>
        ));
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
            {cityProperties && 
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Beds</Table.HeaderCell>
                            <Table.HeaderCell>Baths</Table.HeaderCell>
                            <Table.HeaderCell>SQ FT</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>{getRows()}</Table.Body>
                </Table>
            }
        </div>
    )
}

export default Cities