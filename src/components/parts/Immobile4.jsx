import React from "react";
import imovel4 from "../../images/imovel4.jpg";

export default function Immobile4() {
  return (
    <div>
      <div>
        <img
          src={imovel4}
          alt="Cobertura com ofurô"
          width="40"
          height="40"
          className="mx-4 d-inline-block"
        />
      </div>
      <div>
        <p>Tipo: Cobertura</p>
        <p>Bairro: Sion</p>
        <p>3 quartos</p>
        <p>3 banheiros</p>
        <p>3 vagas</p>
        <p>ofurô e elevador</p>
      </div>
      <div>
        <button>Acessar</button>
      </div>
    </div>
  );
}
