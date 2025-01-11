import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TopPage } from './pages/TopPage'
import { MyPage } from './pages/MyPage'
import { ColumnsPage } from 'pages/ColumnsPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/top`} element={<TopPage />} />
                <Route path={`/mypage`} element={<MyPage />} />
                <Route path={`/columns`} element={<ColumnsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
