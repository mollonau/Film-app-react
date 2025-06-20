import React from "react";
import { useMovieContext } from "../../Context"; // Importuojame hooką
import SearchBar from "../SearchBar";
import ContentWrapper from "../ContentWrapper";
import MainCard from "../MainCard";
import Footer from "../Footer";

function AppContent() {
    const { movies } = useMovieContext(); // Gauname filmų sąrašą iš konteksto

    return (
        <div className="main-wrapper">
            <SearchBar />
            <ContentWrapper>
                {Array.isArray(movies) &&
                    movies.slice(0, 18).map((movie, index) => (
                        <MainCard key={index} movie={movie} />
                    ))}
            </ContentWrapper>
            <Footer />
        </div>
    );
}

export default AppContent;

