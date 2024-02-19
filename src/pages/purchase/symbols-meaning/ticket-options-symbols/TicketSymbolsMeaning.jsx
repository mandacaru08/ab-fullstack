import { MdGroups } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import MeaningOfSymbols from "../MeaningOfSymbols";

export default function TicketSymbolMeaning() {
  return (
    <MeaningOfSymbols>
      <div style={{ width: "100%" }}>
        <h3>Significado dos Simbolos</h3>
      </div>
      <li>
        <MdGroups style={{ color: "#D77B00" }} />
        <span>Alta demanda esperada</span>
      </li>
      <li>
        <CgDanger />
        <span>
          Informações importantes sobre esta conexão estão atualmente
          disponíveis (por exemplo, a conexão está ameaçada, viagem cancelada).
          Por favor, observe as informações nos detalhes.
        </span>
      </li>
      <li>
        <RiMoneyDollarBoxFill />
        <span>Mostrar nossos melhores preços ¹</span>
      </li>
      <li>
        <h6>¹</h6>
        <span>
          Mostra os melhores preços encontrados aqui para a conexão selecionada
          no dia selecionado. Em alguns casos (tarifas de certas associações de
          transporte, etc.), nosso sistema pode conter uma conexão que vendemos,
          mas não é possível exibir o preço aqui. O preço é mostrado na próxima
          etapa e pode ser menor.
        </span>
      </li>
    </MeaningOfSymbols>
  );
}
