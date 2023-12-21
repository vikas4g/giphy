"use client"




import { useEffect, useState } from 'react';

const GiphyComponent = () => {
  const [gifs, setGifs] = useState([]);
  const [stateValue, setStateValue] = useState(true);
  const [userQuery, setUserQuery]= useState("hi");
  const [Gifstatur, setGifstatur]= useState("search");

 
  useEffect(() => {
    const fetchData = async () => {
      setStateValue(true);
      try {
        const API_KEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65';
        const BASE_URL = `https://api.giphy.com/v1/gifs/${Gifstatur}`;
        let query = "java";
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${userQuery}&offset=${0}&limit=50`);
        
        if (response.ok) {
          const data = await response.json();
          setGifs(data.data);
          console.log(data.data);
        } else {
          throw new Error('Failed to fetch GIFs');
        }
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      }
      
      setStateValue(false);
    };

    fetchData();
  }, [userQuery, Gifstatur ]);

  return (
    <div>
     <div>
      <div className='mx  -5 flex justify-center'>
        <div>
          <div className='flex text-align bg-center justify-center'>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA/1BMVEUAAAAq/Jwizfv7Z2n/85+XQPor/59KH3wIMR4fuHIj0/8QZHsfvnb///+aQf99d07/+qRvL7cJOkcfuOEdDTDl2o9JRS1yML3bWlyENjfpYGJxLi8xFBQam76+Tk85FxgHKDH8dW//5Znp9J9j+pyYP3U3F1w8GWRSIomPPe0o8LR6ZfszvvsyLx/Bt3gj0vBCHH0xMTHt7e3Q0NA9PT0RBx0QEBBpaWlTU1O8vLyjo6OGPToWCQmwSElVIyQk1/8DExgMTF0YFw9eWjsuNCGxvnvn65nnzotLvndjSTWgQkOQO2F2MV8gDRwet4kJOEdbV8UZFDIbpLkqkcMMJjV6Amr6AAACvElEQVR4nO3XWVfTUBSG4WgVsXpQcEBahjrirElq01RmUXECHP7/b7FQSzngKqHuna3H97nIZfO9q2dlJZH7Jc/iVhSKVpzl/bBo/5p0rDcp6CSDwrRtvUZFO+0X5k3rLUqaea8wDTWwm5juFSZhHtGedtItDPEhM9DpFlpvUOai3HqCsjzKrCcoy6LYeoKyOArnVe33Qu8DAAAAAAAAAPyZjTdXZLzeN9O3Yh124NnzqyLu3K545q3DDnQLz0mg0A6FFFJoj0IKKbQXfuEmhcX8xW/em2/vet7dGM37o4VLs54ls8LxrXuerZuj+VDzC2vznmW778Xxy2NnDhm7OOLvLNyqDFOri64+DQqLopBCPRQWRSGFeigsikIK9VBY1EmFH+uelfK+F0sqrNR8y7OiFcOUVXjEPIVyKCyKQgr1UFgUhRTqobAoCv+/wgXRimGkCpfqM0N9uu/5/EW0YhipwpM8eOlZfKV0n+NKK7zgoVAQhVIo1EOhFAr1UCiFQj0USgm/cPGhJ8DCyUeeyetK9zmutMKJ84dMTFMoh0IpFOqhUAqFeiiUQqEeCqVQqIdCKRTqoVAKhXoolEKhHgqlUKiHQikU6qFQCoV6KJRCoR4KpVCoh0IpFOqhUAqFeiiUQqEeCqVQqIdCKRTqoVAKhXoolEKhHgqlUKiHQikU6qFQCoV6KJQyPeEps3D7sWd7amdKwc7uE8/u19IKG99e+K7peOr7/qO8wrmzBqpzjeALy/wPqyaFDQoppJBCCimkkEIKT1W4Wi3faomFa+uXLKyvlVYIAAAAAAAAAPgXtawHKGtFsfUEZXGUWU9QlkW59QRleeSsJyhzketYb1DV6RYmbesVitpJt9ClTesdapqp2yt0eaiJzdz1Cl0a5kFtp65f6JIQHzedxA0K945qFofzAteKs7wf9hNKAgFEhqmEhgAAAABJRU5ErkJggg==" className='rounded-2xl w-20 h-20' alt=""  />
          <h1 className='mt-5 text-4xl font-bold'>GIPHY</h1>  
          </div>
      
          <div className='flex'>
          <input type="text" className='text-black justify-center w-[30vw] border-2 border-pink-300 rounded-md p-2' onChange={(e)=>{
                setUserQuery(e.target.value)
              }} />
              <button className='bg-white rounded-r-md'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDiX-ebcfOPVym3qEoBOXUzj5IYxq5OjeBA&usqp=CAU" className='w-10 h-30 p-2 rounded-r-md' alt="Na" /></button>
          </div>

        </div>
      </div>
     </div>

     <div className=''>
        <div className='flex justify-center flex-nowrap'>
          <div className='m-3 border-blue-800 border-2 p-2 font-bold text-2xl rounded-md' onClick={()=>{
            setGifstatur("liked")
          }}>
            Liked
          </div>
          <div  className='m-3 border-blue-800 border-2 p-2 font-bold text-2xl rounded-md' onClick={()=>{
            setGifstatur("trending")
          }}>
            Trending Gifs
          </div>
          <div  className='m-3 border-blue-800 border-2 p-2 font-bold text-2xl rounded-md'  onClick={()=>{
            setGifstatur("random")
          }}>
            Random Gif
          </div>
        </div>
     </div>
     

     <div>
      <div className='mt-10'>
        <div className=''>
          {stateValue ? 
          <div className='flex justify-center'>
            <div>
              <img src="https://media4.giphy.com/media/DWAMPLJjsjedq/giphy.gif" width={'100px'} className='' alt="" /> 
              <div>loading...</div>
            </div>
          </div>
          : " " } 
        <div className="gifs-container m-auto flex flex-wrap w-[60vw] justify-center">
        {gifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </div>
        ))}
      </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default GiphyComponent;
