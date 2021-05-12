import { useEffect, useState } from 'react';
import NavPanel from '../../components/NavPanel';
import movieService from '../../services/movies.service';

const Home = () => {
  const [search, setSearch] = useState('harry potter');
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = movieService.searchByName(search);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, [search]);

  return (
    <div>
      <NavPanel />
      <div>This is home page</div>
    </div>
  );
};
export default Home;
