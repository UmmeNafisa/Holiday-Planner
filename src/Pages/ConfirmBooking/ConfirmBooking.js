import React from 'react';
import { useForm } from 'react-hook-form';

const ConfirmBooking = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.status = "Pending";
        fetch('https://stormy-inlet-84335.herokuapp.com/confirmBooking', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Your Order Approval is Pending, Very Soon we Confirm you ")
                }
            })



    };

    return (
        <div>
            <h1 className="mt-5 text-center">To confirm Your Order</h1>
            <div className="login-box w-50 m-auto mt-5">
                <div className="event-box border border d-flex justify-content-center align-items-center"></div>
                <div className="login-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("clientName")}
                            placeholder="Your Name"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("emailAddress")}
                            placeholder="Email"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("address")}
                            placeholder="Address"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" value="Submit" className="btn btn-all text-white fw-bold w-50 mb-3" />
                    </form>
                </div>
                {/* {data.status === "Pending" ? <p> your Booking is Pending </p> : <p>Your Booking Sucessfull</p>} */}
            </div>
        </div>

    );
};

export default ConfirmBooking;