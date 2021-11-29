import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewPAckages.css'


const AddNewPackage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/addPackages', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("New Package is Added")

                }
            })
        // console.log(data);
    }

    return (
        <div>
            <h1 className="mt-5 text-center">Add a New Packages</h1>
            <div className="w-75 mx-auto bg-secondary">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="mx-auto text-center">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("countryName")}
                                placeholder="Country Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("packageName")}
                                placeholder="Package Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <small className="text-white text-start"> Start Date</small>
                            <input
                                {...register("startDate")}
                                type="date"
                                className="p-2 m-2 w-100"
                            />

                            <br />
                            <small className="text-white text-start"> End Date</small>
                            <input
                                {...register("endDate")}
                                type="date"
                                className="p-2 m-2 w-100"
                            />

                            <br />
                            <input
                                {...register("duration")}
                                placeholder="Duration of Days"
                                type="durations"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <small htmlFor="time" className="text-white text-start"> Start time</small>
                            <input
                                {...register("startTime")}
                                type="time"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <small htmlFor="time" className="text-white text-start"> End time</small>
                            <input
                                {...register("endTime")}
                                type="time"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description")}
                                placeholder="Description"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("groupSize")}
                                placeholder="Group Size"
                                type="number"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("packageFees")}
                                placeholder="Fees"
                                type="number"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("imgUrl", { required: true })}
                                type="url"
                                placeholder="Image Link"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add" className="btn btn-info w-50 mb-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewPackage;