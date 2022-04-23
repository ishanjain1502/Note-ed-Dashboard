import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  return (
    <>
      <div>
        <nav className="p-5 flex justify-between  bg-gradient-to-r from-indigo-500 to-blue-500 absolute top-0 -left-1 w-full mb-5">
          {/* <MenuIcon/> */}
          <div>
            <button className="">
              <MenuIcon style={{ color: "white", "margin-bottom": "7px" }} />
            </button>
            <image
              src={
                "https://github.com/sasta-notion/Note-ed-Dashboard/blob/master/src/assets/icon.png"
              }
              alt="logo"
            />
            <span className="text-white text-2xl ">
              &nbsp;&nbsp;&nbsp;
              <span
                className=" w-8 h-4 pt-16"
                style={{
                  "background-image":
                    "url(https://github.com/sasta-notion/Note-Ed-Chrome-Extension/blob/master/src/assets/img/icon-34.png)",
                }}
              >
                {" "}
              </span>
              <button onClick={toHome}> Noted</button>
            </span>
          </div>

          <div className="w-2/3">
            <input
              className="h-8 w-3/4 p-3"
              value={query}
              placeholder="   Search Videos here"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button className="px-4 bg-zinc-300 h-8" onClick={searchQuery}>
              <SearchIcon style={{ color: "white" }} />
            </button>
          </div>
          <span className="profile w-8 text-xl ">
            <button onClick={toProfile}>
              <AccountCircleIcon
                style={{ color: "white", transform: "scale(1.5)" }}
              />
            </button>
          </span>
        </nav>
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
      </div>
    </>
  );
}
