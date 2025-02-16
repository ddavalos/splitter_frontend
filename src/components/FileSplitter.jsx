import React, { useState } from "react";
import FileUpload from "@/components/FileUpload";
//import FileList from "@/components/FileList";

const FileSplitter = () => {
    const [chunks, setChunks] = useState([]); 

    const handleFileSplit = (generatedChunks) => {
        setChunks(generatedChunks);
    };

    return (
        <div>
            <h1>&nbsp;</h1>
            <h2>Subir Archivo</h2>
            <FileUpload onFileSplit={handleFileSplit} />
        </div>
    );
};

export default FileSplitter;