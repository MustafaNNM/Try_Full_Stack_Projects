import Home from "./pages/home/Home";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext,useState } from "react";
import { Context } from "./context/Context";


const App = ()=> {
  const { user } = useContext(Context);
  const [searchResult, setSearchResult] = useState([])
  const [searchValue,setSearchVaue] = useState([])
  console.log("in app data search", searchResult)
  const clickSearch =  searchValue => {
    if (searchValue){
     
      setSearchVaue(searchValue)
      console.log("search value" , searchValue)
      //const searchResult=  res.data.includes(searchValue) 
      console.log("search Result",searchResult)
     // const searchRes= blogService.getSearch( { searchValue } )

     const dataSearch = searchResult.filter((blog) => blog.title ===searchValue)


     setSearchResult(dataSearch)
     console.log("data search", dataSearch)
     console.log("search result ", searchResult)
     // searchRes.then(function(result){
      //   setSearchResult(result)
      //   if (result.length===0){
         
      //     setTimeout(() => {
           
      //     }, 3000)
      //     }
      // })
    }else{
    
      setTimeout(() => {
     
      }, 3000)
    }
  }


  return (
    <Router>
      <TopBar clickSearch={clickSearch} />
      <Switch>
        <Route exact path="/">
          <Home searchValue={searchValue} searchResult={searchResult} setSearchResult={setSearchResult}/>
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;