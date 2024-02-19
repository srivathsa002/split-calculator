import React, { useEffect, useState } from "react";

export default function Solution(props) {
    const {handleSubmit} = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if(username === "" || password === "")
            setIsDisabled(true);
        else
            setIsDisabled(false);
    }, [username, password])


    return (
        <div>
            <form>
                <div>
                <label htmlFor="username-input">
                    Username:
                </label>
                <input
                    type="text"
                    id="username-input"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    style={{backgroundColor: "", nnxs: ""}}
                />
                </div>
                <div>
                <label htmlFor="password-input">
                    Password:
                </label>
                <input
                    type="password"
                    id="password-input"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} 
                />
                </div>
                <div>
                <button
                    type="submit"
                    id="login-button"
                    disabled={isDisabled}
                    onClick={() => handleSubmit(username, password)}
                >
                    Submit
                </button>
                </div>
            </form>
        </div>
    )
}
