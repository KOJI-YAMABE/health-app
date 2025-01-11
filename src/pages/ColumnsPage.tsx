import { Box } from '@mui/material'
import { ArticleGrid } from 'components/columns/ArticleGrid'
import { RecommendedSection } from 'components/columns/RecommendedSection'
import { BaseLayout } from 'components/layouts/BaseLayout'

export const ColumnsPage = () => {
    return (
        <BaseLayout>
            <Box sx={{ width: '100%', }}>
                <Box sx={{ mx: 20, mt: 7 }}>
                    <Box sx={{ width: '100%' }}>
                        <RecommendedSection />
                        <ArticleGrid />
                    </Box>
                </Box>
            </Box>
        </BaseLayout >
    )
}
