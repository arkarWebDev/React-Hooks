import { useReducer, useState } from "react";
import { INITIAL_STATE, testReducer } from "./testReducer";

const Test = () => {
  // USING USESTATE

  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);
  //   const [post, setPost] = useState({});

  //   const handleFetch = () => {
  //     setLoading(true);
  //     setError(false);
  //     fetch("https://jsonplaceholder.typicode.com/posts/1")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoading(false);
  //         setPost(data);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setError(true);
  //       });
  //   };

  //  USING REDUCER

  const [state, dispatch] = useReducer(testReducer, INITIAL_STATE);

  const handleFetch = () => {
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAIL" });
      });
  };

  return (
    //USING USESTATE

    <div>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  );
};

export default Test;
