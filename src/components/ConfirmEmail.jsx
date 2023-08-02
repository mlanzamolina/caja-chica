// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// //import { confirmEmail } from "mongodb-atlas-auth";
// import { useApp } from "./RealmApp";

// const ConfirmEmail = () => {
//     const app = useApp();
//   const [token, setToken] = useState("");
//   const [tokenId, setTokenId] = useState("");

//   const { tokenParam, tokenIdParam } = useParams();

//   useEffect(() => {
//     if (tokenParam && tokenIdParam) {
//       setToken(tokenParam);
//       setTokenId(tokenIdParam);
//     }
//   }, [tokenParam, tokenIdParam]);

//   const handleConfirm = async () => {
//     try {
//       await app.emailPasswordAuth.confirmEmail(token, tokenId);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Confirm Email</h1>
//       <p>
//         Please enter the token and token ID that were sent to your email address.
//       </p>
//       <input
//         type="text"
//         placeholder="Token"
//         onChange={event => setToken(event.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Token ID"
//         onChange={event => setTokenId(event.target.value)}
//       />
//       <button onClick={handleConfirm}>Confirm</button>
//     </div>
//   );
// };

// export default ConfirmEmail;
