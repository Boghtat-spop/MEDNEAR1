import React, { useState } from "react";
import { CiUser, CiLock } from "react-icons/ci";
import axios from "axios";
import "../styles/Login.css";

function Login() {
    const [showForm, setShowForm] = useState(false);
    const [showfrget, setShowfrget] = useState(false);
    const [useEmail, setUseEmail] = useState(true); // State to toggle between email and phone form

    // States for login, register, and forget password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password

    // Handle Login Form Submission
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        axios
            .get("http://localhost:3000/users") // Get users from json-server
            .then((response) => {
                const user = response.data.find(
                    (user) => user.email === email && user.password === password // Checking email and password
                );

                if (user) {
                    // Successful login, redirect to your project or homepage
                    window.location.href = "/dashboard"; // Change this to your project URL
                } else {
                    // Invalid credentials, don't show alert
                    console.log("Invalid credentials, user not found.");
                }
            })
            .catch((error) => {
                console.error("Error logging in:", error);
            });
    };

    // Handle Registration Form Submission
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const newUser = {
            id: "72d3",  // Manually assigning an ID here
            firstName,
            lastName,
            email,
            telephone: phone,
            birthday,
            password, // Add password to the post request
        };

        axios
            .post("http://localhost:3000/users", newUser)
            .then(() => {
                alert("Registration Successful!");
                setShowForm(false);  // Close registration form
            })
            .catch((error) => {
                console.error("Error registering user:", error);
            });
    };

    // Handle Forget Password Form Submission
    const handleForgetSubmit = (e) => {
        e.preventDefault();
        const field = useEmail ? email : phone;
        axios
            .post("http://localhost:3000/forgot-password", { field })
            .then(() => {
                alert("Password reset link sent!");
                setShowfrget(false);
            })
            .catch((error) => {
                console.error("Error resetting password:", error);
            });
    };

    // Forget password form with email
    const forgetemail = () => (
        <form onSubmit={handleForgetSubmit}>
            <div className="form-emapass">
                <h1>Forget Password</h1>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Send</button>
                <a href="#" onClick={() => setUseEmail(false)}>Use Telephone instead</a>
            </div>
        </form>
    );

    // Forget password form with phone
    const forgetpass = () => (
        <form onSubmit={handleForgetSubmit}>
            <div className="form-emapass">
                <h1>Forget Password</h1>
                <label htmlFor="tele">Telephone:</label>
                <input
                    type="tel"
                    id="tele"
                    name="tele"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Send</button>
                <a href="#" onClick={() => setUseEmail(true)}>Use Email instead</a>
            </div>
        </form>
    );

    // Registration form with password and confirm password
    const createForm = () => (
        <form onSubmit={handleRegisterSubmit} className="formpar">
            <h1>Register</h1>
            <div className="in">
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="in">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Telephone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="in">
                <input
                    type="date"
                    placeholder="Birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
            </div>
            <div className="in">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="rest">
                <button type="submit">Register</button>
            </div>
        </form>
    );

    return (
        <div className="parent">
            {!showForm && !showfrget ? (
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <CiUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password" // Here is your password input
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <CiLock className="icon" />
                    </div>
                    <div className="cheklink">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" onClick={() => setShowfrget(true)}>Forget my password?</a>
                    </div>
                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                    <div className="register">
                        <p>Don't have an account? <a href="#" onClick={() => setShowForm(true)}>Register</a></p>
                    </div>
                </form>
            ) : showForm ? (
                createForm()
            ) : (
                useEmail ? forgetemail() : forgetpass()
            )}
        </div>
    );
}

export default Login;
