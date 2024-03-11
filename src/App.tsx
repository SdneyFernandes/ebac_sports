import React from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  function favoritar(produto: Produto): void {
    throw new Error('Function not implemented.')
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritar={favoritar} produtos={[]} favoritos={[]} />
      </div>
    </Provider>
  )
}

export default App
