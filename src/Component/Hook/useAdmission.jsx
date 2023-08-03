import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const useAdmission = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(`http://localhost:5000/admission/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching college details:", error);
          setLoading(false);
        });
    }, [id]);
  
    console.log("Current data:", data);
    
    return [data, loading];
};

export default useAdmission;
