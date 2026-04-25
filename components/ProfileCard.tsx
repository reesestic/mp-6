import { Session } from "next-auth";
import styled from "styled-components";

// type for TSX
type Props = {
    session: Session;
};

// Styled component for user's profile loading after sign in from Auth.js redirect

export default function ProfileCard({ session }: Props) {
    return (
        <Page>
            <Card>
                <h1>Welcome {session.user?.name}!</h1>

                {/* loads image if it exists or string if not for typing*/}
                <Avatar src={session.user?.image || ""} />

                <EmailCard>
                    <Label>Email</Label>
                    <Value>
                        {session.user?.email || "No email"}
                    </Value>
                </EmailCard>
            </Card>
        </Page>
    );
}

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
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 20px 0;
`;

const EmailCard = styled.div`
  background: #3b82f6;
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
`;

const Label = styled.div`
  font-size: 12px;
  opacity: 0.7;
`;

const Value = styled.div`
  font-weight: bold;
`;