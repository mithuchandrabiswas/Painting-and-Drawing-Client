import ArtAndCategorySection from "../components/ArtAndCraftCategoriesSection";
import CraftItemsSection from "../components/CraftItemsSection";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";


const Home = () => {


    return (
        <div>
            <Slider></Slider>
            <CraftItemsSection></CraftItemsSection>
            <ArtAndCategorySection></ArtAndCategorySection>
            <Newsletter></Newsletter>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;