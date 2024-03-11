import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Blog } from './pages/Blog';
import { Blogs } from './pages/Blogs';
import { AppBar } from './components/AppBar';

function App() {
	return (
		<>
			<BrowserRouter>
				<AppBar />
				<Routes>
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/blog/:id" element={<Blog />} />
					<Route path="/blogs" element={<Blogs />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
