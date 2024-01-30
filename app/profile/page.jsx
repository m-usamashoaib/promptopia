"use client";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const MyProfile = () => {
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/prompts`, {
        method: "GET",
      });
      const data = await response.json();
      setPrompts(data);
    };
    if (session?.user.id) fetchPrompts();
  }, []);

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
