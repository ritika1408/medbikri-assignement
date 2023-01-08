import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {API_URL} from './config'
import axios from "axios"; 
import LoadSpinner from "./LoadSpinner";
import './Launchpad.css'
import {GrRevert} from "react-icons/gr"

import React from 'react'

const Launchpad = () => {

    const { id } = useParams();

    const [name, setName] = useState("");
  
    const [date_local, setDate_local] = useState("");
  
    const [details, setDetails] = useState("");
  
   
    useEffect(() => {
      if ( id ) {
          axios.get(API_URL + "/launches/" + id)
              .then(res => {
                  console.log(res)
                  const { name, details, date_local} = res.data
                  setName(name)
                  setDetails(details)
                  setDate_local(date_local)
              })
              .catch(err => {
                  console.log(err)
              })
      }
  }, [ id ]);
  
  return (
    <div className="lauchPad">
    {name === "" ? (
        <LoadSpinner />
      ) : (
        <div className="contentArea">
          <h1>{name}</h1> <br />
          <h3 style={{ color: "green" }}>
            {!details ? (
              <h3 style={{ color: "red" }}>No Details Found</h3>
            ) : (
              details
            )}
          </h3>
          <br />
          <div className="dateTime">
            <h3>Date : {date_local.slice(0, 10)}</h3>
            <br />
            <h3>Time : {date_local.slice(11, 19)}</h3>
          </div>
          <br/>
          <Link className = "reverseBack" to="/"> Traverse Back <GrRevert/></Link>
          
        </div>
      )}

    </div>
  )
}

export default Launchpad