import React, { useState } from 'react';
import { UserModel } from '../models/UserModel';

interface IState{
    user: UserModel
}

interface IProps{}

let LoginForm:React.FC<IProps> = () => {

    let [state, setState] = useState({
        user: {
            username: '',
            password: ''
        }
    })

    let updateInput = (event:React.ChangeEvent<HTMLInputElement>): void => {
        
       setState({
       user: { ...state.user,
        [event.target.name]: event.target.value
    }
});
        
    }


    let login = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log(state.user);

    }


    return(
        <React.Fragment>

            {/* <pre>{JSON.stringify(state.user)}</pre> */}

            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <p className="h4">Login here</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={login}>
                                    <div className="mb-2">
                                        <input name="username" 
                                        required={true}
                                        value={state.user.username}
                                        onChange={updateInput}
                                        type="text" className='form-control' placeholder='Username' />
                                    </div>
                                    <div className="mb-2">
                                        <input 
                                        required={true}
                                        name="password"
                                        value={state.user.password}
                                        onChange={updateInput}
                                        type="password" className='form-control' placeholder='Password' />
                                    </div>
                                    <div className="mb-2">
                                        <button className="btn btn-primary text-white">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

};

export default LoginForm;