import React, { chunks } from "react";

const FileList = ({ chunks }) => {
    return (
        <div>
            <h3>Archivos Generados:</h3>
            {chunks.length <= 0 ? (
                <p>No hay archivos generados aún.</p>
            ) : (
                <ul>
                    {chunks.map((chunk, index) => (
                        <li key={index}>
                            <a href={`http://localhost:8080/api/files/${chunk}`} download>
                                {chunk}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FileList;
