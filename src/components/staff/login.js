import Router from 'next/router'
import { Button } from '@mantine/core';

export default function Login() {

    const checkCredentials = () => {
        Router.push("/staff/")
    }

    return (
        <>
            <section class="page-form grid-container">
                <form>
                    <label for="loginEmail">Email:</label>
                    <input type="text" id="loginEmail" name="loginPart" /><br />
                    <label for="loginPw">Password:</label>
                    <input type="text" id="loginPw" name="loginPart" /><br />
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <div style={{ textAlign: "center" }}>
                            <Button style={{ backgroundColor: "#ED0A00", color: "#ffffff", borderRadius: 5 }}
                                position="center"
                                size="md"
                                onClick={() => checkCredentials()}>
                                <span style={{ padding: 70 }}>Submit</span>
                            </Button>
                        </div>
                    </div>
                </form>
            </section>

            <div style={{ padding: 50 }}></div>

        </>
    );
}