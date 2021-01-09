import React, { useContext, useEffect } from "react"
import { LocationContext } from "./locationprovider"
import { LocationCard } from "./LocationCard"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <>
            <h2>List of our Locations:</h2>
            <div className="locations">
                {
                    locations.map(location => {
                        return <LocationCard key={location.id} location={location} />
                    })
                }
            </div>
        </>
    )
}

