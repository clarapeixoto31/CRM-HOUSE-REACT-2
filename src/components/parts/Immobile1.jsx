import React from "react";
import imovel1 from "../../images/imovel1.jpg";

export default function Immobile1() {
  return (
    <div>
      <div>
        <img
          src={imovel1}
          alt="Casa luxo 2 andares escura"
          width="40"
          height="40"
          className="mx-4 d-inline-block"
        />
      </div>
      <div>
        <p>Tipo: Casa</p>
        <p>Bairro: Belvedere</p>
        <p>4 quartos</p>
        <p>3 banheiros</p>
        <p>3 vagas</p>
        <p>espaço gourmet</p>
      </div>
      <div>
        <button>Acessar</button>
      </div>
    </div>
  );
}
