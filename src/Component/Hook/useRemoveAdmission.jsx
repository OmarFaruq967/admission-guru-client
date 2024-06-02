import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const useRemoveAdmission = () => {
  const { user } = useContext(AuthContext);
  const [myAdmissions, setMyAdmissions] = useState(false);
   // control for button disable or not

  const url = `http://localhost:5000/admissions?email=${user?.email}`; // get user admission list by email
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyAdmissions(data));
  }, [myAdmissions]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/remove/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete admission");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setMyAdmissions(!myAdmissions);
            } else {
              throw new Error("No admission deleted");
            }
          })
          .catch((error) => console.error("Error deleting admission:", error));
      }
    });
  };

  return [handleDelete,];
};

export default useRemoveAdmission;


