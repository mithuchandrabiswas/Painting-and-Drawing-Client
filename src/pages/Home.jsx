
import ArtAndCategorySection from "../components/ArtAndCraftCategoriesSection";
import CraftItemsSection from "../components/CraftItemsSection";
import FAQ from "../components/FAQ";
import OurClient from "../components/OurClient";
import Slider from "../components/Slider";


const Home = () => {


    return (
        <div>
            <Slider></Slider>
            <CraftItemsSection></CraftItemsSection>
            <ArtAndCategorySection></ArtAndCategorySection>
            <OurClient></OurClient>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;