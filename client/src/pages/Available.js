import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AgentProperties from '../components/AgentProperties';

const Available = () => {
    const [agents, setAgents] = useState([])
    useEffect(()=>{
        getAgentsProperties()
    },{})

    const normalizeData = (agentProperties) => {
        // STEP 1 GET UNIQ IDS OF AGENTS
            // Step 1a
            // how do you go through my array of objects 
            // and return array of agent_id =[1,1,2,2,]
            // MAP

             // Step 2a
            // take array of numbers and create array of 
            // uniq numbers
            // [...new Set(x)]

        const uniqAgentIDS =[...new Set(agentProperties.map(p=> p.agent_id))]

        console.log(uniqAgentIDS)
        const agentsData = []
        // STEP 2 go through that array and match all my agents
        // with  agentProperties array
        uniqAgentIDS.forEach( id => {
            // I have id of the agent
            let properties = agentProperties.filter( ap => ap.agent_id === id)
            console.log(properties)
              // still in for each loop push each agent {fullName, email properties}
             // object to agents array
            let {agent_id, first_name, last_name, email} = properties[0]
            // this step is not 100% necassary but removes unused keys from
            // properties
            const cleanedProperties = properties.map(p => {
                return{street: p.street,
                       zip:p.zip,
                       state:p.state,
                       city:p.city,
                       sq_ft:p.sq_ft,
                       beds:p.beds,
                       baths:p.baths,
                       price:p.price
                    }
            })

            agentsData.push({
                agent_id, fullName: `${first_name} ${last_name}`, 
                email, 
                properties: cleanedProperties
            }
            )
        })
        console.log(agentsData)
        setAgents(agentsData)
    }

    const getAgentsProperties = async()=> {
        try {
            let res = await axios.get('/api/properties')
            normalizeData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>Available</h1>
            {agents.map(a => (
                <AgentProperties {...a} />
            ))
            }

        </>
    )
}

export default Available