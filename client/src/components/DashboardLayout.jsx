// import Sidebar from "./Sidebar";

// function DashboardLayout({ children }) {

//   return (

//     <div
//       style={{
//         display: "flex"
//       }}
//     >

//       <Sidebar />

//       <div
//         style={{
//           marginLeft: "260px",
//           width: "100%",
//           padding: "30px",
//           background: "#f4f6f9",
//           minHeight: "100vh"
//         }}
//       >

//         {children}

//       </div>

//     </div>

//   );

// }

// export default DashboardLayout;




import Sidebar from "./Sidebar";

function DashboardLayout({children}) {

  return (
    <div
      style={{
        display:"flex",
        minHeight:"100vh",
        width:"100%",
        background:"#f8fafc"
      }}
    >

      <Sidebar />

      <main
        style={{
          flex:1,
          padding:"25px",
          minWidth:0
        }}
      >
        {children}
      </main>

    </div>
  );
}

export default DashboardLayout;












// import Sidebar from "./Sidebar";

// function DashboardLayout({ children }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         minHeight: "100vh",
//         background: "#f4f6f9"
//       }}
//     >
//       <Sidebar />

//       <main
//         style={{
//           flex: 1,
//           padding: "30px"
//         }}
//       >
//         {children}
//       </main>
//     </div>
//   );
// }

// export default DashboardLayout;