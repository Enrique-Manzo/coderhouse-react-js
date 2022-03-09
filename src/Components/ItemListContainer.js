import "./ItemListContainer.css";

export default function ItemListContainer({greeting}) {
    return (
        <h1 className="d-flex flex-column justify-content-center align-items-center white-title">{greeting}</h1>
    )
}