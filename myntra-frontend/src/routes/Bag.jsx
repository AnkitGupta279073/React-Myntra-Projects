import { useSelector } from "react-redux";
import BagItem from "../component/BagItem";
import BagSummary from "../component/BagSummary";

const Bag = () => {
    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items.initialItems);
    const bagItemDetails = items.filter(item => bagItems.includes(item.id));
    
    const bagSummary = {
        totalItem: bagItems.length,
        totalMRP: bagItemDetails.reduce((total, item) => total + item.original_price, 0),
        totalDiscount: bagItemDetails.reduce((total, item) => total + (item.original_price - item.current_price), 0),
        convenienceFee: 99,
        finalPayment: bagItemDetails.reduce((total, item) => total + item.current_price, 0) + 99
    };
    
    return (
        <div>
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                        {bagItemDetails.map(item => (
                            <BagItem key={item.id} item={item} />
                        ))}
                    </div>
                    <BagSummary bagSummary={bagSummary}/>
                </div>
            </main>
        </div>
    )
}

export default Bag;