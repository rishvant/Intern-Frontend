import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();
    const userRef = useRef();
    const passRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();
        const username = userRef.current.value;
        const password = passRef.current.value;
        try {
            const response = await axios.post("http://localhost:3000/login", { username, password });
            const accessToken = response.data.token;
            localStorage.setItem("accessToken", accessToken);
            toast.success("Successfully Logged In!");
            navigate("/dashboard");
        }
        catch (err) {
            console.log("Error:", err);
            if (err.response && err.response.status === 409) {
                toast.error("User is not Registered!");
            }
            else if (err.response && err.response.status === 403) {
                toast.error("Invalid Password!");
            }
            else {
                toast.error("An unexpected error occurred.");
            }
        }

  }

  return (
    <form onSubmit={handleLogin}>
      <div
        className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md">
          <Card className="mx-auto">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Login</CardTitle>
              <CardDescription>Please enter your email and password to login.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input ref={userRef} id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link className="ml-auto inline-block text-sm underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <Input ref={passRef} id="password" required type="password" />
                </div>
                <Button className="w-full" type="submit">
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don't have an account?
                <Link className="underline" to="/register"> Create Account</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}

export default Login;