import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from "../../Hooks/ProductCard";
import LoadingGif from "../../assets/loading.gif";

function Shop() {
    const [originalProducts, setOriginalProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState(''); // Nuevo estado para la opción de orden
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        let apiUrl = 'https://fakestoreapi.com/products';

        if (Object.keys(params).length > 0) {
            apiUrl = `https://fakestoreapi.com/products/category/${params.category}`;
        }

        fetch(apiUrl)
            .then((response) => response.json())
            .then((response) => {
                setOriginalProducts([...response]);
                setProducts([...response]);
                setIsLoading(false);
            });
    }, [params]);

    useEffect(() => {
        let filteredProducts = [...originalProducts];

        if (minPrice !== '') {
            filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
        }
        if (maxPrice !== '') {
            filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
        }
        if (searchTerm !== '') {
            filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        switch (sortOption) {
            case 'price-min-to-max':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-max-to-min':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'alphabetic':
                filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'alphabetic-inverted':
                filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            default:
                break;
        }

        setProducts(filteredProducts);
    }, [minPrice, maxPrice, searchTerm, originalProducts, sortOption]);

    return (
        <>
            <div>
                <div>
                    <label htmlFor="minPrice">Min Price:</label>
                    <input type="number" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="maxPrice">Max Price:</label>
                    <input type="number" id="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="searchTerm">Search:</label>
                    <input type="text" id="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="sortOption">Sort by:</label>
                    <select id="sortOption" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="">Select an option</option>
                        <option value="price-min-to-max">Price (Min to Max)</option>
                        <option value="price-max-to-min">Price (Max to Min)</option>
                        <option value="alphabetic">Alphabetic (A-Z)</option>
                        <option value="alphabetic-inverted">Alphabetic (Z-A)</option>
                    </select>
                </div>
            </div>

            {isLoading &&
                <div>
                    <img src={LoadingGif} alt="Loading" />
                    <p>Loading...</p>
                </div>
            }
            {!isLoading &&
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            }
        </>
    )
}

export default Shop;
