import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {auth, provider} from '../../firebaseConfig';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';

function AuthLogin() {

    const [state, dispatch] = useStateValue();

    const signInFunc=()=>{
        // console.log('inside signin');
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        })
        .catch((error)=>{
            alert(error.message);
        });
    };

  return (
    <div>
    <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
            <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
            >
                <div
                    className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-8 md:mb-0"
                >
                    <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image"
                    />
                </div>
                <div className=" xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-4 md:mb-0">
                    <div className="text-center lg:text-left">
                        <button
                        type="button"
                        className=" flex justify-around w-[300px] inline-block px-7 py-3 bg-blue-600 text-white font-medium text-lg leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={signInFunc}>
                        Login with Google <FcGoogle size={25}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default AuthLogin;