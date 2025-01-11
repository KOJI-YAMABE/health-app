import { Box, Divider, Typography } from '@mui/material';
import { COLORS } from 'components/constants/color';

const recommendedData = [
    { title: 'RECOMMENDED COLUMN', subtitle: 'オススメ' },
    { title: 'RECOMMENDED DIET', subtitle: 'ダイエット' },
    { title: 'RECOMMENDED BEAUTY', subtitle: '美容' },
    { title: 'RECOMMENDED HEALTH', subtitle: '健康' },
];

export const RecommendedSection = () => {
    return (
        <Box
            sx={{
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                gap: 4,
                mt: 7,
            }}
        >
            {recommendedData.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        width: 'calc(25% - 16px)',
                        height: 144,
                        bgcolor: COLORS.dark600,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: COLORS.white,
                        textAlign: 'center',
                        p: 2,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 'bold', color: COLORS.primary300, }}
                    >
                        {item.title}
                    </Typography>
                    <Divider sx={{ width: '30%', bgcolor: COLORS.white, m: 1 }} />
                    <Typography variant="body1" sx={{ fontWeight: 400, fontSize: 18, }}>
                        {item.subtitle}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};
