import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import RandomDrinkPage from "./pages/RandomDrinkPage/RandomDrinkPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import InfoPage from "./pages/InfoPage/InfoPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<RandomDrinkPage />}/>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cocktail-info/:id" element={<InfoPage />} />
        </Route>
    )
)