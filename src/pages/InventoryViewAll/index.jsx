import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import ShoeCollectionItem from "../../components/ShoeCollectionItem";
// Temp
import { useState } from "react";
// Temp

function InventoryViewAll() {
  const collections = [
    {
      id: 1,
      title: "La Pulga",
      pairs: 70,
      value: 7300,
    },
    {
      id: 2,
      title: "Greenville Flea Market",
      pairs: 50,
      value: 5400,
    },
    {
      id: 3,
      title: "My personal collection",
      pairs: 15,
      value: 1850,
    },
    {
      id: 4,
      title: "Nike Dunks",
      pairs: 10,
      value: 1200,
    },
    {
      id: 5,
      title: "Jordans",
      pairs: 5,
      value: 600,
    },
  ];

  const [newCollection, setNewCollection] = useState(false);

  const handleNewCollection = () => {
    // Switch to true or false
    setNewCollection(!newCollection);
  };

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Current collections</h1>
        </Card>
      </Container>
      <ListGroup className="list-group">
        {collections.map((collection) => (
          <ShoeCollectionItem collection={collection} key={collection.id} />
        ))}
        {newCollection && (
          <ListGroupItem className="list-group-item list-group-item-action flex-column align-items-start">
            <h5>Your new collection title</h5>
            <p>Pairs: 0, Value: $0</p>
          </ListGroupItem>
        )}
        <ListGroupItem
          className="list-group-item list-group-item-action flex-column align-items-start text-center"
          onClick={handleNewCollection}
        >
          {newCollection ? (
            <>
              <Button variant="primary" className="me-3">
                Save
              </Button>
              <Button variant="secondary" className="me-3">
                Cancel
              </Button>
            </>
          ) : (
            <h5>Add another collection</h5>
          )}
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default InventoryViewAll;
