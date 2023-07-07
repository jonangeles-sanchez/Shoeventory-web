import { Collections } from "@mui/icons-material";
import { ListGroupItem } from "react-bootstrap";

function ShoeCollectionItem({ collection }) {
  const getValue = (collection) => {
    let total = 0;
    collection.shoes.forEach((shoe) => {
      total += shoe.shoePrice;
    });
    return total;
  };

  return (
    <ListGroupItem
      className=" list-group-item list-group-item-action flex-column align-items-start"
      collection={collection.id}
    >
      <h5>{collection.shoeCollectionName}</h5>
      <p>
        Pairs: {collection.shoes?.length ?? 0}, Value: $
        {collection.shoes ? getValue(collection) : 0}
      </p>
    </ListGroupItem>
  );
}

export default ShoeCollectionItem;
