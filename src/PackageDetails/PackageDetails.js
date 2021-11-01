import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const PackageDetails = () => {
    const [pack, setPack] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://stormy-inlet-84335.herokuapp.com/addPackages/${id}`)
            .then(res => res.json())
            .then(data => setPack(data[0]))

    }, [])

    const handleBookNow = () => {
        fetch('https://stormy-inlet-84335.herokuapp.com/bookItems', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(pack)
        })
    }
    return (
        <div className="container header-front" >
            <div>
                <h1>{pack?.countryName}</h1>
                <img src={pack?.imgUrl} alt="" className="img-fluid" />
                <h5 className="w-75mx-auto text-center py-2"> {pack?.description} </h5>
            </div>
            <div>
                <Table striped bordered hover className="w-75 mx-auto text-center pb-5">
                    <tbody>
                        <tr>
                            <td> Package Name  </td>
                            <td>{pack?.packageName}</td>
                        </tr>
                        <tr>
                            <td>Departure</td>
                            <td>Shahjalal International Airport, Dhaka</td>
                        </tr>
                        <tr>
                            <td> departure date  </td>
                            <td>{pack?.startDate}</td>
                        </tr>
                        <tr>
                            <td> departure time  </td>
                            <td>{pack?.startTime}</td>
                        </tr>
                        <tr>
                            <td> Duration  </td>
                            <td>{pack?.duration}</td>
                        </tr>
                        <tr>
                            <td> Group size  </td>
                            <td>{pack?.groupSize}</td>
                        </tr>
                        <tr>
                            <td> Arrival Date  </td>
                            <td>{pack?.endDate}</td>
                        </tr>
                        <tr>
                            <td> Arrival time  </td>
                            <td>{pack?.endTime}</td>
                        </tr>
                        <tr>
                            <td> Package fee  </td>
                            <td>${pack?.packageFees}/ person</td>
                        </tr>
                        <tr>
                            <td> Package Included :   </td>
                            <td className="text-align ps-5">
                                <li>5 Star Hotel Accommodation </li>
                                <li>Air ticket </li>
                                <li>All transportation in destination location </li>
                                <li> 2 days Lunch and Dinner  </li>
                                <li> Instruction Guide  </li>
                            </td>
                        </tr>
                        <tr>
                            <td> Package Not Included :   </td>
                            <td className="text-align ps-5">
                                <li>Any Private Expenses </li>
                                <li>Room Service Fees </li>
                                <li>Transportation cost for visiting tourist
                                    area, shopping etc </li>
                                <li> Rest of day lunch and dinner  </li>
                                <li> Breakfast and snacks </li>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Link to="/clientPage">
                <Button onClick={() => { handleBookNow() }} className="btn-all px-5 py-2 mb-5"> BOOK NOW </Button>
            </Link>
        </div>
    );
};

export default PackageDetails;