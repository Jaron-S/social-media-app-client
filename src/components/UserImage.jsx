import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  // Check if photos exists locally (for faster loading times)
  function checkFileExists(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", urlToFile, true);
    xhr.send();

    if (xhr.status === "404") {
      return false;
    } else {
      return true;
    }
  }
  console.log(`Picture Path: ${image}`);
  // update post's picture path
  if (!checkFileExists(image)) {
    image = `https://social-media-app-server.onrender.com/assets/${image}`;
  } else {
    image = `/assets/${image}`;
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
