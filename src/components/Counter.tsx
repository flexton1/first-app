import React, { useState } from 'react';

interface IState{
    count: number;
}
interface IProps{}

let Counter:React.FC<IProps> = () => {

    let [state, setState] = useState<IState>({
        count : 0
    });

    let incr = (): void => {
        setState({
            count: state.count + 1
        })
    }

    let decr = (): void => {
        setState({
            count: state.count - 1
        })
    }

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3 display-3">
                                    {state.count}
                                </p>
                                <button onClick={incr} className="btn btn-success m-1">
                                    Increment
                                </button>
                                <button onClick={decr} className="btn btn-danger m-1">
                                    Decrement
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Counter;