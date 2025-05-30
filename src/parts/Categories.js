import React from 'react'
import Button from '../elements/Button'
import {Fade} from 'react-awesome-reveal'

export default function Categories({ data }) {
    return data.map((category, index1) => {
        return <section className='container' key={`category-${index1}`}>
            <Fade triggerOnce direction="up">
                <h4 className="mb-3 font-weight-medium">
                    {category.name}
                </h4>
                <div className="container-grid">
                    {
                        category.items.length === 0 ? <div className="row">
                            <div className="col-auto align-items-center">
                                There is no category in this destiantion
                            </div>
                        </div> : category.items.map((item, index2) => {
                            return (
                                <div className="item column-3 row-1" key={`category-${index1}-item-${index2}`} style={{display: 'grid'}}>
                                    <Fade triggerOnce direction="up" delay={300*index2}>
                                        <div className="card">
                                            {item.isPopular && <div className='tag'>Popular {' '} <span className='font-weight-light'>Choice</span></div>}
                                            <figure className="img-wrapper" style={{height: 180}}>
                                                <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button type="link" href={`/properties/${item._id}`} className="stretched-link d-block text-gray-800">
                                                    <h5 className="h4">{item.name}</h5>
                                                </Button>
                                                <span className="text-gray-500">
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
    })
}
