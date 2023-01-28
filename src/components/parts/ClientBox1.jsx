import React from "react";
import joao from "../../images/joao.jpg";

export default function ClientBox1() {
  return (
    <div>
      <div>
        <img
          src={joao}
          alt="Homem branco sorrindo"
          width="40"
          height="40"
          className="mx-4 d-inline-block"
        />
      </div>
      <div>
        <p>Nome: João da Silva</p>
        <p>e-mail: joaodasilva@gmail.com</p>
        <p>telefone: (31) 99998-6128</p>
      </div>
      <div>
        <button>Acessar</button>
      </div>
    </div>
  );
}
