import React from 'react'

import ImageHero from '../assets/images/img-hero.jpg'
import ImageHeroFrame from '../assets/images/img-hero-frame.jpg'
import IconTraveler from '../assets/images/icons/ic_traveler.svg'
import IconTreasure from '../assets/images/icons/ic_treasure.svg'
import IconCities from '../assets/images/icons/ic_cities.svg'
import { Fade } from "react-awesome-reveal";

import Button from '../elements/Button'
import formatNumber from '../utilities/formatNumber'
export default function Hero(props) {
    function showMostPicked() {
        console.log(props);
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: 'smooth'
        })
    }

    return (
        <section className='container pt-4'>
            <Fade triggerOnce direction="up">
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work, <br />
                            Start Next Vacation
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: '170%' }}>
                            We provide what you need to enjoy your
                            holiday with family. Time to make another
                            memorable moments.
                        </p>
                        <Button className="px-5" isPrimary hasShadow onClick={showMostPicked}>Show Me Now</Button>
                        <div className="row" style={{marginTop: '80px'}}>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 35 }}>
                                <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
                                </h6>
                            </div>
                            <div className="col-auto">
                                <img width="36" height="36" src={IconCities} alt={`${props.data.cities} cities`} />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">cities</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pl-5" style={{ width: 520, height: 410 }}>
                        <div className="image-hero">
                            <img src={ImageHero} alt="Home with couches" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
                            <img src={ImageHeroFrame} alt="Home with couches frame" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0' }} />
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}
