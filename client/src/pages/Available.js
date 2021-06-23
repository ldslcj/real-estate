import React from 'react'
import AgentProperties from '../components/AgentProperties';

const agent = {
    fullName: "Jimbo DUBO",
    email: "test@test.com",
    properties: [
        {
            street: "asd",
            city: "slc",
            zip: "84101",
            sq_ft: 123,
            beds: 12,
            baths: 24,
            price: 12341234
        },
        {
            street: "asd",
            city: "slc",
            zip: "84101",
            sq_ft: 123,
            beds: 12,
            baths: 24,
            price: 12341234
        }
    ]
};
const agent1 = {
    fullName: "Jimbo2 DUBO",
    email: "test2@test.com",
    properties: [
        {
            street: "2asd",
            city: "slc",
            zip: "84101",
            sq_ft: 123,
            beds: 12,
            baths: 24,
            price: 12341234
        },
        {
            street: "asd",
            city: "slc",
            zip: "84101",
            sq_ft: 123,
            beds: 12,
            baths: 24,
            price: 12341234
        },
        {
            street: "asasdfd",
            city: "slc",
            zip: "84101",
            sq_ft: 123,
            beds: 12,
            baths: 24,
            price: 12341234
        }
    ]
};

const agents = [agent, agent1]

const Available = () => {
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