import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addInitialItems } from "../store/itemSlice";
import { markFetchDone, markeFetchingStart, markFetchingEnd } from "../store/fetchStatusSlice";

const FetchItems = () => {
   const fetchStatus = useSelector((store) => store.fetchStatus);
   const dispatch = useDispatch();
    
   useEffect(() => {
    if (fetchStatus.fetchDone) {
        return;
    }
    const controller = new AbortController();
     
    dispatch(markeFetchingStart());
    
    fetch('http://localhost:8082/items', { signal: controller.signal })
        .then(response => response.json())
        .then(({items}) => {
            dispatch(markFetchDone());
            dispatch(markFetchingEnd());
            dispatch(addInitialItems(items[0]));
        }).catch((error) => {
            console.error('Error fetching items:', error);
        });

        return () => {
            controller.abort();
        };
    }, [fetchStatus, dispatch]);
    
    return <></>
}

export default FetchItems;