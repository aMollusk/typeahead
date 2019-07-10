import React, { useState, useEffect } from "react";
import { useDebounce } from "../../utils";

export default ({
  code,
  endpoint,
  onChange,
  displayAirport: { heading, description }
}) => {
  const [loading, setLoading] = useState(false);
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    if (code) {
      const now = Date.now();
      setLoading(true);
      endpoint(code).then(res => {
        if (now > timestamp) {
          onChange(res);
          setTimestamp(now);
          setLoading(false);
        }
      });
    } else {
      onChange({ heading: "", description: "" });
      setLoading(false);
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
