import React, { useState, useEffect } from "react";
import { Container, LinearProgress } from "@mui/material";
import { TelehuertosForm } from "./TelehuertosForm";
import { useCollection } from "../../hooks/useCollection";
import atlasConfig from "../../atlasConfig.json";

const { dataSourceName } = atlasConfig;

export default function Telehuertos() {
  const [loading, setLoading] = useState(true);
  const collection = useCollection({
    cluster: dataSourceName,
    db: localStorage.getItem("REACT_APP_DB"),
    collection: localStorage.getItem("REACT_APP_COLLECTION"),
  });
  const [telehuertosContent, setTelehuertosContent] = useState({});

  useEffect(() => {
    getTelehuertosContent();
  }, [loading, telehuertosContent]);

  const getTelehuertosContent = async () => {
    try {
      const res = await collection.findOne({ key: "key" });
      //console.log("res:", res);
      setTelehuertosContent(res);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      {loading && telehuertosContent ? (
        <LinearProgress />
      ) : (
        <TelehuertosForm data={telehuertosContent} />
      )}
    </Container>
  );
}
