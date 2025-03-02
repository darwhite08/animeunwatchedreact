import { useState } from "react";
import { Eye, EyeOff, Mail, Upload, Trash, Phone } from "lucide-react";
import WorkflowTimeline from "./track_changes";

export default function ProfileSettings() {
    const [showPassword, setShowPassword] = useState(false);
    const [emails, setEmails] = useState(["bryan.cranston@mail.com"]);
    const [newEmail, setNewEmail] = useState("");
    const [phone, setPhone] = useState([""]);
    const [newPhone, setNewPhone] = useState("");
    const [bio, setBio] = useState("Software Engineer passionate about technology.");
    const [newBio, setNewBio] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("Bryan");
    const [lastName, setLastName] = useState("Cranston");
    const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/80");
    const [showOtpVerification, setShowOtpVerification] = useState(false);
    const [otp, setOtp] = useState("");
    const [verifiedPhone, setVerifiedPhone] = useState(null);

    const [showEmailVerification, setShowEmailVerification] = useState(false);
    const [showRemovalVerification, setShowRemovalVerification] = useState(false);



    const handleUploadPicture = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfilePicture(imageUrl);
        }
    };

    const handleDeletePicture = () => {
        setProfilePicture("https://via.placeholder.com/80");
    };

    const handlePhoneKeyPress = (event) => {
        if (event.key === "Enter" && newPhone.trim() !== "") {
            setShowOtpVerification(true);
        }
    };

    const handleVerifyOtp = () => {
        if (otp.trim() !== "") {
            setPhone([newPhone]);
            setVerifiedPhone(newPhone);
            setNewPhone("");
            setShowOtpVerification(false);
            setOtp("");
        }
    };
    const handleVerifyEmail = () => {
        if (newEmail.trim() !== "") {
            setShowEmailVerification(true);
        }
    };

    const handleConfirmEmail = () => {
        setShowEmailVerification(false);
        setShowRemovalVerification(true);
    };

    const handleConfirmRemoval = () => {
        setShowRemovalVerification(false);
        setEmails([newEmail]);
        setNewEmail("");
    };

    const handleSavePassword = () => {
        alert("Password saved successfully!");
    };

    return (
        <div className="flex flex-row">
            <div className="w-full mx-auto p-6 basis-4/6">
                <h2 className="text-xl font-semibold mb-4">Account</h2>

                <div className="mb-6 flex items-center gap-4">
                    <img src={profilePicture} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
                    <div>
                        <input type="file" onChange={handleUploadPicture} className="hidden" id="upload" />
                        <label htmlFor="upload" className="mr-2 cursor-pointer bg-gray-200 px-4 py-2 rounded">Upload</label>
                        <button onClick={handleDeletePicture} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block font-medium mb-2">Phone Number</label>
                    {phone.map((number, index) => (
                        <div key={index} className="flex items-center border rounded-md p-3 mb-2">
                            <Phone className="text-gray-500 mr-3" />
                            <input type="text" className="w-full outline-none" value={number} readOnly />
                        </div>
                    ))}
                    <input
                        className="mt-3 w-full p-3 border rounded-md"
                        type="text"
                        placeholder="Enter new phone number"
                        value={newPhone}
                        onChange={(e) => setNewPhone(e.target.value)}
                        onKeyPress={handlePhoneKeyPress}
                    />
                </div>

                {showOtpVerification && (
                    <div className="mb-6 p-4 border rounded-md bg-gray-100">
                        <p className="mb-2">Enter the OTP sent to {newPhone}</p>
                        <input
                            className="w-full p-3 border rounded-md mb-2"
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <button onClick={handleVerifyOtp} className="bg-green-500 text-white px-4 py-2 rounded">Verify OTP</button>
                    </div>
                )}

                {verifiedPhone && (
                    <p className="text-green-600 font-semibold">Phone number {verifiedPhone} has been saved successfully!</p>
                )}
                <div className="mb-6">
                    <label className="block font-medium mb-2">Contact email</label>
                    {emails.map((email, index) => (
                        <div key={index} className="flex items-center border rounded-md p-3 mb-2">
                            <Mail className="text-gray-500 mr-3" />
                            <input type="email" className="w-full outline-none" value={email} readOnly />
                        </div>
                    ))}
                    <input className="mt-3 w-full p-3 border rounded-md" type="email" placeholder="Enter new email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                    <button onClick={handleVerifyEmail} className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">Add another email</button>
                </div>
                {showEmailVerification && (
                    <div className="mb-6 p-4 border rounded-md bg-gray-100">
                        <p className="mb-2">Please verify your new email: {newEmail}</p>
                        <button onClick={handleConfirmEmail} className="bg-green-500 text-white px-4 py-2 rounded">Verify Email</button>
                    </div>
                )}
                {showRemovalVerification && (
                    <div className="mb-6 p-4 border rounded-md bg-gray-100">
                        <p className="mb-2">Are you sure you want to replace your current email?</p>
                        <button onClick={handleConfirmRemoval} className="bg-red-500 text-white px-4 py-2 rounded">Confirm Removal</button>
                    </div>
                )}
                <div className="mb-6">
                    <label className="block font-medium mb-2">Password</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} className="w-full p-3 border rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" />
                        <button className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                    <button onClick={handleSavePassword} className="mt-3 bg-green-500 text-white px-4 py-2 rounded">Save Password</button>
                </div>
                <div className="p-4 flex justify-between items-center border rounded-md">
                    <div className="flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Google_Analytics_Logo.png" alt="Google Analytics" className="w-8 h-8" />
                        <div>
                            <p className="font-medium">Google Analytics</p>
                            <p className="text-gray-600 text-sm">Navigate the Google Analytics interface and reports.</p>
                        </div>
                    </div>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Connected</button>
                </div>
            </div>
            <div className="basis-2/6">
                <WorkflowTimeline />
            </div>
        </div>
    );
}