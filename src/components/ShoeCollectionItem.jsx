import { Collections } from "@mui/icons-material";
import { ListGroupItem, Button } from "react-bootstrap";
import { useState } from "react";

function ShoeCollectionItem({ collection }) {
  const getValue = (collection) => {
    let total = 0;
    collection.shoes.forEach((shoe) => {
      total += shoe.shoePrice;
    });
    return total;
  };

  const [activatedCollection, setActivatedCollection] = useState(false);

  const handleActivate = () => {
    setActivatedCollection(!activatedCollection);
  };

  return (
    <ListGroupItem
      className=" list-group-item list-group-item-action flex-column align-items-start"
      collection={collection.id}
      onClick={handleActivate}
    >
      <h5>{collection.shoeCollectionName}</h5>
      <p>
        Pairs: {collection.shoes?.length ?? 0}, Value: $
        {collection.shoes ? getValue(collection) : 0}
      </p>
      {activatedCollection && (
        <div>
          <Button variant="primary">View</Button>
          <Button variant="secondary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      )}
    </ListGroupItem>
  );
}

export default ShoeCollectionItem;
