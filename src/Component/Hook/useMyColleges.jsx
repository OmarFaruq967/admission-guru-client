import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useMyColleges = () => {
  const { user } = useContext(AuthContext);
  const [myColleges, setMyColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `http://localhost:5000/admissions?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyColleges(data);
        setLoading(false);
      });
  }, [user?.email]);

  return [myColleges, loading];
};

export default useMyColleges;
