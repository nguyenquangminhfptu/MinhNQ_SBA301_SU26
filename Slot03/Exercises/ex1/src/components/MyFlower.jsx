import React from "react";
import { Card } from "react-bootstrap";

export const MyFlower = ({ flower }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={flower.image} alt={flower.name} />
      <Card.Body>
        <Card.Title>{flower.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> {flower.price}
        </Card.Text>
        <Card.Text>
          <strong>Color:</strong> {flower.color}
        </Card.Text>
        <Card.Text>
          <strong>Description:</strong> {flower.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};