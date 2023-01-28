import React from "react";
import pedro from "../../images/pedro.jpg";

export default function ClientBox3() {
  return (
    <div>
      <div>
        <img
          src={pedro}
          alt="Homem preto sorrindo"
          width="40"
          height="40"
          className="mx-4 d-inline-block"
        />
      </div>
      <div>
        <p>Nome: Pedro Soares</p>
        <p>e-mail: pedrosoares@gmail.com</p>
        <p>telefone: (31) 99996-6128</p>
      </div>
      <div>
        <button>Acessar</button>
      </div>
    </div>
  );
}
