import { useNavigate } from "react-router-dom";
type CountryProps = {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
};
interface DataProps {
  suggestions: CountryProps[];
  isError: boolean;
}
export default function AutoComplete({ suggestions, isError }: DataProps) {
  const navigate = useNavigate();
  return (
    <>
      {suggestions.length ? (
        <div className="country-field">
          <ul className="px-0 py-2">
            {suggestions.slice(0, 5).map((country, index) => (
              <li
                key={index}
                className="list-country"
                onClick={() => {
                  navigate(`/${country.common}`);
                }}>
                {country.common}
              </li>
            ))}
          </ul>
        </div>
      ) : isError ? (
        <div className="country-field">
          <h3 className="data-not-found px-3 py-3">Data not found</h3>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
