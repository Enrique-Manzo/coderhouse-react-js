import "./ItemListContainer.css";
import ItemList from "./ItemList";


export default function ItemListContainer({preTitle}) {
    
    return (
        <div className="container section">
            <p className="d-flex flex-column justify-content-center align-items-center white-title">{preTitle}</p>
            <h2 className="d-flex flex-column justify-content-center align-items-center section-title">best products</h2>
            <div className="d-flex justify-content-between align-items-center flex-column flex-sm-column flex-md-row flex-lg-row">
                <ItemList/>
            </div>
        </div>
    )
}