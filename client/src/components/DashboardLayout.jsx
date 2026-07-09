import Sidebar from "./Sidebar";
import Footer from "./Footer";

function DashboardLayout({ children }) {

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        background: "#f8fafc"
      }}
    >

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0
        }}
      >

        {/* Page */}

        <main
          style={{
            flex: 1,
            padding: "25px"
          }}
        >
          {children}
        </main>

        {/* Footer */}

        <Footer />

      </div>

    </div>

  );

}

export default DashboardLayout;




// import Sidebar from "./Sidebar";

// function DashboardLayout({children}) {

//   return (
//     <div
//       style={{
//         display:"flex",
//         minHeight:"100vh",
//         width:"100%",
//         background:"#f8fafc"
//       }}
//     >

//       <Sidebar />

//       <main
//         style={{
//           flex:1,
//           padding:"25px",
//           minWidth:0
//         }}
//       >
//         {children}
//       </main>

//     </div>
//   );
// }

// export default DashboardLayout;












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