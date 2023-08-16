import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { WelcomePage } from "./WelcomePage";
import { TodoItemsPage } from "./TodoItemsPage";
import { AppProvider, useApp } from "./RealmApp";
import { ThemeProvider } from "./Theme";
import { AppName } from "./AppName";
import atlasConfig from "../atlasConfig.json";
import "./App.css";
const { appId } = atlasConfig;

export default function ProvidedApp() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppProvider appId={appId}>
          <App />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function App() {
  const { currentUser, logOut } = useApp();

  const navigate = useNavigate();
  return (
    <div className="App">
      {currentUser && (
        <AppBar position="sticky">
          <Toolbar>
            <AppName />
            <Button
              variant="contained"
              color="secondary"
              onClick={async () => {
                await logOut();
                navigate("/");
              }}
            >
              <Typography variant="button">Log Out</Typography>
            </Button>
          </Toolbar>
        </AppBar>
      )}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path={`/admin`}
          element={<TodoItemsPage project={window.env.REACT_APP_NAME} />}
        />
      </Routes>
    </div>
  );
}

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AppBar, Toolbar, Button, Typography } from "@mui/material";
// import { WelcomePage } from "./WelcomePage";
// import { TodoItemsPage } from "./TodoItemsPage";
// import { AppProvider, useApp } from "./RealmApp";
// import { ThemeProvider } from "./Theme";
// import { AppName } from "./AppName";
// import atlasConfig from "../atlasConfig.json";
// import "./App.css";

// const { appId } = atlasConfig;

// export default function ProvidedApp() {
//   return (
//     <ThemeProvider>
//       <AppProvider appId={appId}>
//         <div className="App">
//           <App />
//           <BrowserRouter basename="/caja-chica">
//             <Routes>
//               <Route path="/" element={<WelcomePage />} />
//               <Route path="/todo-items" element={<TodoItemsPage />} />
//             </Routes>
//           </BrowserRouter>
//         </div>
//       </AppProvider>
//     </ThemeProvider>
//   );
// }

// function App() {
//   const { currentUser, logOut } = useApp();
//   return (
//     <AppBar position="sticky">
//       <Toolbar>
//         <AppName />
//         {currentUser ? (
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={async () => {
//               await logOut();
//             }}
//           >
//             <Typography variant="button">Log Out</Typography>
//           </Button>
//         ) : null}
//       </Toolbar>
//     </AppBar>
//   );
// }
