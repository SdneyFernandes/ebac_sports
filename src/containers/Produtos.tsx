import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../store'
import { favoritar } from '../store/reducers/carrinho'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector(
    (state: RootReducer) => state.carrinho.favoritos
  )
  const dispatch = useDispatch()

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produtoId: number) =>
    favoritos.some((favorito) => favorito.id === produtoId)

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
          key={produto.id}
          produto={produto}
          favoritar={() => dispatch(favoritar(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
