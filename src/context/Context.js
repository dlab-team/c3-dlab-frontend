import React, { useState } from "react";

export const DataContext = React.createContext();

const dataFixed = [
    {id:'101',status:false, empresa:'Entel-id101', conocimiento:'Python, JavaScripts y React.js', cargo:'Desarrollador Full Stack Python + React.js ', paginaweb:'https://examedi.com/cl/', fecha:'2022-04-03', hora:'18:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'102',status:true, empresa:'Entel-id102',conocimiento:'Python, JavaScripts y react.js 2', cargo:'Desarrollador Full Stack Python + React.js 2', paginaweb:'https://examedi.com/cl/2', fecha:'2022-06-03', hora:'18:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'103',status:true, empresa:'Entel-id103', conocimiento:'Python, JavaScripts y react.js 3', cargo:'Desarrollador Full Stack Python + React.js 3', paginaweb:'https://examedi.com/cl/3', fecha:'2022-05-03', hora:'19:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'104',status:true, empresa:'Entel-id104', conocimiento:'Python, JavaScripts y react.js 4', cargo:'Desarrollador Full Stack Python + React.js 4', paginaweb:'https://examedi.com/cl/4', fecha:'2022-07-03', hora:'13:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'105',status:false, empresa:'Entel-id105',conocimiento:'Python, JavaScripts y react.js 2', cargo:'Desarrollador Full Stack Python + React.js 2', paginaweb:'https://examedi.com/cl/2', fecha:'2022-06-03', hora:'18:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'106',status:false, empresa:'Entel-id106', conocimiento:'Python, JavaScripts y react.js 3', cargo:'Desarrollador Full Stack Python + React.js 3', paginaweb:'https://examedi.com/cl/3', fecha:'2022-05-03', hora:'19:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'107',status:true, empresa:'Entel-id107', conocimiento:'Python, JavaScripts y react.js 4', cargo:'Desarrollador Full Stack Python + React.js 4', paginaweb:'https://examedi.com/cl/4', fecha:'2022-07-03', hora:'13:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    ]

const trueTotal = dataFixed.filter(item => item.status).length

function DataProvider ({children}) {
    const [data, setData] = useState(dataFixed,trueTotal)
    return (
        <DataContext.Provider value={{
            data,
            setData,
            trueTotal
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;