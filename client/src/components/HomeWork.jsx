









// import { FaUtensils, FaMotorcycle, FaCertificate, FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import zomatoImg from "../assets/zomato.png";
// import swiggyImg from "../assets/swiggynew2.png";
// import fssaiImg from "../assets/fssai.png";

// const services = [
//   {
//     title: "Zomato Setup",
//     icon: <FaUtensils size={24} />,
//     image: zomatoImg,
//     path: "/course/zomato-onboarding",
//   },
//   {
//     title: "Swiggy Setup",
//     icon: <FaMotorcycle size={24} />,
//     image: swiggyImg,
//     path: "/course/swiggy-onboarding",
//   },
//   {
//     title: "FSSAI License",
//     icon: <FaCertificate size={24} />,
//     image: fssaiImg,
//     path: "/course/fssai-onboarding",
//   },
// ];

// const HomeServices = () => {
//   return (
//     <div className="relative py-20 px-4 sm:px-8 md:px-16 overflow-hidden bg-gradient-to-br from-sky-200 via-white to-sky-100">
//       {/* Background Circles */}
//       <div className="absolute w-80 h-80 bg-sky-300 rounded-full opacity-30 top-[-60px] left-[-60px] blur-3xl"></div>
//       <div className="absolute w-72 h-72 bg-purple-300 rounded-full opacity-30 bottom-[-60px] right-[-60px] blur-3xl"></div>

//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-extrabold text-purple-800">
//           Get to <span className="text-blue-600">Know</span> Our Services
//         </h2>
//         <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
//           Everything you need to launch and grow your food business — from online platforms to government licensing.
//         </p>
//       </div>

//       {/* First Two Cards */}
//       <div className="flex flex-col md:flex-row md:space-x-6 gap-y-10 mb-12">
//         {services.slice(0, 2).map((service, idx) => (
//           <Link to={service.path} key={idx} className="flex-1 group">
//             <div
//               className={`relative h-80 sm:h-96 md:h-[460px] rounded-3xl shadow-xl border border-white/30 
//                           bg-gradient-to-br from-sky-200 via-white to-sky-100 bg-opacity-80 
//                           backdrop-blur-sm p-4 hover:scale-[1.03] transition-transform duration-500`}
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-full max-h-full object-contain rounded-xl"
//               />
//               <div className="absolute bottom-4 left-4 text-gray-800 text-base sm:text-lg md:text-xl font-bold flex items-center gap-2 drop-shadow-sm">
//                 <span>{service.icon}</span> {service.title}
//               </div>
//               <div className="absolute bottom-4 right-4">
//                 <div className="bg-blue-400 group-hover:bg-blue-500 text-white p-3 rounded-full shadow-md transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
//                   <FaArrowRight />
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* FSSAI Card */}
//       <div className="mb-12 flex justify-center">
//         <Link to={services[2].path} className="w-full sm:w-[90%] md:w-[70%] group">
//           <div
//             className={`relative h-80 sm:h-96 md:h-[420px] rounded-3xl shadow-xl border border-white/30 
//                         bg-gradient-to-br from-sky-200 via-white to-sky-100 bg-opacity-80 
//                         backdrop-blur-sm p-4 hover:scale-[1.03] transition-transform duration-500`}
//           >
//             <img
//               src={services[2].image}
//               alt={services[2].title}
//               className="w-full h-full max-h-full object-contain rounded-xl"
//             />
//             <div className="absolute bottom-4 left-4 text-gray-800 text-base sm:text-lg md:text-xl font-bold flex items-center gap-2 drop-shadow-sm">
//               <span>{services[2].icon}</span> {services[2].title}
//             </div>
//             <div className="absolute bottom-4 right-4">
//               <div className="bg-blue-400 group-hover:bg-blue-500 text-white p-3 rounded-full shadow-md transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
//                 <FaArrowRight />
//               </div>
//             </div>
//           </div>
//         </Link>
//       </div>

//       {/* Show More Button */}
//       {/* <div className="text-center mt-6">
//         <Link to="/services">
//           <button className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
//             Explore All Services
//             <span className="inline-block transform transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               <FaArrowRight />
//             </span>
//           </button>
//         </Link>
//       </div> */}

//       {/* Show More Button */}
// <div className="text-center mt-6">
//   <Link to="/services">
//     {/* <button className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
//       Explore All Services
//       <span className="inline-block transform transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//         <FaArrowRight />
//       </span>
//     </button> */}
//   </Link>
// </div>

//     </div>
//   );
// };

// export default HomeServices;












import { FaUtensils, FaMotorcycle, FaCertificate, FaLayerGroup, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import zomatoImg from "../assets/zomato.png";
import swiggyImg from "../assets/swiggynew2.png";
import fssaiImg from "../assets/fssai.png";
import comboImg from "../assets/combo.png"; // ✅ ADD THIS

const services = [

  {
    title: "FSSAI License",
    icon: <FaCertificate size={24} />,
    image: fssaiImg,
    path: "/course/fssai-onboarding",
  },
  {
    title: "Swiggy + Zomato Combo",
    icon: <FaLayerGroup size={24} />,
    image: comboImg,
    path: "/course/combo-onboarding", // ✅ Make sure route exists
  },

    {
    title: "Zomato Setup",
    icon: <FaUtensils size={24} />,
    image: zomatoImg,
    path: "/course/zomato-onboarding",
  },
  {
    title: "Swiggy Setup",
    icon: <FaMotorcycle size={24} />,
    image: swiggyImg,
    path: "/course/swiggy-onboarding",
  },
];

const HomeServices = () => {
  return (
    <div className="relative py-20 px-4 sm:px-8 md:px-16 overflow-hidden bg-gradient-to-br from-sky-200 via-white to-sky-100">
      
      {/* Background Effects */}
      <div className="absolute w-80 h-80 bg-sky-300 rounded-full opacity-30 top-[-60px] left-[-60px] blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full opacity-30 bottom-[-60px] right-[-60px] blur-3xl"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-purple-800">
          Get to <span className="text-blue-600">Know</span> Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Everything you need to launch and grow your food business — from online platforms to government licensing.
        </p>
      </div>

      {/* ALL SERVICES GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, idx) => (
          <Link to={service.path} key={idx} className="group">
            <div
              className="relative h-80 sm:h-96 md:h-[420px] rounded-3xl shadow-xl border border-white/30 
                         bg-gradient-to-br from-sky-200 via-white to-sky-100 
                         backdrop-blur-sm p-4 
                         hover:scale-[1.03] transition-transform duration-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain rounded-xl"
              />

              {/* Title */}
              <div className="absolute bottom-4 left-4 text-gray-800 text-base sm:text-lg md:text-xl font-bold flex items-center gap-2 drop-shadow-sm">
                <span>{service.icon}</span> {service.title}
              </div>

              {/* Arrow Button */}
              <div className="absolute bottom-4 right-4">
                <div className="bg-blue-400 group-hover:bg-blue-500 text-white p-3 rounded-full shadow-md transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Explore All Button */}
      {/* <div className="text-center mt-14">
        <Link to="/services">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Explore All Services
            <FaArrowRight />
          </button>
        </Link>
      </div> */}

    </div>
  );
};

export default HomeServices;


