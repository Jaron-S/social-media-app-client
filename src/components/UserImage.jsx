import { Box } from "@mui/material";
import fileNames from "data/fileNames";

const UserImage = ({ image, size = "60px" }) => {
  // Check if photos exists locally and update post's picture path
  // (for faster loading times)
  if (fileNames.find((name) => name === image)) {
    console.log(`getting local asset: ${image}`);
    image = `/assets/${image}`;
  } else {
    console.log(`sending get request: ${image}`);
    image = `https://social-media-app-server.onrender.com/assets/${image}`;
  }

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={image}
      />
    </Box>
  );
};

export default UserImage;
