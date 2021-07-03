import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home(props) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
     
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      props.setSearchResult(res.data)
     // const searchData = res.data.filter(blog =>blog.title.contains(props.searchValue))
     // props.setSearchResult(searchData)
     //const searchResult=  res.data.filter(blog => blog.id !==props.searchValue.id)
   console.log("in home page data",res.data)
   
     
    
    
//"What is Web Development?")

      console.log("posts search value",props.searchValue)
     
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
        <div className="home">
          <Posts posts={posts} searchResult={props.searchResult}/>
          <Sidebar />
      </div>
    </>
  );
}