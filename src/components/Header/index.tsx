import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const favoritos = useSelector(
    (state: RootReducer) => state.carrinho.favoritos
  )
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <span>
          {itens.length} itens, valor total:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
