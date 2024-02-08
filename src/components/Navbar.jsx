import { useEffect } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "../ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
        }
        else {
            navigate("/login");
            toast.error("Please Login first!");
        }
    }, []);

    const handleLogout = async () => {
        try {
            localStorage.removeItem("accessToken");
            toast.success("Successfully Logged Out!");
            navigate("/login");
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-black text-white">
            <div className="flex items-center justify-center w-full">
                <nav className="flex items-center space-x-4">
                    <Link className="mr-5 text-lg font-semibold" to="/dashboard">
                        Home
                    </Link>
                    <Link className="ml-5 mr-5 text-lg font-semibold" to="/quiz" >
                        Take Assessment
                    </Link>
                    <Link className="ml-5 text-lg font-semibold" onClick={handleLogout}>
                        Log Out
                    </Link>
                </nav>
            </div>
            <div className="flex items-center">
                <Link to="/profile">
                    <Avatar className="h-9 w-9">
                        <AvatarImage alt="User Avatar" src="/react.svg" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;