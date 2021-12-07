import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '@/app/views/Home'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
