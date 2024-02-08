import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useRef } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const dobRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

    const handleRegister = async (e) => {
      const username = emailRef.current.value;
      const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;
      const name = nameRef.current.value;
      const dob = dobRef.current.value;
      const phone = phoneRef.current.value;
      const address = addressRef.current.value;
        e.preventDefault();
        if (confirmPassword !== password) {
            toast.error("Password does not match!");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/register", { username, password, name, dob, phone, address });
            console.log(response);
            if (response.status === 200) {
            toast.success("Account created successfully! You can now login");
            }
            emailRef.current.value = "";
            passwordRef.current.value = "";
            confirmPasswordRef.current.value = "";
        }
        catch (err) {
            console.log("Error:", err);
            if (err.response && err.response.status === 409) {
                toast.error("User already exists!");
            }
            else {
                toast.error("An unexpected error occurred.");
            }
        }
    }

  return (
    <form onSubmit={handleRegister}>
      <div
        className="flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md mt-5 mb-5">
          <Card className="mx-auto">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Register</CardTitle>
              <CardDescription>Please enter your details to register.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input ref={nameRef} id="name" placeholder="Enter your name" required type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input ref={emailRef} id="email" placeholder="Enter your email" required type="text" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input ref={phoneRef} id="phone" placeholder="Enter your phone number" required type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input ref={dobRef} id="dob" placeholder="Enter your date of birth" required type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input ref={addressRef} id="address" placeholder="Enter your address" required type="text" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input ref={passwordRef} id="password" required type="password" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="confPassword">Confirm Password</Label>
                  </div>
                  <Input ref={confirmPasswordRef} id="confPassword" required type="password" />
                </div>
                <Button className="w-full" type="submit">
                  Register
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?
                <Link className="underline" to="/login"> Login</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}

export default Register;