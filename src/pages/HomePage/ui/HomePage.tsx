import {FC} from 'react';
import Header from "../../../widgets/Header/ui/Header.tsx"
import {ProductList} from "../../../widgets/ProductList/ui/ProductList.tsx";


export const HomePage: FC = () => {
    return (
        <>
            <Header/>
            <main>
                <ProductList/>
            </main>
        </>
    )
}