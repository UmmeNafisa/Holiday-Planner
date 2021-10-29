import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Context/useAuth';

const AddNewPackage = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // data.addEventEmail = user?.email;
        // fetch('https://young-taiga-92429.herokuapp.com/addEvents', {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => console.log(result))
        console.log(data);
    }


    console.log(watch("example"));
    return (
        <div>
            <h1 className="mt-5 text-center">Add a New Packages</h1>
            <div className="login-box w-50 m-auto mt-5 bg-secondary">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
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