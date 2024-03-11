import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho'
import { useGetProdutoQuery } from '../../services/api'

type Props = {
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ favoritar, estaNosFavoritos }: Props) => {
  const { data: produto, isLoading } = useGetProdutoQuery()
  const dispatch = useDispatch()

  if (isLoading || !produto || !produto[0]) return <h2>Aguarde...</h2>

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto[0].imagem} alt={produto[0].nome} />
      </S.Capa>
      <S.Titulo>{produto[0].nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto[0].preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto[0])} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionar(produto[0]))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
