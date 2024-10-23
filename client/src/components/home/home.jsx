
import { Grid2 } from '@mui/material';

//components
import Banner from '../banner/Banner.jsx'
import Categories from './Categories';
import Posts from './post/Posts';

const Home = () => {

    return (
        <>
            <Banner />
            <Grid2 container>
                <Grid2 item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid2>
                <Grid2 container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid2>
            </Grid2>
        </>
    )
}

export default Home;