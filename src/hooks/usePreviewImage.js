import React, { useEffect, useState } from "react";

export const usePreviewImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!imageFile) {
      setPreview("images/placeholder.png");
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  return { imageFile, preview, handleFileChange };
};
