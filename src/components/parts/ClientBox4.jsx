import React from "react";
import ana from "../../images/ana.jpg";

export default function ClientBox4() {
  return (
    <div>
      <div>
        <img
          src={maria}
          alt="Mulher preta sorrindo"
          width="40"
          height="40"
          className="mx-4 d-inline-block"
        />
      </div>
      <div>
        <p>Nome: Ana Pereira</p>
        <p>e-mail: anapereira@gmail.com</p>
        <p>telefone: (31) 99995-6128</p>
      </div>
      <div>
        <button>Acessar</button>
      </div>
    </div>
  );
}
