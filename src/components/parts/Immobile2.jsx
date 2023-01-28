import React from "react";
import imovel2 from "../../images/imovel2.jpg";

export default function Immobile2() {
  return (
    <div>
      <div>
        <img
          src={imovel2}
          alt="Casa de 3 quartos clara"
          width="40"
          height="40"
          className="mx-4 d-inline-block"
        />
      </div>
      <div>
        <p>Tipo: Casa</p>
        <p>Bairro: Castelo</p>
        <p>3 quartos</p>
        <p>2 banheiros</p>
        <p>1 vaga</p>
      </div>
      <div>
        <button>Acessar</button>
      </div>
    </div>
  );
}
