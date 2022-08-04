
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ThemeProvider } from '@emotion/react';
import NewsList from './components/News/NewsList/NewsList';
const queryClient = new QueryClient();

const theme = {
  size: {
    parrafo: {
      chico: 10,
      mediano: 14,
      grande: 20
    }
  }
};

function App() {
  return (
    
    <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="news" element={<NewsList />} />
          {/* <Route path="peliculas" element={<BuscarPeliculasPagina />} />
          <Route exact path="peliculas/:idPelicula" element={<PeliculaPagina />}/> */}
          <Route path="*" element={<div> 404 </div>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
  );
}

export default App;
