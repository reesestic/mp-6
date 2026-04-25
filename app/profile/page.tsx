import { auth } from "@/auth";
import ProfileCard from "@/components/ProfileCard";

// conditionally rendered page by login functionality to return the profile card
// error handling with the <div>
export default async function ProfilePage() {
    const session = await auth();

    if (!session) {
        return <div>Not logged in</div>;
    }

    return <ProfileCard session={session} />;
}