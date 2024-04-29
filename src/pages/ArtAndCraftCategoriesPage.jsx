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
        <div className="bg-green-50 my-4 md:my-8 p-1 rounded-md">
            <div className='py-2 md:py-4'>
                <h1 className='text-center text-lg md:text-2xl font-bold text-[#101010]'>Art And Category Section</h1>
                <p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {
                        allFilteredCategoriesData.map(singleCategoryData => <ArtAndCraftCategoriesCard key={singleCategoryData._id} singleCategoryData={singleCategoryData}></ArtAndCraftCategoriesCard>)
                    }
                </div>
        </div>
    );
};

export default ArtAndCraftCategoriesPage;