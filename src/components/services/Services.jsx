// import React, { useState } from 'react';
// import GeneralService from '../services/tabs/GeneralService';
// import DentingPainting from '../services/tabs/DentingPainting';
// import CarACService from '../services/tabs/CarACService';
// import CarCheckup from '../services/tabs/CarCheckup';
// import BatteryTyre from '../services/tabs/BatteryTyre'

// import './Services.css'




// const Services = () => {
//   const [activeTab, setActiveTab] = useState('generalService');

//   const renderSelectedComponent = () => {
//     switch (activeTab) {
//       case 'generalService':
//         return <GeneralService />;
//       case 'dentingPainting':
//         return <DentingPainting />;
//       case 'carACService':
//         return <CarACService />;
//       case 'carCheckup':
//         return <CarCheckup />;
//       case 'batteryTyre':
//         return <BatteryTyre />;
//       default:
//         return null;
//     }
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div  className='services-container'>
//       <Headersub/>
//       <div className="tabs-container">
//         <div
//           className={`tab ${activeTab === 'generalService' && 'active'}`}
//           onClick={() => handleTabClick('generalService')}
//         >
//           <img src={general} alt="" width={30}/>
//           General Service
//         </div>
//         <div
//           className={`tab ${activeTab === 'dentingPainting' && 'active'}`}
//           onClick={() => handleTabClick('dentingPainting')}
//         >
//           <img src={denting} alt="" width={30}/>
//           Denting & Painting
//         </div>
//         <div
//           className={`tab ${activeTab === 'carACService' && 'active'}`}
//           onClick={() => handleTabClick('carACService')}
//         >
//           <img src={ac} alt="" width={30}/>
//           Car AC Services
//         </div>
//         <div
//           className={`tab ${activeTab === 'carCheckup' && 'active'}`}
//           onClick={() => handleTabClick('carCheckup')}
//         >
//           <img src={accident} alt="" width={30}/>
//           Car Checkup
//         </div>
//         <div
//           className={`tab ${activeTab === 'batteryTyre' && 'active'}`}
//           onClick={() => handleTabClick('batteryTyre')}
//         >
//           <img src={battery} alt="" width={30}/>
//           Battery/Tyre
//         </div>
//       </div>
//       {renderSelectedComponent()}
//     </div>
//   );
// };

// export default Services;
