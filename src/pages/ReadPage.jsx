import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/loader.jsx";
import {Link, useParams} from "react-router-dom";

const ReadPage = () => {

    const [Data,SetData]=useState([]);


    useEffect(() => {
        (async ()=>{
            await ReadData()
        })()
    }, []);


    const ReadData=async ()=>{
        let res=await axios.get("/api/Read");
        SetData(res.data['row'])
    }

    const DeleteData=async (id)=>{
        await axios.get(`/api/Delete/${id}`);
        await ReadData()
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {
                        Data.map((item)=> {
                          return (
                              <div className="card  mt-2">
                                  <div className="card-body d-flex justify-content-between align-items-center">
                                      <div>
                                          <h6> Title : {item.title}</h6>
                                          <h6>Discount : {item.discount}</h6>
                                          {
                                              item.discount==="Yes"?(<h6 >Price : <strike class="text-danger">{item.price}</strike> <span className="text-secondary"> {item.discount_price}</span></h6>) :
                                                  (<h6 className=""> Price : {item.price}</h6>)
                                          }

                                      </div>
                                      <div className="d-flex">
                                          <button onClick={()=>{DeleteData(item._id)}} className="btn btn-primary me-2 ">Delete</button>
                                         <Link className="btn btn-danger" to={`/update/${item._id}`}>edit</Link>
                                      </div>
                                  </div>
                              </div>
                          )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default ReadPage;