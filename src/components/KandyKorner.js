import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kan"

export const KandyKorner = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)