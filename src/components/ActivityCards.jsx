
const ActivityCards = (props) => {
    const imagePath = `../assets/${props.coverImg}`
    const availability = props.openSpots != 0 ? "Available" : "Sold Out"
    return (
            <div className="activity-cards">
                <div className='activity-availability'> 
                <img src={imagePath}/>
                  <p> {availability} </p>
                </div>
                <div className='activity-rating-container'>
                    <p className='activity-rating-icon'> ★ </p>
                    <p className='activity-rating'> {props.stats.rating} </p>
                    <p className='activity-rating-count'>  ({props.stats.reviewCount}) </p>
                    <p className='activity-rating-country'> - {props.location}  </p>
                </div>
                    <p className='activity-title'>{props.title} </p>
                    <p className='activity-pricing'> <b> From ${props.price} </b> / person </p>
            </div>
    )
}

export default ActivityCards;