import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../ui/card"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Profile = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("accessToken");
                if (!token) {
                    console.log("Token not available");
                }
                const response = await axios.get("http://localhost:3000/getUser", {
                    headers: {
                        Authorization: token
                    }
                });
                setUser(response.data.user);
            }
            catch (err) {
                console.log("Error:", err);
            }
        }
        fetchUser();
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <div className="flex items-center justify-center mt-20">
                <Card>
                    <CardHeader>
                        <CardTitle>User details</CardTitle>
                        <CardDescription>Your account information is secure.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 justify-center">
                        <div className="flex items-center gap-4">
                            <div className="font-medium">Name</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{user.name}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="font-medium">Email</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{user.username}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="font-medium">Date of birth</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{new Date(user.dob).toLocaleDateString('en-CA')}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="font-medium">Phone</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{user.phone}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="font-medium">Address</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{user.address}</div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link to="/profile/update">
                            <Button size="sm">Edit</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Profile;