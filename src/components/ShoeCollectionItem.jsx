import { Collections, Save } from "@mui/icons-material";
import { ListGroupItem, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDeleteCollectionMutation } from "../slices/inventoryApiSlice";
import { useGetCollectionsMutation } from "../slices/inventoryApiSlice";
import { useUpdateCollectionMutation } from "../slices/inventoryApiSlice";
import { useSelector } from "react-redux";

function ShoeCollectionItem({ collection, handleNewCollection }) {
  const [activatedCollection, setActivatedCollection] = useState(false);
  const [editCollection, setEditCollection] = useState(false);
  const dispatch = useDispatch();
  const [deleteCollection, { isLoading }] = useDeleteCollectionMutation();
  const [updateCollection, { isLoading: isUpdating }] =
    useUpdateCollectionMutation();
  const token = useSelector((state) => state.auth.userInfo.token);

  const getValue = (collection) => {
    let total = 0;
    collection.shoes.forEach((shoe) => {
      total += shoe.shoePrice;
    });
    return total;
  };

  const handleEditCollection = (event) => {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent element
    setEditCollection(!editCollection);
  };

  const handleActivate = () => {
    setActivatedCollection(!activatedCollection);
  };

  const handleSaveCollection = (event) => {
    // Check if the text input is empty
    const collectionName = document.querySelector(".collection-rename");
    console.log(collectionName.value);
    console.log(collection.id);
    console.log(token);
    if (collectionName.value === "") {
      alert("Please enter a collection name");
      return;
    }
    updateCollection({
      shoeCollectionName: collectionName.value,
      collectionId: collection.id,
      token: token,
    });
    handleNewCollection();
    setEditCollection(!editCollection);
  };

  const handleFormClick = (event) => {
    event.stopPropagation();
  };

  const handleDeleteCollection = () => {
    deleteCollection({ collectionId: collection.id, token: token });
    handleNewCollection();
  };

  return (
    <ListGroupItem
      className=" list-group-item list-group-item-action flex-column align-items-start"
      collection={collection.id}
      onClick={handleActivate}
    >
      {editCollection ? (
        <Form.Control
          type="text"
          placeholder={collection.shoeCollectionName}
          size="lg"
          className="collection-rename"
          onClick={handleFormClick}
        />
      ) : (
        <h5>{collection.shoeCollectionName}</h5>
      )}
      <p>
        Pairs: {collection.shoes?.length ?? 0}, Value: $
        {collection.shoes ? getValue(collection) : 0}
      </p>
      {activatedCollection && (
        <div>
          {!editCollection && <Button variant="primary">View</Button>}
          <Button
            variant="secondary"
            onClick={
              !editCollection ? handleEditCollection : handleSaveCollection
            }
          >
            {!editCollection ? "Edit" : "Save"}
          </Button>
          <Button
            variant="danger"
            onClick={
              !editCollection ? handleDeleteCollection : handleEditCollection
            }
          >
            {!editCollection ? "Delete" : "Cancel"}
          </Button>
        </div>
      )}
    </ListGroupItem>
  );
}

export default ShoeCollectionItem;
