import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../../redux";
import CarDetails from "../../components/CarDetails/CarDetails";

export default function CarPage() {
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    try {
      const getCarById = async () => {
        const result = await api.get(`/cars/${id}`);
        const data = result.data;
        setCar(data);
        setLoad(false);
      };

      getCarById();
    } catch (err) {
      console.log(err.message);
    }
  }, [id]);
  return (
    <div className="container">
      {load ? "loading" : <CarDetails car={car} />}
    </div>
  );
}
