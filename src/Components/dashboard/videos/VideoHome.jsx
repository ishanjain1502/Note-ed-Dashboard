import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from '../../../assets/icon.png';
import Video from "./Video";

// http://Backend-1.prathameshdukare.repl.co/api/v1/search/video?videoname=abc&deleted=false

export default function VideoHome( active) {

    const [videos, setVideos] = useState();
    let host = "http://localhost:8000"
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    
    let basic = 0;
    
    useEffect(() => {
        const token=localStorage.getItem('token').toString();
        axios.get(`${host}/api/v1/videos/?deleted=false`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(data => {
            console.log(data);
            if (data.data.message === 'success') {
                setVideos(data.data.videos);
            }
        }).catch(err => {
            console.log(err);
        })
    }, [basic]);

    useEffect(() => {
        const token=localStorage.getItem('token').toString();
        let arr1 = Object.values(active)
        console.log(arr1);
        if(typeof active !== ""){
            axios.post(`${host}/api/v1/folder/getvideos`,  {
                "folder_name" : arr1[0]
            },{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }).then((res)=> {
                console.log(res.data.message);
                let data = res.data.data
                console.log(data);


                if(res.data.message === 'success'){
                  console.log("Inside Success");
                  setVideos(data)
                }

            }).catch((err)=> {
                console.log(err);
            })
        }
    }, [active])
    
    const toProfile = () => {
        navigate('/profile')
      }
  
      const toHome = () => {
        navigate('/dashboard')
      }



  const searchQuery = async () => {
    let token = localStorage.getItem("token").toString();
    console.log("Searching query");
    console.log(query);
    axios
      .get(`${host}/api/v1/search/video/?videoname=${query}&deleted=false`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.videos);
        console.log(res.data.message);
        if (res.data.message === "fetched relevant videos") {
          console.log("INSIDE IF");
          let arr = [res.data.videos];
          console.log(res.data.videos[0].video_id);
          console.log(res.data.videos[0].video_url);
          console.log(res.data.videos[0].video_name);
          setVideos(res.data.videos);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteVideoFromArray = (video_id) => {
    setVideos((videos) => {
      return videos.filter((video) => {
        return video.video_id !== video_id;
      });
    });
  };
  useEffect(()=>{
    document.title = "Noted | Dashboard"
  },[])

  return (
    <>
      <div>
        
        <nav className="p-5 flex justify-between bg-white absolute top-0 -left-1 w-full mb-3">
          {/* <MenuIcon/> */}
          <div className="relative left-16 flex">
            <span className="text-black flex content-center max-h-5 mb-2">
              <span>
                <img src={icon} style={{height : '215%'}}  alt='logo' />
              </span>
            </span>
            <div className="relative right-20 text-5xl text-new-blue font-bold">
              <button>Noted</button>
            </div>
          </div>

          <div className="w-2/3">
            <input
              className="h-8 w-3/4 p-3 pl-5 border-2 border-t-black border-l-black border-b-black	rounded-l-md"
              value={query}
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button className="px-4 bg-new-blue h-8" onClick={searchQuery}>
              <SearchIcon style={{ color: "white" }} />
            </button>
          </div>
          <span className="profile w-8 text-xl ">
            <button onClick={toProfile}>
              <AccountCircleIcon
                style={{ color: "rgb(0,102,122)", transform: "scale(1.5)" }}
              />
            </button>
          </span>
        </nav>
        <hr/>
      </div>
      {/* NavBar iske upr */}

      <div className="absolute top-32 left-1/4 video-home">
        <div className=" video-frame inline-grid grid-cols-1 md:inline-grid md:grid-cols-3 md:gap-1  ">
          {videos &&
            videos.map((video) => {
              return (
                <div>
                  <Video
                    video={video}
                    deleteVideoFromArray={deleteVideoFromArray}
                  ></Video>
                </div>
              );
            })}
           
        </div>
        <div className=" text-new-green text-ellipsis " >
              <p className="text-2xl text-center p-4 m-2 font-bold" >**Thats's All Folks**</p>
      </div>
      </div>
      
    </>
  );
}