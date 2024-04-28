import Swal from 'sweetalert2';

const ArtAndCategorySection = () => {
    // Send CraftData to the server
    fetch('https://painting-and-drawing-server.vercel.app/addcrafts')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        if(data.insertedId) {
            Swal.fire({
                title: 'Suceess',
                text: 'Crafts added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
        }
    })
    return (
        <div>
            <h1>Art And Category Section</h1>
        </div>
    );
};

export default ArtAndCategorySection;