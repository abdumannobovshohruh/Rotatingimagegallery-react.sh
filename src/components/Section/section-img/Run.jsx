






// import React from 'react'
// import './SectionPage.css'
// // import img1 from './section-img/img.jpg'
// // import img2 from './section-img/img1.jpg'
// // import img3 from './section-img/img2.jpg'

// // export default function Section() {
// //   const imageContainer = document.querySelector(".image-container");
// //   const prevBtn = document.getElementById("prev");
// //   const nextBtn = document.getElementById("next");
  
// //   let x = 0;
  
// //   prevBtn.addEventListener("click", () => {
// //     x = x + 45;
// //     rotate();
// //   });
  
// //   nextBtn.addEventListener("click", () => {
// //     x = x - 45;
// //     rotate();
// //   });
  
// //   function rotate() {
// //     imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
// //   }
  

// //   return (
// //     <div>
// //   <body>
// //   <div class="image-container">
// //       <span style="--i: 1">
// //        <img src={1} alt="" />
// //       </span>
// //       <span style="--i: 2">
// //       <img src={1} alt="" />
// //       </span>
// //       <span style="--i: 3">
// //       <img src={1} alt="" />
// //       </span>
// //       <span style="--i: 4">
// //       <img src={1} alt="" />
// //       </span>
// //       <span style="--i: 5">
// //       <img src={1} alt="" />
// //       </span>
// //       <span style="--i: 6">
// //       <img src={1} alt="" />
// //       </span>
// //       <span style="--i: 7">
// //       <img src={1} alt="" />
// //       </span>
// //       <span style="--i: 8">
// //       <img src={1} alt="" />
// //       </span>
// //     </div>

// //     <div class="btn-container">
// //       <button class="btn" id="prev">Prev</button>
// //       <button class="btn" id="next">Next</button>
// //     </div>
// //   </body>

// //     </div>
// //   )
// // }


// // import React, { useState } from "react";

// // const App = () => {
// //   // Create a state variable to store the current rotation value.
// //   const [x, setX] = useState(0);

// //   // Create a function to handle the click event on the previous button.
// //   const prevBtn = () => {
// //     // Update the rotation value by 45 degrees.
// //     setX(x + 45);
// //   };

// //   // Create a function to handle the click event on the next button.
// //   const nextBtn = () => {
// //     // Update the rotation value by -45 degrees.
// //     setX(x - 45);
// //   };

// //   // Return the React component.
// //   return (
// //     <div>
// //       <div class="image-container">
// //         <img src={img1} alt="" />
// //       </div>

// //       <div class="btn-container">
// //         <button class="btn" onClick={prevBtn}>Prev</button>

// //         <button class="btn" onClick={nextBtn}>Next</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// // import React, { useState } from "react";

// // const App = () => {
// //   // Create a state variable to store the current rotation value.
// //   const [x, setX] = useState(0);

// //   // Create a function to handle the click event on the previous button.
// //   const prevBtn = () => {
// //     // Update the rotation value by 45 degrees.
// //     setX(x + 45);
// //   };

// //   // Create a function to handle the click event on the next button.
// //   const nextBtn = () => {
// //     // Update the rotation value by -45 degrees.
// //     setX(x - 45);
// //   };

// //   // Return the React component.
// //   return (
// //     <div>
// //       <div class="image-container">
// //         <img src={img1} alt="" />
// //       </div>

// //       <div class="btn-container">
// //         <button class="btn" onClick={prevBtn}>Prev</button>

// //         <button class="btn" onClick={nextBtn}>Next</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;
// // import React, { useState } from 'react';
// // import ReactPanZoom from 'react-image-pan-zoom-rotate';

// // const App = () => {
// //   const [image, setImage] = useState({img1});

// //   return (
// //     <div>
// //       <ReactPanZoom
// //         image={image}
// //         onRotate={(angle) => setImage(`${image}?angle=${angle}`)}
// //       />
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const getData = async () => {
//     const res = await fetch("https://randomuser.me/api?results=50");
//     const { results } = await res.json();

//     setUsers(results);
//   };

//   const filterData = () => {
//     setUsers(users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             <img src={user.picture.large} alt={user.name.first} />
//             <div class="user-info">
//               <h4>{user.name.first} {user.name.last}</h4>
//               <p>{user.location.city}, {user.location.country}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));