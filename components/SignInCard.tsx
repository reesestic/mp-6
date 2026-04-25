import { signIn } from "@/auth";
import styled from "styled-components";

// Styled sign in component
export default function SignInCard() {
    return (
        <Page>
            <Card>
                <h1>OAuth Verification Using GitHub</h1>
                <p>Sign in with your GitHub to view your profile!</p>

                {/*triggers GitHub auth, redirects to /profile after login, uses server*/}
                {/*buit in Auth.js functionality, i just found docs and used it*/}
                <form
                    action={async () => {
                        "use server";
                        await signIn("github", {
                            redirectTo: "/profile",
                        });
                    }}
                >
                    <Button type="submit">Sign in</Button>
                </form>
            </Card>
        </Page>
    );
}
// Styled parts

const Page = styled.main`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0f0f0f;
`;

const Card = styled.div`
    background: #1a1a1a;
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    color: white;

    h1 {
        margin-bottom: 10px;
    }

    p {
        opacity: 0.7;
        margin-bottom: 20px;
    }
`;

const Button = styled.button`
    background: #22c55e;
    padding: 12px 20px;
    border-radius: 8px;
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;