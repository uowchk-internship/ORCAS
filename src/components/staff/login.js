import { useState } from 'react'
import Router from 'next/router'
import { Button } from '@mantine/core';

import { login, checkLoginStatus } from '../../functions/admin'

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState(false)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const checkCredentials = async () => {
        setLoading(true)

        let result = await login(username, password);
        if (result === "fail") {
            setShowError(true)
        } else {
            setShowError(false)
            Router.push("/staff/")
        }

        setLoading(false)
    }

    return (
        <>
            <section className="page-form grid-container" style={{ width: "50%" }}>
                {/* <form onSubmit={() => checkCredentials()} > */}
                <label htmlFor="loginEmail">Username:</label>
                <input type="text" id="loginEmail"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase())} />
                <br />

                <label htmlFor="loginPw">Password:</label>
                <input type="password" id="loginPw"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <br />

                {(showError) ?
                    <p style={{ color: "#ED0A00", textAlign: "center" }}>
                        Login failed. <br />
                    </p>
                    : <></>
                }

                <div className="d-grid gap-2 col-6 mx-auto">
                    <div style={{ textAlign: "center" }}>
                        <Button type="submit" style={{ backgroundColor: "#ED0A00", color: "#ffffff", borderRadius: 5 }}
                            position="center"
                            size="md"
                            loading={loading}
                            onClick={() => checkCredentials()}>
                            <span style={{ padding: 70 }}>Submit</span>
                        </Button>
                    </div>
                </div>
                {/* </form> */}
            </section>

            <div style={{ padding: 50 }}></div>

        </>
    );
}