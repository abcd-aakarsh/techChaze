import DonateCard from "./DonateCard";
import donateg from "../../assets/Donateg.png";
import clothes from "../../assets/Clothes.png";
import food from "../../assets/food.png";

const DonateSection = () => {
  return (
    <div className="bg-white p-5  flex flex-col lg:py-[100px] gap-5 ">
      <h3 className="font-manuale font-semibold leading-none pb-5 max-w-[653px] lg:leading-tight mx-auto text-[40px] lg:text-[50px] text-center">
        Making a diffrence for those who face a hardship
      </h3>
      <div className="flex flex-col gap-5 md:flex-row lg:px-28 lg:gap-11 ">
        <DonateCard
          img={donateg}
          heading={"Donate Money"}
          title={
            "Your small help can change someone else life and can make someone happy and u will have a good deed added in your cart"
          }
          bordercolor={{ borderColor: "#399866" }}
          btncolor={{ backgroundColor: "#F8F6E4", borderColor: "#D0D0D0" }}
        />
        <DonateCard
          img={clothes}
          heading={"Donate Clothes"}
          title={
            "Your small help can change someone else life and can make someone happy and u will have a good deed added in your cart"
          }
          bordercolor={{ borderColor: "#399866" }}
        />
        <DonateCard
          img={food}
          heading={"Donate Food"}
          title={
            "Your small help can change someone else life and can make someone happy and u will have a good deed added in your cart"
          }
          bordercolor={{ borderColor: "#399866" }}
          btncolor={{ backgroundColor: "#F8F6E4", borderColor: "#D0D0D0" }}
        />
      </div>
    </div>
  );
};

export default DonateSection;
