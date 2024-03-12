// details of the user
import React from "react";
import { user } from "../data/user";
import Image from "next/image";
import picture from "/public/images.jpeg";

const UserProfile = () => {
  return (
    <div className="container user-profile">
      <Image src={picture} alt="no imgg" className="user-picture"></Image>
      <div className="user-details">
        <h1 className="user-name">{user.name}</h1>
        <p className="user-info">Date of Birth: {user.dateOfBirth}</p>
        <p className="user-info">Phone Number: {user.phoneNumber}</p>
        <p className="user-info">Email: {user.email}</p>
        <p className="user-info">Address: {user.address}</p>
        <p className="user-info">
          LinkedIn:{" "}
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
            {user.name}'s LinkedIn
          </a>
        </p>
        <p className="user-info">
          Twitter:{" "}
          <a href={user.twitter} target="_blank" rel="noopener noreferrer">
            {user.name}'s Twitter
          </a>
        </p>
        <p className="user-info">
          LeetCode:{" "}
          <a href={user.leetcode} target="_blank" rel="noopener noreferrer">
            {user.name}'s LeetCode
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
