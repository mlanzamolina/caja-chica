import React, { useEffect } from "react";
import {
  Container,
  Button,
  Typography,
  List,
  LinearProgress,
} from "@mui/material";
import Telehuertos from "./telehuertos";
import CajaChica from "./caja-chica";
import { useApp } from "./RealmApp";
import { useNavigate } from "react-router-dom";

export function TodoItemsPage({ project }) {
  const navigate = useNavigate();
  const { currentUser, logOut } = useApp();

  if (!currentUser) navigate("/");
  const renderProjectContent = () => {
    switch (project) {
      case "caja-chica":
        // return loading && showLoader ? <LinearProgress /> : renderTodoItems();
        return <CajaChica />;
      case "telehuertos":
        return <Telehuertos />;
      case "teleejemplo":
        // Add handling for "teleejemplo" project
        return null; // Replace with the appropriate content
      default:
        return null; // Handle other cases as needed
    }
  };
  return (
    <>
      {currentUser ? (
        <Container className="main-container">
          {renderProjectContent()}
        </Container>
      ) : (
        navigate("/")
      )}
    </>
  );
}
