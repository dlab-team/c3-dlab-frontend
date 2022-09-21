import React, { useState } from "react";

export const DataContext = React.createContext();

const dataFixed = [
    {id:'101',status:false, empresa:'Entel', conocimiento:'JavaScripts, React, SQL,GIT, Docker ', cargo:'Full-Stack Junior (React, Node.js)', paginaweb:'https://www.getonbrd.com/', fecha:'04-10-2022', hora:'18:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'102',status:true, empresa:'Mercado Libre',conocimiento:'React, UX/UI, Jest, API REST Y Docker', cargo:'Developer Front-end', paginaweb:'https://www.getonbrd.com/', fecha:'03-10-2022', hora:'15:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'103',status:true, empresa:'Claro', conocimiento:'Diseño Responsivo, HTML, CSS, JavaScript y JSON', cargo:'Junior Front-end Developer', paginaweb:'https://examedi.com/cl/3', fecha:'01-10-2022', hora:'19:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'104',status:true, empresa:'Movistar', conocimiento:'Django, AWS, GIT, HTML, JavaScript y CSS', cargo:'Desarrollador Junior de Python', paginaweb:'https://examedi.com/cl/4', fecha:'01-10-2022', hora:'13:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'105',status:false, empresa:'Lenovo',conocimiento:'Python, JavaScripts y react.js ', cargo:'Desarrollador(a) de Software', paginaweb:'https://examedi.com/cl/2', fecha:'02-10-2022', hora:'15:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'106',status:false, empresa:'HP', conocimiento:'React, Vue.js, .NET Core, Java, Scala', cargo:'Associate Engineer ', paginaweb:'https://examedi.com/cl/3', fecha:'25-09-2022', hora:'15:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
    {id:'107',status:true, empresa:'Google', conocimiento:'Python, JavaScripts y react.js 4', cargo:'Desarrollador Full Stack Python', paginaweb:'https://examedi.com/cl/4', fecha:'23-09-2022', hora:'17:00', link:'https://desafiolatam.zoom.us/j/83350773697?pwd=MGFObm8xbi92MmpYWHJHYnJ5SXMwUT09' },
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