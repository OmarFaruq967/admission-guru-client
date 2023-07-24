// import React, { useEffect, useState } from 'react';

// const useAdmission = () => {
//     const [college, setCollege]= useState ([]);
//     const [ loading, setLoading] = useState (true);

//     useEffect(()=>{
//         const url = "https://admission-guru-server-eta.vercel.app/admission";
//         fetch(url)
//         .then((res)=> res.json())
//         .then((data)=>{
//            setCollege (data);
//             setLoading (false)
//         })

//     },[])

//     return [ college, loading];
// };

// export default useAdmission;
