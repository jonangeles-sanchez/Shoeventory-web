import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
} from "react-bootstrap";
import ShoeCollectionItem from "../../components/ShoeCollectionItem";
// Temp
import { useState } from "react";
// Temp
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setCollections } from "../../slices/inventorySlice";
import { useGetCollectionsMutation } from "../../slices/inventoryApiSlice";
import { useDispatch } from "react-redux";
import { useAddNewCollectionMutation } from "../../slices/inventoryApiSlice";

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

  const dispatch = useDispatch();
  const [getCollections, { isLoading }] = useGetCollectionsMutation();
  const token = useSelector((state) => state.auth.userInfo.token);
  const [addedCollection, setAddedCollection] = useState(null);
  const userId = useSelector((state) => state.auth.userInfo.merchantId);
  console.log(useSelector((state) => state.auth));
  const [newOperation, setNewOperation] = useState(false);

  const handleSetAddedCollection = () => {
    setAddedCollection(true);
  };

  useEffect(() => {
    // Fetch collections
    setNewOperation(false);
    async function fetchData() {
      try {
        const savedCollections = await getCollections({
          merchantId: userId,
          token: token,
        });

        dispatch(setCollections({ ...savedCollections }));
        setAddedCollection(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [dispatch, getCollections, token, addedCollection, newOperation, userId]);

  const [newCollection, setNewCollection] = useState(false);

  const [addNewCollection, { isLoading: isAdding }] =
    useAddNewCollectionMutation();

  const handleNewCollection = () => {
    // Switch to true or false
    setNewCollection(!newCollection);
  };

  const handleNewCollectionSubmit = () => {
    let newCollectionTitle = document.querySelector(".new-collection-input");
    if (newCollectionTitle.value === "") {
      alert("Please enter a title for your new collection");
      return;
    }
    console.log(newCollectionTitle.value);
    try {
      addNewCollection({
        shoeCollectionName: newCollectionTitle.value,
        merchantId: userId,
        token: token,
      });
      setAddedCollection(true);
      setNewOperation(true);
    } catch (err) {
      console.log(err);
    }
  };

  const merchantCollections =
    useSelector((state) => state.inventory.inventories?.data) || [];

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">Current collections</h1>
        </Card>
      </Container>
      <ListGroup className="list-group">
        {merchantCollections.map((collection) => (
          <ShoeCollectionItem
            collection={collection}
            key={collection.id}
            handleNewCollection={handleSetAddedCollection}
            setNewOperation={setNewOperation}
          />
        ))}
        {newCollection && (
          <ListGroupItem className="list-group-item list-group-item-action flex-column align-items-start">
            <Form.Control
              type="text"
              placeholder="Your new collection's title"
              size="lg"
              className="new-collection-input"
            />

            <p>Pairs: 0, Value: $0</p>
          </ListGroupItem>
        )}
        <ListGroupItem
          className="list-group-item list-group-item-action flex-column align-items-start text-center"
          onClick={handleNewCollection}
        >
          {newCollection ? (
            <>
              <Button
                variant="primary"
                className="me-3"
                onClick={handleNewCollectionSubmit}
              >
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
