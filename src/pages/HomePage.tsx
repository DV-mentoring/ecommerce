import {FC, useEffect, useState} from 'react';
import Header from "../components/header/Header.tsx"
import ReviewCard from "../components/review/ReviewCard.tsx";
import axios from "axios";
import AuthForm from "../components/authForm/AuthForm.tsx";

const HomePage: FC = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const API_TOKEN = import.meta.env.VITE_API_TOKEN;
    const [subcategories, setSubcategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/subcategories`, {
                    headers: {
                        Authorization: "Bearer "+ API_TOKEN,
                    },
                });
                setSubcategories(response.data.data);
                console.log('Данные:', response.data);
                setLoading(false)
            } catch (err) {
                console.error('Ошибка при запросе:', err.response?.data || err.message);
                setLoading(false)
            }
        };
        fetchData();
    }, [API_TOKEN, API_URL]);

    if (loading) return <p>Загрузка...</p>;

    return (

        <>
            <Header/>
            <main>
                <ReviewCard
                    username={"Matfey Gribakin"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, at cupiditate eos facilis hic incidunt ipsum iste iure minima mollitia nulla porro possimus praesentium quaerat, quod rerum sit, soluta vitae."}
                    rating={4}
                    month={"hello"}
                    day={20}
                    year={2002}
                />

                <ul>
                    {subcategories.map((subcategory) => (
                        <li key={subcategory.id}>
                            <h2>{subcategory.title}</h2>
                        </li>
                    ))}
                </ul>

                <AuthForm/>
            </main>
        </>
    )
}

export default HomePage;