import React, { Component } from 'react';
import CircleLoader from 'react-spinners/CircleLoader'
import { getBeer } from '../../services/BaseService';
import Navbar from '../Navbar/Navbar';
import './BeerDetails.css'

class BeerDetails extends Component {
    state = {
        beer: null,
        loading: true
    }

    componentDidMount() {
        this.fetchBeer()
    }

    fetchBeer = () => {
        const { id } = this.props.match.params
        
        getBeer(id)
        .then(beer => this.setState({beer, loading: false}))
    }

    render() {
        const { beer, loading } = this.state
        
        return (
            <div className="BeerDetails">
                <Navbar />
                
                {
                    loading
                        ? (
                            <div className="m-0 row justify-content-center my-3">
                                <CircleLoader color="#3dc4fc" />
                            </div>
                        )
                        : (
                            <div className="card card-beer-details mt-5">
                                <img src={beer.image_url} className="card-img-top w-25" alt="..."/>
                                <div className="card-body info-beer-details mt-5">
                                    <div className="d-flex justify-content-between">
                                        <h3 className="card-title">{beer.name}</h3>
                                        <p className="card-text tagline">{beer.attenuation_level}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text tagline">{beer.tagline}</p>
                                        <p className="card-text"><b>{beer.first_brewed}</b></p>
                                    </div>
                                    <p className="card-text">{beer.description}</p>
                                    <p className="card-text contributed"><b>{beer.contributed_by}</b></p>
                                </div>
                        </div>    
                    )
                }
            </div>
        );
    }
}

export default BeerDetails;