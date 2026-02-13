import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            imageSrc="https://tse1.mm.bing.net/th/id/OIP.B79IT46S2eBK_hHYqmoDtAHaId?pid=Api&P=0&h=180" 
            title="Wireless Headphones" 
            price={129.99} 
            stock={true} 
          />
          <ProductCard 
            imageSrc="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/03/asus-rog-azoth-wireless-diy-mechanical-keyboard.jpg" 
            title="Mechanical Keyboard" 
            price={89.99} 
            stock={false} 
          />
          <ProductCard 
            imageSrc="https://tse1.mm.bing.net/th/id/OIP.1xmE5A15BQq1N4PmfROwvgHaHa?pid=Api&P=0&h=180" 
            title="Smart Watch" 
            price={199.99} 
            stock={true} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
