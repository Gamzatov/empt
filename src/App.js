import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation';
import { Filter } from './components/Filter/Filter'
import './App.css';
import { Product } from './components/Product/Product';
const data = [
  {
    id:1,
    category: "Sporting Goods",
    price: 257,
    image: require("./assets/products/huaweiP30.png"),
    brand: 'Huawei',
    material: 'Plastic',
    type: 'Phone',
    design: 'Modern',
    name: "HUAWEI P30 Lite 6/128GB Black",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id:2,
    category: "Sporting Goods",
    price: 312,
    brand: 'Huawei',
    type: 'Notepad',
    design: 'Modern',
    material: 'Plastic',
    image: require("./assets/products/matePad.png"),
    name: "Huawei MatePad 10.4 4/128Gb Wi-Fi Grey",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id:3,
    category: "Sporting Goods",
    price: 320,
    brand: 'Apple',
    design: 'Modern',
    type: 'Smart Watch',
    material: 'Aluminium',
    image: require("./assets/products/appleWatch.png"),
    name: "Apple Watch SE (2022) GPS 40mm Starlight ",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id:4,
    category: "Electronics",
    price: 804,
    brand: 'Apple',
    type: 'Phone',
    design: 'Modern',
    material: 'Aluminium',
    image: require("./assets/products/iphone.png"),
    name: "Apple iPhone 12 128GB Red",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id:5,
    category: "Electronics",
    price: 2980,
    design: 'Modern',
    brand: 'Apple',
    material: 'Aluminium',
    type: 'Notebook',
    image: require("./assets/products/laptop.png"),
    name: 'Laptop Apple MacBook Pro 16" M2 Pro 512GB 2023',
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];
const filterBrands = ['Samsung', 'Lenovo', 'Pocco', 'Huawei', 'Apple']

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Navigation />
      
        <Routes>
          <Route path='/empt' element={<Main products={data} brands={filterBrands} />}></Route>
          <Route path='/product/:id' element={<Product products={data} />} ></Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
