// material-ui
import { useMediaQuery } from '@mui/material';

// project import
import Profile from './Profile';
import MobileSection from './MobileSection';
import { Box } from '../../../../../node_modules/@mui/material/index';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <>
            {!matchesXs && <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }} />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

            {!matchesXs && <Profile />}
            {matchesXs && <MobileSection />}
        </>
    );
};

export default HeaderContent;
