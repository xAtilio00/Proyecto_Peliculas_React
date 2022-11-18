import React from "react";

function Error() {
    return (
        <div variant="success">
            <header style={{ height: 100 }}>
                <br></br>
                <h1 className="text-white">Error</h1>
            </header>
            <body style={{ height: '200%' }} class="bg-dark">
                <h1 className="text-white">404</h1>
                <br></br>
                <h2 className="text-white">La pagina solicitada no existe</h2>
                <br></br>
            </body>
        </div>
    )
}
export default Error;