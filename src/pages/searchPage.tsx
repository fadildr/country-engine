import React, { useState, ChangeEvent, useEffect } from "react";
import Autocomplete from "../components/autoComplete";
import { useDebounce } from "use-debounce";
import { AiOutlineSearch } from "react-icons/ai";
interface Country {
  name: string;
}
export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isError, setisError] = useState(false);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm.length >= 3) {
      const fetchSuggestions = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${debouncedSearchTerm}`
          );
          const data: Country[] = await response.json();
          console.log("first", data);
          // Filter the suggestions based on the response
          const filteredSuggestions = data.map((country) => country.name);
          setSuggestions(filteredSuggestions);
          setisError(false);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setisError(true);
        }
      };

      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };
  return (
    <div style={{ marginTop: "200px" }}>
      <h1 className="title-search">Country</h1>
      <div className="position-relative form-input ">
        <input
          type="text"
          placeholder="Type any country name"
          value={searchTerm}
          onChange={handleChange}
          className="w-100 px-3 py-2 input-search"
        />
        <div className="btn-search">
          <AiOutlineSearch color={"#C8C8C8"} size={22} />
        </div>
      </div>

      <Autocomplete suggestions={suggestions} isError={isError} />
    </div>
  );
}
