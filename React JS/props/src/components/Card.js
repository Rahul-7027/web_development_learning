import React from 'react'
import "./card.css"
const Card = ({title,des}) => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <img src="https://picsum.photos/300/200?grayscale" alt="Image 3" />
                    <div className="card-context">
                        <h3>{title}</h3>
                        <p>{des}</p>
                    </div>
                    <div className="card-hidden">
                        <button className="card-button">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/300/200?grayscale" alt="Image 3" />
                    <div className="card-context">
                        <h3>Card Title 3</h3>
                        <p>This is a description of the card. It provides brief details about the content.</p>
                    </div>
                    <div className="card-hidden">
                        <button className="card-button">Learn More</button>
                    </div>
                </div>
                <div className="card">
                    <img src="https://picsum.photos/300/200?grayscale" alt="Image 3" />
                    <div className="card-context">
                        <h3>Card Title 3</h3>
                        <p>This is a description of the card. It provides brief details about the content.</p>
                    </div>
                    <div className="card-hidden">
                        <button className="card-button">Learn More</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Card
