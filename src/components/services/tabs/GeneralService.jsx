// import React from "react";
// import '../'
// import standard from '../../../assets/Standard_service.webp'

// const GeneralService = () => {
//   return (
//     <div>
//       <div className="h4-tags">
//     <h4>
//       Now hassle-free and reliable car service in Bangalore right at your doorstep.
//     </h4>
//     <h4>
//       CARZBAY cares for your car the way you do. And we provide the best car service with skilled technicians, auto-experts, and use automated tools and machinery.
//     </h4>
//       </div>
//       <div className="service-type">
//     <div className="card-div">
//       <div>
//         <h1 className="h1-tag">Standard Service</h1>
//       </div>
//       <div className="standard-service">
//         <div className="ul-tags">
//           <ul >
//             <li>Engine Oil Replaced</li>
//             <li>Oil Filter Replaced</li>
//             <li>Air Filter Cleaning</li>
//             <li>Coolant - Top up</li>
//             <li>Brake Oil - Top up</li>
//           </ul>
//           <ul>
//             <li>Battery Water Top up</li>
//             <li>Wiper Fluid Top Up</li>
//             <li>Front Brake Pad Service</li>
//             <li>Rear Brake Shoes Service</li>
//             <li>Caliper Greasing</li>
//             </ul>
//             <ul>
//             <li>AC Cooling Check-Up</li>
//             <li>Heater/Spark Plugs-Check up</li>
//             <li>Interior Vacuuming</li>
//             <li>Water Washing</li>
//             <li>Complete Electrical Check up</li>
//             <li>All Labour Included</li>
//           </ul>
//         </div>
//         <div className="img-btn-div">
//           <img src={standard} alt="" />
//           <button>Select Car</button>
//         </div>
//       </div>
//     </div>
//     <div className="card-div">
//       <div>
//         <h3>Standard Service</h3>
//       </div>
//       <div className="standard-service">
//         <div className="ul-tags">
//           <ul >
//             <li>Engine Oil Replaced</li>
//             <li>Oil Filter Replaced</li>
//             <li>Air Filter Cleaning</li>
//             <li>Coolant - Top up</li>
//             <li>Brake Oil - Top up</li>
//           </ul>
//           <ul>
//             <li>Battery Water Top up</li>
//             <li>Wiper Fluid Top Up</li>
//             <li>Front Brake Pad Service</li>
//             <li>Rear Brake Shoes Service</li>
//             <li>Caliper Greasing</li>
//             </ul>
//             <ul>
//             <li>AC Cooling Check-Up</li>
//             <li>Heater/Spark Plugs-Check up</li>
//             <li>Interior Vacuuming</li>
//             <li>Water Washing</li>
//             <li>Complete Electrical Check up</li>
//             <li>All Labour Included</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//       </div>

//     <div className="benefit-div">
//       <div>
//         <h2>
//           <span className="benefit-span">Benefit</span>
//           <span> OF Car Service with CARZBAY</span>
//         </h2>
//       </div>
//       <div>
//         <div>
//           <ul className="no-bullets">
//             <li>
//               <strong>Convenience & Relief</strong>
//               <ul>
//                 <li>No need to step out. Car service right at your doorstep</li>
//                 <li>Multiple easy online payment options</li>
//                 <li>Quick Delivery as we understand your busy schedule and value of time</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Absolute Honesty</strong>
//               <ul>
//                 <li>With our open procedures and real-time information</li>
//                 <li>Transparent pricing. So, no worries</li>
//                 <li>Complete analysis and genuine spare parts</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Quality Control</strong>
//               <ul>
//                 <li>High-quality services with highly-trained technicians.</li>
//                 <li>Greatest auto servicing experience by using authentic spare parts</li>
//                 <li>Latest and Automated Tools & Equipments </li>
//                 <li>Best Engine Oil </li>
//                 <li>Ensured Service Warranty </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>

//     <div>
//       <div>
//         <h2>
//           <span>Frequently Asked Questions</span>
//           <span> (FAQs)</span>
//         </h2>
//       </div>
//       <div id="accordion">
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
//             <strong>Which Engine oil do you use for Standard Service and Comprehensive Service?</strong>
//           </button>
//         </h2>
//         <div id="collapseOne" className="accordion-collapse collapse show">
//           <div className="accordion-body">
//             We generally use Total engine oil with the grades 10W30 for mineral and 5W40/5W30 for synthetic. However, for specific needs, we do change oil brands as well. Automovill has a pan-India tie-up with all major oil brands.
//           </div>
//         </div>
//       </div>

//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
//             <strong>How much time does it take to get my General Service done?</strong>
//           </button>
//         </h2>
//         <div id="collapseTwo" className="accordion-collapse collapse">
//           <div className="accordion-body">
//             Including pick up and drop, it takes 6 hours to get the general service of a car done. It also includes a high-quality car-wash with interior vacuuming and dashboard polishing.
//           </div>
//         </div>
//       </div>

//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
//             <strong>Any extra charges apart from the mentioned charges in the Services Page?</strong>
//           </button>
//         </h2>
//         <div id="collapseThree" className="accordion-collapse collapse">
//           <div className="accordion-body">
//             There is no change in the prices that are mentioned in the Services Page. The prices are GST-inclusive. For any additional work or cost that we may come across while inspecting your car, we shall notify you for your consent before proceeding with that work.
//           </div>
//         </div>
//       </div>

//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
//             <strong>Do I get any warranty for the Service that’s done?</strong>
//           </button>
//         </h2>
//         <div id="collapseFour" className="accordion-collapse collapse">
//           <div className="accordion-body">
//             You get 6 months or 5000 KMs (whichever is earlier) warranty for any part which is replaced.
//           </div>
//         </div>
//       </div>

//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
//             <strong>What if there are issues after servicing i.e. ‘post-service’?</strong>
//           </button>
//         </h2>
//         <div id="collapseFive" className="accordion-collapse collapse">
//           <div className="accordion-body">
//             Automovill attends to and solves any issue which is found ‘post-service’. You are eligible for a free inspection post service-completion or if any issue is found ‘post-service’.
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   </div>
//   );
// };

// export default GeneralService;
