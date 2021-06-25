import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Card, Divider, Icon, Select } from 'semantic-ui-react'

const FindHomes = (props)=> {
    const [agentsOptions, setAgentsOptions] = useState([])
    const [buyerOptions, setBuyerOptions] = useState(null)
    const [properties, setProperties] = useState(null)
    useEffect(()=>{
        getAgents()
    },[])

    const getAgents = async() => {
        let res = await axios.get('/api/agents')
        console.log(res)
        const agents = res.data.map( a => {
            return {key:a.id, value:a.id, text:`${a.first_name} ${a.last_name}`}
        })
        setAgentsOptions(agents)
    }
    const handleAgentChanged = async (e, {value}) =>{
        let res = await axios.get(`/api/agents/${value}`)
        console.log(res)
        const buyers = res.data.map( a => {
            return {key:a.id, value:a.id, text:`${a.first_name} ${a.last_name}`}
        })
        setBuyerOptions(buyers)
    }
    const handleBuyerChanged = async (e, {value}) =>{
        let res = await axios.get(`/api/buyers/${value}`)
        console.log(res)
        setProperties(res.data)
    }

    const renderProperties = ()=> {
       return properties.map(p => {
           return (
            <Card
            image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
            header={p.price}
            meta={p.agent_name}
            // description=''
            extra={(
                <>
                <a>
                  <Icon name='bed' />
                  {p.beds}
                </a>
                <a>
                  <Icon name='bath' />
                  {p.baths}
                  
                </a>
                <a>
                  <Icon name='area chart' />
                  {p.sq_ft}
                 
                </a>
                </>
              )}
        />
           )
       })
    }
    return(
        <div>
            <h1>homes</h1>
            <Select 
              options={agentsOptions} 
              onChange={handleAgentChanged}
              />
              {buyerOptions &&
              <>
              <Divider />
                  <Select 
                  options={buyerOptions} 
                  onChange={handleBuyerChanged}
                  />
            </>
              }
              {  properties && 
                 properties.length === 0 && 
                <p>No Available properties for you desired cities and proce range</p>
              }
              { properties &&
               <>
                <Divider />
                 <Card.Group>
                  {renderProperties()}
                 </Card.Group>
                </>
               }
        </div>
    )
}



export default FindHomes