import React from "react";

const MyContext = React.createContext();

function Provider (props) {

       const data = [
        {id:'101',status:false, empresa:'Entel', conocimiento:'Python, JavaScripts y React.js', cargo:'Desarrollador Full Stack Python + React.js ', paginaweb:'https://examedi.com/cl/', fecha:'2022-04-03', hora:'18:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
        {id:'102',status:true, empresa:'Entel 2', conocimiento:'Python, JavaScripts y react.js 2', cargo:'Desarrollador Full Stack Python + React.js 2', paginaweb:'https://examedi.com/cl/2', fecha:'2022-06-03', hora:'18:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
        {id:'103',status:false, empresa:'Entel 3', conocimiento:'Python, JavaScripts y react.js 3', cargo:'Desarrollador Full Stack Python + React.js 3', paginaweb:'https://examedi.com/cl/3', fecha:'2022-05-03', hora:'19:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
        {id:'104',status:true, empresa:'Entel 4', conocimiento:'Python, JavaScripts y react.js 4', cargo:'Desarrollador Full Stack Python + React.js 4', paginaweb:'https://examedi.com/cl/4', fecha:'2022-07-03', hora:'13:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' }
        ]
    
    return (
        <MyContext.Provider value ={{
            data,
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default Provider;