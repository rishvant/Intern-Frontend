import { CardTitle, CardDescription, Card } from "../ui/card"
import { Button } from "../ui/button"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    return (
        <>
            <Navbar></Navbar>
            <main
                className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-6">Driving License Assessment</h1>
                <h2 className="text-2xl font-semibold mb-4">Welcome to your driving journey!</h2>
                <p className="text-lg text-gray-600 mb-8 text-center max-w-lg">
                    Here you can take driving license assessment and can get your Driving License.
                    <br />
                    <Link to="/quiz"><Button className="mt-5">Start Assessment</Button></Link>
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-5">
                    <Card className="flex flex-col items-center text-center p-6">
                        <CardTitle>Road Signs</CardTitle>
                        <CardDescription>Learn about various road signs and their meanings.</CardDescription>
                        <Button className="mt-auto">View More</Button>
                    </Card>
                    <Card className="flex flex-col items-center text-center p-6">
                        <CardTitle>Traffic Rules</CardTitle>
                        <CardDescription>Understand the rules of the road and traffic laws.</CardDescription>
                        <Button className="mt-auto">View More</Button>
                    </Card>
                    <Card className="flex flex-col items-center text-center p-6">
                        <CardTitle>Vehicle Controls</CardTitle>
                        <CardDescription>Get to know the various controls and instruments in a vehicle.</CardDescription>
                        <Button className="mt-auto">View More</Button>
                    </Card>
                    <Card className="flex flex-col items-center text-center p-6">
                        <CardTitle>Emergency Procedures</CardTitle>
                        <CardDescription>Learn the correct procedures to follow in case of an emergency.</CardDescription>
                        <Button className="mt-5">View More</Button>
                    </Card>
                </div>
            </main>
        </>
    );
}

export default Dashboard;
