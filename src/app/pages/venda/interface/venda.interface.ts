import { ILoja } from "../../loja/interface/loja.interface";
import { IProduto } from "../../produto/interface/produto.interface";

export interface IVenda {
    id: number;
    loja: ILoja;
    produto: IProduto;
}