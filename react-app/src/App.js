import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import RoomsPage from './pages/RoomsPage';
import LogsPage from './pages/LogsPage';
import SettingsPage from './pages/SettingsPage';
import DashboardPage from './pages/DashboardPage';
import RoomDetailsPage from './pages/RoomDetailsPage';

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
export const App = () => {
	return(
  	<BrowserRouter>
        <Routes>
          <Route path="/" element= {<BaseLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/rooms/:id" element={<RoomDetailsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}