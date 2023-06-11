import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataCountry } from "../utils/type";
import PrevButton from "../components/prevButton";
import Loading from "react-loading";
import HalfGlobe from "../assets/half-globe.png";
import CallingCurrency from "../components/callingCurrency";
import axios from "axios";
export default function DetailCountry() {
  const { country } = useParams();
  const arrCountry = [];
  arrCountry.push(country);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataCountry[]>([]);
  const [currencies, setCurrencies] = useState("");
  const [countryCurrencies, setCountryCurrencies] = useState<string[]>([]);
  const [callingCode, setCallingCode] = useState();
  useEffect(() => {
    getDetailCountry();
  }, []);
  useEffect(() => {
    getCurrency();
  }, [currencies]);

  const getDetailCountry = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${country}?fullText=true`
      );

      setData(response.data);
      setCurrencies(Object.keys(response.data[0]?.currencies)[0]);
      setCallingCode(
        response.data[0]?.idd.suffixes.map(
          (suffix: any) => response.data[0]?.idd.root + suffix
        )[0]
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching suggestions:", error);
    }
  };
  const getCurrency = async () => {
    if (currencies) {
      try {
        const result = await axios.get(
          `https://restcountries.com/v2/currency/${currencies}`
        );
        const names: string[] = result.data.map((item: any) => item.name);
        setCountryCurrencies(names);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    }
  };

  return !isLoading && data.length > 0 ? (
    <div className="container py-5">
      <PrevButton />
      <div className="d-flex gap-2 align-items-center mt-5">
        <h1 className="title-country ">{country}</h1>
        <img className="flag-img" src={data[0]?.flags.png} alt="" />
      </div>
      <div className="d-flex gap-2">
        {data[0]?.altSpellings.map((item, index) => (
          <div className="spelling-type " key={index}>
            {item}
          </div>
        ))}
      </div>

      <div className="d-md-flex gap-4">
        <div className="card-detail w-100 w-md-50 mt-5 ps-4 position-relative">
          <h2 className="title-latlong">LatLong</h2>
          <div className="d-flex">
            {data[0]?.latlng.map((item, index) => (
              <div className="latlong-numbers" key={index}>
                {item}.0
                {index === 0 && ","}
              </div>
            ))}
          </div>

          <div className="position-absolute bottom-0 " style={{ right: "0" }}>
            <img src={HalfGlobe} alt="" />
          </div>
        </div>
        <div className="card-detail w-100 w-md-50  mt-5 ps-4 d-flex align-items-center">
          <div>
            <div className="d-flex gap-1">
              <h2 className="detail-country">Capital : </h2>
              <h2 className="answer-detail">{data[0]?.capital}</h2>
            </div>
            <div className="d-flex gap-1">
              <h2 className="detail-country">Region :</h2>
              <h2 className="answer-detail"> {data[0]?.region}</h2>
            </div>
            <div className="d-flex gap-1">
              <h2 className="detail-country">Subregion :{""} </h2>
              <h2 className="answer-detail">
                {""} {data[0]?.subregion}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mt-4">
        <div className="w-100 w-md-50">
          <CallingCurrency
            title="Calling Code"
            subTitle={callingCode}
            dataArr={arrCountry}
          />
        </div>
        <div className="w-100 w-md-50">
          <CallingCurrency
            title="Currency"
            subTitle={currencies}
            dataArr={countryCurrencies}
          />
        </div>
      </div>
    </div>
  ) : (
    <div
      className="d-flex align-items-center justify-content-center  "
      style={{ minHeight: "100vh" }}>
      <Loading type="bubbles" color="#8362f2" width={100} height={100} />
    </div>
  );
}
