import { useState, createContext, useContext, useEffect } from "react";
import { fetchMovies, searchMovies } from "./utils/api";

const MoviesContext = createContext();

export const useMovieContext = () => useContext(MoviesContext);

export const MoviesProvider = ({ children }) => {
  const [language, setLanguage] = useState("LT");
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Fetch movies based on search term length.
  useEffect(() => {
    if (searchTerm.length > 1) {
      searchMovies(searchTerm, setMovies);
    } else {
      fetchMovies(setMovies);
    }
  }, [searchTerm]);

  return (
    <MoviesContext.Provider
      value={{
        language,
        changeLanguage,
        searchTerm,
        setSearchTerm,
        movies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
