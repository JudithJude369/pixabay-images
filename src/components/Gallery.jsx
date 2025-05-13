import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// API = "50258272-21da67c9547761fff04b85ae8";
//
// using react query for data fetching and displaying images
const url =
  "https://pixabay.com/api/?key=50258272-21da67c9547761fff04b85ae8&q=cat&image_type=photo";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });
  console.log(response.data);
  if (response.isPending) {
    return <h4>Loading...</h4>;
  }
  if (response.isError) {
    return <h4>There was error...</h4>;
  }
  if (response.data.length < 1) {
    return <h4>No results found...</h4>;
  }
  return (
    <section className="image-container">
      {response.data.hits.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.webformatURL} alt="" className="img" />
            <div className="text-container">
              <p>
                <strong>Image By: </strong>
                {item.user}
              </p>
              <p>
                {" "}
                <strong>Tags:</strong> {item.tags}
              </p>
              <p>
                <strong>Resolution:</strong> {item.imageHeight} X{" "}
                {item.imageWidth}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
