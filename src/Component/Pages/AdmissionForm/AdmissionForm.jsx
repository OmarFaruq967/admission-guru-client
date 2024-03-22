import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "../../Shared/Container/Container";
import photo1 from "../../../../public/images/graduate-img/01.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import useColleges from "../../Hook/useColleges";
import { useQuery } from "@tanstack/react-query";

const AdmissionForm = ({ collegeId }) => {
  const { user } = useContext(AuthContext);
  const formRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [college, loading] = useColleges();

  const collegeIdParam = new URLSearchParams(window.location.search).get(
    "collegeId"
  );
 
  // const handleAdmission = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const subject = form.subject.value;
  //   const phoneNumber = form.phoneNumber.value;
  //   const address = form.address.value;
  //   const birthDay = form.birthDay.value;
  //   const image = form.image.value;
  //   const email = user?.email;
  //   const admission = {
  //     name: name,
  //     email,
  //     subject,
  //     phoneNumber,
  //     address,
  //     birthDay,
  //     image,
  //     collegeId: collegeId,
  //   };
  //   console.log(admission);

  //   fetch(`http://localhost:5000/admissions?collegeId=${collegeId}`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(admission),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.insertedId) {
  //         toast.success("Admission successful");
  //         formRef.current.reset();
  //         setFormSubmitted(true);
  //       }
  //     });

  //   // Image Upload
  //   const imageUpload = event.target.image.files[0];
  //   const formData = new FormData();
  //   formData.append("image", imageUpload);

  //   const url = `https://api.imgbb.com/1/upload?key=${
  //     import.meta.env.VITE_IMGBB_KEY
  //   }`;
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imageData) => {
  //       try {
  //         const imageUrl = imageData.data.display_url;
  //       } catch (err) {
  //         console.log(err.message);
  //         toast.error(err.message);
  //       }
  //     });
  // };
  const handleAdmission = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const birthDay = form.birthDay.value;
    const email = user?.email;

    // Check if the user has already applied to the college with the given collegeId

    // Image Upload
    const imageUpload = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", imageUpload);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        const admission = {
          name: name,
          email,
          subject,
          phoneNumber,
          address,
          birthDay,
          image: imageUrl, // Use the imageUrl received from ImgBB API
          collegeId: collegeId,
        };

        fetch(`http://localhost:5000/admissions?collegeId=${collegeId}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(admission),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              toast.success("Admission successful");
              formRef.current.reset();
              setFormSubmitted(true);
            }
          })
          .catch((err) => {
            console.error(err);
            toast.error("Error submitting admission");
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });

      //admission college treu
      fetch(`http://localhost:5000/user/${collegeId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
        })
  };

  // useEffect(()=>{
  //   const url = `http://localhost:5000/college/${collegeId}`
  //   fetch(url, {
  //         method: "PUT",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
            
  //         })
        
  // },[collegeId])


  return (
    <div className="my-10">
      <Container>
        <div></div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="h-[90vh]">
            <img
              className="h-[90vh] rounded-md"
              src="https://source.unsplash.com/640x480/"
              alt=""
            />
          </div>
          <div className=" border-2 border-r-8 border-b-8 rounded-lg border-[#041838] shadow-xl p-5">
            <form ref={formRef} onSubmit={handleAdmission}>
              <div className="md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearanceNone dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className=" md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    defaultValue={user?.email}
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone Number
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="address"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="birthDay"
                    id="birthDay"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="birthDay"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Birth Day
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm text-gray-500 dark:text-gray-300"
                  >
                    Select Image:
                  </label>
                  <input
                    className="
                  block w-full  py-2 mt-2 text-sm text-gray-600 bg-white  rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300
                    required"
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>
                {/* <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="url"
                    name="image"
                    id="image"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="image"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Picture URL
                  </label>
                </div> */}
              </div>
              <button
                type="submit"
                className="text-white  bg-[#041838] hover:bg-[#FBBD23] mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-[#041838] dark:focus:ring-[#FBBD23]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdmissionForm;
