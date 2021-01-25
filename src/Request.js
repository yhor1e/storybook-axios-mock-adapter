import { useState, useEffect } from "react";
import axios from "axios";

function Request() {
  const [req, setReq] = useState("");

  useEffect(() => {
    axios
      .get("/users")
      .then(function (response) {
        console.log(response);
        setReq(response.status);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <p>Request Test</p>
      <p>Response Status: {req}</p>
    </div>
  );
}
export default Request;
