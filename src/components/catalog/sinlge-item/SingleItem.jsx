import { Link } from "react-router-dom"

export default function SinleItem({
    _id,
    title,
    category,
    imageUrl,

}) {
    return (

        <div className="small-items">
        <h2 className="centered_title">{title}</h2> 
        <img src={imageUrl} alt=""  title="" />
        <Link to={`/boats/${_id}/details`} className="details-button">Details</Link>
        </div>
     
    )
}