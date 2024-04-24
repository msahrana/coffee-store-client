import {useLoaderData} from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import OurProducts from "../../components/Banner/OurProducts/OurProducts";
import {useState} from "react";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";

const Home = () => {
  const uploadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(uploadCoffees);

  return (
    <div>
      <Banner></Banner>
      <div className="text-center container mx-auto">
        <OurProducts></OurProducts>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
