import React from "react"

export default function NavBar(){
    return (
        <div className="nav--bar">
            <input 
                type="text"
                name="searchBar"
                placeholder="Search Project"
                className="search--bar"
            />
            <select className="filter--box">
                <option >Filter</option>
                <option value={undefined}>Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
    )
}