import { addToBag, removeFromBag } from "../store/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
const HomeItem = ({ item }) => {
    const dispatch = useDispatch();
    const bag = useSelector(state => state.bag);
    const isItemInBag = bag.includes(item.id);
    return (
        <div>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>
                {isItemInBag ? (
                    <button className="btn-add-bag btn btn-danger" onClick={() => dispatch(removeFromBag(item.id))}>
                        <MdDeleteForever /> Remove from Bag
                    </button>
                ) : (
                    <button className="btn-add-bag btn btn-success" onClick={() => dispatch(addToBag(item.id))}>
                        <IoMdAddCircle /> Add to Bag
                    </button>
                )}
            </div>
        </div>
    )
}

export default HomeItem;