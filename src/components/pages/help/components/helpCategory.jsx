import React, { useState } from "react";
import { Col, Row, Card, CloseButton } from "react-bootstrap";

const HelpItem = ({ name, onClick }) => {
  return (
    <Col>
      <Card onClick={onClick}>
        <Card.Body className="bg-light bordered cursor-pointer hover-lighten bordered text-montserrat">
          <strong>{name}</strong>
        </Card.Body>
      </Card>
    </Col>
  );
};

export const HelpCategory = ({ name, items }) => {
  const [openedItem, setOpenedItem] = useState(null);
  const openItem = (i) => setOpenedItem(i);
  const closeItem = (i) => setOpenedItem(null);

  return (
    <>
      <h4 className="mb-4">{name}</h4>
      <Row>
        {!openedItem &&
          items.map((i, idx) => (
            <HelpItem key={idx} onClick={() => openItem(i)} {...i} />
          ))}
        {openedItem && (
          <Col>
            <Card>
              <Card.Header className="bg-success text-light">
                <strong>{openedItem.name}</strong>
                <CloseButton
                  className="float-end"
                  variant="white"
                  onClick={closeItem}
                />
              </Card.Header>
              <Card.Body className="content">{openedItem.answer}</Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </>
  );
};
