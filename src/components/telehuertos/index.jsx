import React, { useState, useEffect } from "react";
import { Container, LinearProgress, Button, TextField } from "@mui/material";
import { TelehuertosForm } from "./TelehuertosForm";
import { useCollection } from "../../hooks/useCollection";
import atlasConfig from "../../atlasConfig.json";
import { TelehuertosTable } from "./TelehuertosTable";
const { dataSourceName } = atlasConfig;

export default function Telehuertos() {
  const [loading, setLoading] = useState(true);
  const [telehuertosContent, setTelehuertosContent] = useState([]);
  const [fileTypes, setFileTypes] = useState([]);
  // const [startValue, setStartValue] = useState("");
  const collection = useCollection({
    cluster: dataSourceName,
    db: localStorage.getItem("REACT_APP_DB"),
    collection: localStorage.getItem("REACT_APP_COLLECTION"),
  });
  const collectionFileType = useCollection({
    cluster: dataSourceName,
    db: "Telehuertos",
    collection: "file_type",
  });
  useEffect(() => {
    // find with pagination realm
    find();
    //printStudents(1, 10);
  }, []);

  async function find() {
    try {
      const result = await collection.find({});
      const resultFileType = await collectionFileType.find({});
      console.log(`Found a document : ${JSON.stringify(result, 0, 2)}`);
      console.log(`Found a document : ${JSON.stringify(resultFileType, 0, 2)}`);
      setTelehuertosContent(result);
      setFileTypes(resultFileType);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }
  // function printStudents(pageNumber, nPerPage) {
  //   console.log( "Page: " + pageNumber );
  //   collection.find()
  //              .sort( { name: 1 } )
  //              .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
  //              .limit( nPerPage )
  //              .forEach( student => {
  //                console.log( student.name );
  //              } );
  // }

  return (
    <Container>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          {/* <TelehuertosForm data={telehuertosContent} /> */}
          <TelehuertosTable
            huertosData={telehuertosContent}
            huertosFileType={fileTypes}
          />
        </>
      )}
    </Container>
  );
}
