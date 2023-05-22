import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID tz85yzqLl9B0cpgcHAJ0ACeq75zjI-M3rTqAXhjHB7I",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
