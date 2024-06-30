import React, { useEffect, useState } from 'react'

const Data = () => {

    const [data, setdata] = useState([])
    const fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos")
        const upData = await data.json()
        console.log(111, upData)
        setdata(upData)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {data && data.map((item, index) => {
                return <>
                    <div className="card text-center my-3" style={{margin:"10px 0px 10px 10px",border:"2px solid green"}}>
                        <div className="card-header" style={{border:"2px solid green"}}>
                            Display Card Data
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{item.id}</h5>
                            <p className="card-text">{item.title}</p>
                            <p className="card-text"><small className="text-body-secondary">{item.completed}</small></p>
                        </div>
                    </div>
                </>
            })}
        </div>
    )
}

export default Data
