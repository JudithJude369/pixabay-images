import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context/context";

// using react query for data fetching and displaying images

const url = `https://pixabay.com/api/?key=${
  import.meta.env.VITE_API_KEY
}&image_type=photo&pretty=true`;
const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      // const result = await axios.get(url);
      const result = await axios.get(`${url}&q=${searchTerm}`);
      return result.data;
    },
  });
  console.log(response.data);
  if (response.isPending) {
    return <h4 style={{ margin: "6rem" }}>Loading...</h4>;
  }
  if (response.isError) {
    return <h4 style={{ margin: "6rem" }}>There was error...</h4>;
  }
  if (response.data.hits.length < 1) {
    return <h4 style={{ margin: "6rem" }}>No results found...</h4>;
  }
  return (
    <section className="image-container">
      {response.data.hits.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.webformatURL} alt="" className="img" />
            <div className="text-container">
              <p style={{ marginTop: "0.7rem" }}>
                <strong>Image By: </strong>
                {item.user}
              </p>
              <p style={{ marginTop: "0.7rem" }}>
                <strong>Tags:</strong> {item.tags}
              </p>
              <p style={{ marginTop: "0.7rem" }}>
                <strong>Resolution:</strong> {item.webformatHeight} X{" "}
                {item.webformatWidth}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
