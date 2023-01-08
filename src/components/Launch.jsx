import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  Header  from "./Header";
import LoadSpinner from "./LoadSpinner";
import './Launch.css'

import React from 'react'

const Launch = () => {
    const Schema =  {
        full_name: String,
        description: String,
        name: String,
        launches: String,
        status: String,
        id: Number,
        images: 20,
        large: undefined,
      }
  
    const [launches, setLaunches] = useState("");

  const getLaunches = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/launchpads");
    const data = await response.json();
    setLaunches(data);
    console.log(data);
  };

  useEffect(() => {
    getLaunches();
  }, []);
  return (
    <div>
        <Header />
        {launches.length === 0 ? (
        <LoadSpinner />
      ) : (
        <div>
         {/* mapping to traverse through the launches */}
          {launches.map((launch) => (
            <div className="launching" key={launch.id}>
              <div className="launchDescription">
                <img src={launch.images.large} alt={launch.name} />
                <h2 className="launchHeading">{launch.full_name}</h2>
                <br />
                <h5 className="launchDetails">{launch.details}</h5>
                <br />
                <div className="launchStatus">
                  <h3>
                    {launch.status === "under construction" ? (
                      <>
                        <span className="underConstruction">
                          {launch.status}
                        </span>
                      </>
                    ) : launch.status === "active" ? (
                      <span className="active">{launch.status}</span>
                    ) : (
                      <span className="inactive">{launch.status}</span>
                    )}
                  </h3>
                  <div className="active">
                    <p>
                      <span>
                        {launch.launches[0] ? (
                          <>
                            Launch 1 :
                            <Link to={`/launchpad/${launch.launches[0]}`}>
                              {launch.launches[0]}
                            </Link>
                          </>
                        ) : (
                          <>
                            <p className="noLaunch">No Launch Available</p>
                          </>
                        )}
                      </span>
                    </p>
                    <p>
                      <span>
                        {launch.launches[1] ? (
                          <>
                            {" "}
                            Launch 2 :
                            <Link to={`/launchpad/${launch.launches[1]}`}>
                              {launch.launches[1]}{" "}
                            </Link>{" "}
                          </>
                        ) : (
                          <>
                            <p>No Launch Available</p>
                          </>
                        )}
                      </span>
                    </p>
                    <p>
                      <span>
                        {launch.launches[2] ? (
                          <>
                            {" "}
                            Launch 3 :
                            <Link to={`/launchpad/${launch.launches[2]}`}>
                              {launch.launches[2]}
                            </Link>{" "}
                          </>
                        ) : (
                          <>
                            <p className="noLaunch">No Launch Available</p>
                          </>
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          ))}
        </div>
      )}
    </div>

  
  )
}

export default Launch
