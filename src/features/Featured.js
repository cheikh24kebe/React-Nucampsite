import { useSelector } from 'react-redux';
import { selectFeaturedCampsite } from './campsites/campsitesSlice';

const Featured = () => {
    const featuredCampsite = useSelector(selectFeaturedCampsite);
    console.log('Featured campsite:', featuredCampsite); // ⬅️ add this line

    if (!featuredCampsite) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{featuredCampsite.name}</h2>
            <img src={featuredCampsite.image} alt={featuredCampsite.name} />
            <p>{featuredCampsite.description}</p>
        </div>
    );
};

export default Featured;
