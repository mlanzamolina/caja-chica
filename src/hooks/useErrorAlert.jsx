import React from "react";
import MuiAlert from "@mui/material/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function ErrorAlert({ isOpen, message, onClose = () => {} }) {
  return isOpen ? (
    <Alert onClose={onClose} severity="error">
      {message}
    </Alert>
  ) : null;
}
export function InfoAlert({ isOpen, message, onClose = () => {} }) {
  return isOpen ? (
    <Alert onClose={onClose} severity="info">
      {message}
    </Alert>
  ) : null;
}

export function useErrorAlert({ error, clearError, hideAfterMs }) {
  const [showErrorAlert, setShowErrorAlert] = React.useState(false);
  const clearErrorAlert = React.useCallback(() => {
    clearError();
    setShowErrorAlert(false);
  }, [clearError]);

  React.useEffect(() => {
    if (error) {
      setShowErrorAlert(true);
      if (hideAfterMs) {
        const timeout = setTimeout(() => {
          clearErrorAlert();
        }, hideAfterMs);
        return () => {
          clearTimeout(timeout);
        };
      }
    } else {
      setShowErrorAlert(false);
    }
  }, [error, clearErrorAlert, hideAfterMs]);

  return () => (
    <ErrorAlert
      isOpen={showErrorAlert}
      message={error}
      onClose={() => {
        clearErrorAlert();
      }}
    />
  );
}

export function useInfoAlert({ message, clearMessage, hideAfterMs }) {
  const [showInfoAlert, setShowInfoAlert] = React.useState(false);
  const clearInfoAlert = React.useCallback(() => {
    clearMessage();
    setShowInfoAlert(false);
  }, [clearMessage]);

  React.useEffect(() => {
    if (message) {
      setShowInfoAlert(true);
      if (hideAfterMs) {
        const timeout = setTimeout(() => {
          clearInfoAlert();
        }, hideAfterMs);
        return () => {
          clearTimeout(timeout);
        };
      }
    } else {
      setShowInfoAlert(false);
    }
  }, [message, clearInfoAlert, hideAfterMs]);

  return () => (
    <InfoAlert
      isOpen={showInfoAlert}
      message={message}
      onClose={() => {
        clearInfoAlert();
      }}
    />
  );
}
