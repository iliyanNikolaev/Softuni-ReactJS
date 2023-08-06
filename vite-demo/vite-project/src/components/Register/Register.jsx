import './Register.css'

import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/authContext"
import { useForm } from "../../hooks/useForm"

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function Register() {

    const [isLoading, setIsLoading] = useState(false);

    const { formValues, onChange } = useForm({ username: '', password: '' });

    const { onRegisterSubmit } = useContext(AuthContext);

    const formSubmit = async (e) => {
        e.preventDefault();

        if(formValues.username == '' || formValues.password == '') {
            return alert('Please fill all fields!')
        }

        try {
            setIsLoading(true);

            await onRegisterSubmit(formValues.username.trim(), formValues.password.trim());

            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="register-page">
            <h2>Register page</h2>

            <form className="register-form" onSubmit={formSubmit}>
                <label htmlFor="username">Username:
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor="password">Password:
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={onChange}
                    />
                </label>

                {isLoading ? <LoadingSpinner /> : <button>Register</button>}
            </form>
        </div>
    )
}
