import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { useSelector, useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/favoritos'
import { RootReducer } from '../../store'
import { paraReal } from '../Produto'
import { Produto } from '../../App'

const Header = () => {
  const itensCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favorito.itens
  )
  const dispatch = useDispatch()

  const valorTotal = itensCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  const favoritar = (produto: Produto) => {
    dispatch(adicionar(produto))
  }

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
