import React from "react";
import imovel3 from "../../images/imovel3.jpg";

export default function Immobile3() {
  return (
    <div>
      <div>
        <img
          src={imovel3}
          alt="Sala de estar com sofa e televisão"
          width="40"
          height="40"
          className="mx-4 d-inline-block"
        />
      </div>
      <div>
        <p>Tipo: Apartamento</p>
        <p>Bairro: Liberdade</p>
        <p>3 quartos</p>
        <p>2 banheiros</p>
        <p>2 vagas</p>
        <p>varanda</p>
      </div>
      <div>
        <button>Acessar</button>
      </div>
    </div>
  );
}
