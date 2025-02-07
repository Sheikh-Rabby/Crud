import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const CreatePage = () => {

    let navigate=useNavigate();


    const CreateData=async (event)=>{

        event.preventDefault();

        let formData=new FormData(event.target);
        let title=formData.get("title");
        let price=formData.get("price");
        let discount=formData.get("discount");
        let discount_price=formData.get("discount_price");


        await axios.post("/api/Create",{
            title:title,
            price:parseFloat(price),
            discount:discount,
            discount_price:parseFloat(discount_price)
        })

        navigate("/")


    }



    return (
        <div className="container mt-5">
            <form onSubmit={CreateData}>
                <div className="row">
                    <div className="col-md-3">
                        <label>Title</label>
                        <input className="form-control form-control-sm" name="title" type="text" placeholder="title"/>
                    </div>
                    <div className="col-md-3">
                        <label>Price</label>
                        <input className="form-control form-control-sm" name="price" type="text" placeholder="title"/>
                    </div>
                    <div className="col-md-3">
                        <label>Discount</label>
                        <select className="form-select form-select-sm" name="discount">
                            <option value="">Select Option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                    </div>

                    <div className="col-md-3">
                        <label>Discount Price</label>
                        <input className="form-control form-control-sm" name="discount_price" type="text" placeholder="title"/>
                    </div>

                </div>
                 <button type="submit" className="btn btn-sm mt-3 btn-success">Submit</button>
            </form>
        </div>
    );
};

export default CreatePage;