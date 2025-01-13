import './CsvReader.css';
import React, { useState } from 'react';

function CsvReader() {
    const [dados, setDados] = useState([]);
    const [erro, setErro] = useState(null);

    const recolherArquivoCsv = (event) => {
        const arquivo = event.target.files[0];
        if (arquivo) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                try {
                    const rows = content.split("\n");
                    const parsedData = rows.map((row) => row.split(","));
                    setDados(parsedData);
                    setErro(null);
                } catch (erro) {
                    setErro("Erro ao processar arquivo, tente novamente!");
                }
            };
            reader.readAsText(arquivo);
        } else {
            setErro("Nenhum arquivo foi selecionado.");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Leitor de Arquivo CSV</h2>
            <input type="file" accept=".csv" onChange={recolherArquivoCsv} />
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {dados.length > 0 && (
                <div>
                    <h3>Dados do CSV:</h3>
                    <table border="1" cellPadding="5" className="csv-table">
                        <thead>
                            <tr>
                                {dados[0].map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {dados.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default CsvReader;
