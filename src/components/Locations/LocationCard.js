import React from "react"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3>{location.address}</h3>
        <p>Size: {location.sqFoot}</p>
        <p>Handicap Accessible? {(location.handicapAccess === true) ? "yes" : "no"}</p>
    </section>
)