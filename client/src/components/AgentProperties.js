import React from "react";
import { Card, Table, Segment } from "semantic-ui-react";

const AgentProperties = ({ fullName, email, properties }) => (
  <Segment>
    <Card>
      <Card.Content>
        <Card.Header>{fullName}</Card.Header>
        <Card.Meta>{email}</Card.Meta>
      </Card.Content>
    </Card>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Beds</Table.HeaderCell>
          <Table.HeaderCell>Bath</Table.HeaderCell>
          <Table.HeaderCell>SQ Feet</Table.HeaderCell>
          <Table.HeaderCell>Street</Table.HeaderCell>
          <Table.HeaderCell>City</Table.HeaderCell>
          <Table.HeaderCell>Zip</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {properties.map((p) => (
          <Table.Row>
            <Table.Cell>{p.price}</Table.Cell>
            <Table.Cell>{p.beds}</Table.Cell>
            <Table.Cell>{p.baths}</Table.Cell>
            <Table.Cell>{p.sq_ft}</Table.Cell>
            <Table.Cell>{p.street}</Table.Cell>
            <Table.Cell>{p.city}</Table.Cell>
            <Table.Cell>{p.zip}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Segment>
);

export default AgentProperties;
