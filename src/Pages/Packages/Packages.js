import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';
import packageImg from '../../Images/wave-design.jpg'

const Packages = () => {
    const [packages, setpackages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/addPackages')
            .then(res => res.json())
            .then(data => setpackages(data))
    }, [])
    return (
        <div style={{ backgroundImage: `url(${packageImg})` }}>
            <Container>

                <div>
                    <h3 className="all-headers"> <span className="fw-bolder">|</span> Amazing Tours</h3>
                    <h1>Trending, Tours And Fun Destinations</h1>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">

                    {packages.map(pack => <Package key={pack._id} pack={pack}> </Package>)}
                </Row>
            </Container>
        </div>
    );
};

export default Packages;