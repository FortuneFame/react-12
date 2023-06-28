import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Typography, TextField } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";

const MyRef = () => {
    const [userId, setUserId] = useState(1);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
                setUserData(res.data);
            })
            .catch(err => {
                console.error(err);
                setUserData(null);
            });
    }, [userId]);

    const handleInputChange = (e) => {
        let value = Number(e.target.value);
        if (value < 1) value = 1;
        if (value > 10) value = 10;
        setUserId(value);
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="userWrapper p-5">
            <div className="d-flex justify-content-center mb-4">
                <TextField
                    label="User ID"
                    type="number"
                    value={userId}
                    onChange={handleInputChange}
                    className="me-3"
                />
            </div>
            <div className="text-center mb-4 p-3">
                <Avatar alt={`User ${userData.id}`} className="mr-3 mb-3" style={{ width: "150px", height: "150px", margin: "0 auto" }}>
                    <img
                        width='150px'
                        height='150px'
                        alt="avatar-user"
                        src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(userData.id) % 100}.jpg`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "../default/default-img.png";
                        }}
                    />
                </Avatar>
                <div className="userInfor">
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Name:</strong> {userData.name}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Login:</strong> {userData.username}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Email:</strong> {userData.email}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Phone:</strong> {userData.phone}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Web:</strong> {userData.website}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-2">
                        <strong>Address:</strong> city: {userData.address.city}, street: {userData.address.street}, suite: {userData.address.suite}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default MyRef;
