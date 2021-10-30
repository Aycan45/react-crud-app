import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categories from './pages/Categories';
import CreateCategory from './pages/CreateCategory'
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import UpdateCategory from './pages/UpdateCategory';

const theme = createTheme({
  palette:{
    primary:{
      main: '#fefefe'
    },
    secondary: purple
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Categories/>
          </Route>
          <Route path="/create">
            <CreateCategory />
          </Route>
          <Route path="/categories/:id">
            <UpdateCategory/>
          </Route>
        </Switch>
      </Router>  
    </ThemeProvider>
  );
}

export default App;
