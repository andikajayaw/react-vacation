import React from 'react'
import {Fade} from 'react-awesome-reveal'
import Button from "../elements/Button"

export default function MostPicked(props) {
    return (
        <section className='container' ref={props.refMostPicked}>
            <Fade triggerOnce direction="up">
                <h4 className="mb-3">Most Picked</h4>
                <div className="container-grid">
                    {
                        props.data.map((item, index) => {
                            return (
                                <div key={`mostpicked-${index}`} className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`} style={{display: 'grid'}}>
                                    <Fade triggerOnce direction="up" delay={200*index}>
                                        <div className="card card-featured">
                                            <div className="tag">
                                                ${item.price}
                                                <span className="font-weight-light">per {item.unit}</span>
                                            </div>
                                            <figure className="img-wrapper">
                                                <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button type="link" className="stretched-link d-block text-white" href={`/properties/${item._id}`}>
                                                    <h5>{item.name}</h5>
                                                </Button>
                                                <span>
                                                    {item.city}, {item.country}
                                                </span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            )
                        })
                    }
                </div>
            </Fade>
        </section>
    )
}
