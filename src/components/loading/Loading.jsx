import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <Spinner className="d-block mx-auto" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
// function Loading({ children, loading, error }) {
//   if (loading) {
//     return (
//       <Spinner className="d-block mx-auto" animation="border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>
//     );
//   }
//   if (error) {
//     return <div>{error.message}</div>;
//   }
//   return <div>{children}</div>;
// }

export default Loading;
