import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (!state.itens.some((p) => p.id === produto.id)) {
        state.itens.push(produto)
      } else {
        alert('Item já adicionado')
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.favoritos.some((p) => p.id === produto.id)) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
