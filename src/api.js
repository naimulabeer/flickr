import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID tz85yzqLl9B0cpgcHAJ0ACeq75zjI-M3rTqAXhjHB7I",
    },
    params: {
      query: "cars",
    },
  });
  console.log(response);

  return response;
};

export default searchImages;
