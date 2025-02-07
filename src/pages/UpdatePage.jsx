import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const UpdatePage = () => {
    const { id } = useParams();

    const [Existing, setExisting] =useState([]);

    const ExistingInfo = async (id) => {
        let res = await axios.get(`/api/ReadByID/${id}`);

        setExisting(res.data['row'][0]);
    };

    useEffect(() => {
        (async () => {
            await ExistingInfo(id);
        })();
    }, []);

    const UpdateData =async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)
         let Title = formData.get('title');
         let Price = formData.get('price')
         let discount = formData.get('discount');
         let discount_price = formData.get('discount_price');

         await axios.post(`/api/update/${id}`,{
             title: Title,
             price: parseFloat(Price),
             discount: discount,
             discount_price: parseFloat(discount_price),
         })

    }






    return (
        <div className="container mt-5">

            <form onSubmit={UpdateData} className="col-6">
                <label >Title</label>
                <input className="form-control" value={Existing.title} name="title" placeholder="Title" type="text"/>
                <label>Price</label>
                <input className="form-control" value={Existing.price} name="price"  placeholder="Title" type="text"/>
                <label>Discount</label>
                <select className="form-select form-select-sm" name="discount">
                    <option selected={Existing['discount'] === "Yes"} value="Yes">Yes</option>
                    <option selected={ Existing['discount'] === "No"} value="No">No</option>
                </select>
                <label>Discount_Price</label>
                <input className="form-control" value={Existing.discount_price} name="discount_price"  placeholder="Title" type="text"/>

                <button className="btn btn-success mt-2" type="submit">Update</button>


            </form>


        </div>
    );
};

export default UpdatePage;