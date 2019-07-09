import React, { useState, useEffect } from "react";

export default ({ code, endpoint }) => {
  const [loading, setLoading] = useState(false);
  const [{ heading, description }, selectAirport] = useState({
    heading: "",
    description: ""
  });

  useEffect(() => {
    if (code) {
      setLoading(true);
      endpoint(code).then(res => {
        selectAirport(res);
        setLoading(false);
      });
    } else {
      selectAirport({ heading: "", description: "" });
    }
  }, [code, endpoint]);

  if (loading) return <h1>Loading...</h1>;
  if (!heading && !description) return null;
  return (
    <div>
      <h1>{heading}</h1>
      <div>{description}</div>
    </div>
  );
};
