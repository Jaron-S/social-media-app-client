import { Box } from "@mui/material";

const UserImage = ({ picturePath, size = "60px" }) => {
  // check if photo exists locally (for faster loading times)
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
  //debugger;
  console.log(`PicturePath (UserImage): ${picturePath}`);
  // update user picture path
  if (!checkFileExists(picturePath)) {
    picturePath = `https://social-media-app-server.onrender.com/assets/${picturePath}`;
  } else {
    picturePath = `/assets/${picturePath}`;
  }

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={picturePath}
      />
    </Box>
  );
};

export default UserImage;
