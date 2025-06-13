"use client"
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const misLikes = likes ? `💖 ${likes}` : "Like!"

  return (
    <Button onClick={()=>setLikes(likes+1)}>
      {misLikes}
    </Button>
  );
};

export default LikeButton;
