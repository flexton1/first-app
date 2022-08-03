import React from 'react';

interface IState{}
interface IProps{}

let About:React.FC<IProps> = () => {

    return(
        <React.Fragment>

        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success fw-bold">About us</p>
                    <p className="fst italic mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem in molestias quae. Sapiente blanditiis exercitationem nesciunt culpa facilis quisquam eveniet dolore nemo veritatis, omnis, nihil quo. Voluptates modi sed adipisci mollitia voluptate!
                    </p>
                </div>
            </div>


        <div className="row">
            <div className="col">
                <ul className="list-group">
                    <li className="list-group-item">
                        App Name: <span className="fw-bold">React router with TS</span>
                    </li>
                    <li className="list-group-item">
                        Author: <span className="fw-bold">flexton</span>
                    </li>
                </ul>
            </div>
        </div>



        </div>

        </React.Fragment>
    )

};

export default About;