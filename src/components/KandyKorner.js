import React from "react"
import { LocationList } from "./Locations/LocationList"
import { LocationProvider } from "./Locations/locationprovider"

export const KandyKorner = () => (
    <>
        <h2>Welcome to KandyKorner!</h2>
        <address>
            <LocationProvider>
                <LocationList />
            </LocationProvider >
        </address>
    </>
)