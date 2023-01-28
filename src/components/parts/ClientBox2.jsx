import React from "react";
import maria from "../../images/maria.jpg";

export default function ClientBox2() {
  return (
    <div>
      <div>
        <img
          src={maria}
          alt="Mulher branca sorrindo"
          width="40"
          height="40"
          className="mx-4 d-inline-block"
        />
      </div>
      <div>
        <p>Nome: Maria do Carmo Oliveira</p>
        <p>e-mail: mariadocarmooliveira@gmail.com</p>
        <p>telefone: (31) 99997-6128</p>
      </div>
      <div>
        <button>Acessar</button>
      </div>
    </div>
  );
}
