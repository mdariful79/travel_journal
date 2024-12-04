
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                //passing data as properties
                // src={props.img.src}
                // alt={props.img.alt}
                //Passing as object we need to add .entry after the props
                //src={props.entry.img.src}

                //Spread object as props
                />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src="../src/assets/marker.png"
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>

        </article>
    )
}