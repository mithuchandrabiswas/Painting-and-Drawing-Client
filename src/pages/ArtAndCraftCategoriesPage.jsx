import { useLoaderData, useParams } from 'react-router-dom';
import ArtAndCraftCategoriesCard from '../components/ArtAndCraftCategoriesCard';

const ArtAndCraftCategoriesPage = () => {
    const loadedData = useLoaderData();
    const { subcategory_Name } = useParams();
    // console.log(loadedData);
    // console.log(subcategory_Name);


    const allFilteredCategoriesData = loadedData?.filter(item => item.subCategory === subcategory_Name);
    // console.log('Matching Data', allFilteredCategoriesData);

    return (
        <div>
            <h1>Filtered Data by SubCategory</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {
                        allFilteredCategoriesData.map(singleCategoryData => <ArtAndCraftCategoriesCard key={singleCategoryData._id} singleCategoryData={singleCategoryData}></ArtAndCraftCategoriesCard>)
                    }
                </div>
        </div>
    );
};

export default ArtAndCraftCategoriesPage;