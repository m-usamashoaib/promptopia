"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/prompts`);
      const data = await response.json();

      setUserPosts(data);
    };
    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      data={userPosts}
      desc={`Welcome to ${userName}'s personalized profile page. Explore exceptional prompts and be inspired by their imagination.`}
    />
  );
};

export default UserProfile;
