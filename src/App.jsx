import './App.css'
import Home from './Pages/Home/Home'
import Produtos from './Pages/Produtos/Produtos'
import Categoria from './Pages/Categorias/Categoria'
import Pedidos from './Pages/Pedidos/Pedidos'
import {SingleProduct} from './Pages/SingleProduct/SingleProduct'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='produtos' element={<Produtos />} />
          <Route path='categorias' element={<Categoria />} />
          <Route path='pedidos' element={<Pedidos />} />
          <Route path='singleproduct' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
