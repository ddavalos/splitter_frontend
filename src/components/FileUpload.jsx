import React, { useState } from "react";

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileChunks, setfileChunks] = useState(1024 * 1024); // 1MB por defecto
    const [chunks, setChunks] = useState([]); // Almacena los archivos generados
    const [ChunksNames, setChunksNames] = useState([]);
    const [chunkSize, setChunkSize] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleChunkSizeChange = (event) => {
        setChunkSize(Number(fileChunks));
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("chunkSize", Number(fileChunks));

        try {
            const response = await fetch('http://localhost:8080/api/split', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log("Datos:",data);
            // Asegurar que data.chunks sea un array antes de asignarlo al estado
            if (Array.isArray(data)) {
                /*setChunks(data.map(chunk => ({
                    name: chunk,
                    url: 'http://localhost:8080/api/files/'+{chunk} // URL para descargar
                })));*/
                setChunks(data);
            } else {
                console.log("Error2:");
                setChunks([]); // Evita que sea undefined
            }
        } catch (error) {
            console.error("Error al dividir el archivo:", error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {/*<input
                type="number"
                value={chunkSize}
                onChange={handleChunkSizeChange}
                placeholder="Tamaño de segmento (bytes)"
            />*/}
            <button onClick={handleUpload}>Subir y Dividir</button>

            {/* Mostrar enlaces de descarga si hay archivos generados */}
            { Array.isArray(chunks) && chunks.length > 0 ? (
                <div>
                    <h3>Archivos generados:</h3>
                    <dl>
                        {chunks.map((chunk ,index) => (
                            <dd key={index}>
                                <a href={`http://localhost:8080/api/files/${chunk}`} download>{chunk}</a>
                            </dd>
                        ))}
                    </dl>
                </div>
            ):(
                <p>No hay archivos generados aún.</p>
            )}
        </div>
    );
};

export default FileUpload;