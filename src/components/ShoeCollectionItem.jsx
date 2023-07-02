import { ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";

function ShoeCollectionItem({ collection }) {
  return (
    <ListGroupItem
      className=" list-group-item list-group-item-action flex-column align-items-start"
      collection={collection.id}
    >
      <h5>{collection.title}</h5>
      <p>
        Pairs: {collection.pairs}, Value: ${collection.value}
      </p>
    </ListGroupItem>
  );
}

// Temporary fix for ESLint error:
ShoeCollectionItem.propTypes = {
  collection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    pairs: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShoeCollectionItem;
