import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Navbar from "./Navbar"
import { useEffect, useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function Component() {
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const dobRef = useRef();
    const addressRef = useRef();
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
                const formattedDob = new Date(response.data.user.dob).toLocaleDateString('en-CA');
                nameRef.current.value = response.data.user.name;
                emailRef.current.value = response.data.user.username;
                phoneRef.current.value = response.data.user.phone;
                dobRef.current.value = formattedDob;
                addressRef.current.value = response.data.user.address;
            }
            catch (err) {
                console.log("Error:", err);
            }
        }
        fetchUser();
    }, []);

    const updateUser = async () => {
        try {
            const name = nameRef.current.value;
            const email = emailRef.current.value;
            const dob = dobRef.current.value;
            const phone = phoneRef.current.value;
            const address = addressRef.current.value;
            const token = localStorage.getItem("accessToken");
            const response = await axios.put("http://localhost:3000/profile/update", { name, email, dob, phone, address }, {
                headers: {
                    Authorization: token
                }
            });
            if (response.status === 200) {
                toast.success("Profile update successfully");
                navigate("/profile");
            }
            else {
                toast.error("Error in updating profile");
                navigate("/profile");
            }
        }
        catch (err) {
            toast.error("Error in updating profile");
            console.log("Error:", err);
            navigate("/profile");
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUser();
    }

    return (
        <>
            <Navbar></Navbar>
            <form onSubmit={handleUpdate}>
                <div className="flex justify-center items-center mt-5 mb-5">
                    <Card className="w-full max-w-2xl">
                        <CardHeader>
                            <CardTitle>Profile</CardTitle>
                            <CardDescription>Update your profile information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input ref={nameRef} id="name" placeholder="Enter your name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input ref={emailRef} id="email" placeholder="Enter your email" type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input ref={phoneRef} id="phone" placeholder="Enter your phone number" type="tel" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dob">Date of Birth</Label>
                                <Input ref={dobRef} id="dob" placeholder="Enter your date of birth" type="date" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input ref={addressRef} id="address" placeholder="Enter your address" type="text" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto">Save</Button>
                        </CardFooter>
                    </Card>
                </div>
            </form>
        </>
    )
}