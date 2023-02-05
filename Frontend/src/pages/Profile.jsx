import { useLogout } from '../hooks/useLogout'


 const ProfilePage = () => {

    const { logout } = useLogout() 

    const handleClick = () => {
        logout()
    }

    // componentDidMount(){
    //     fetch("http://localhost:5000/api/users/profile", {
    //         method:"POST",
    //         crossDomain:true,
    //         headers:{
    //             "Content-Type":"application/json",
    //             Accept:"application/json",
    //             "Access-Control-Allow-Origin":"*",
    //         },
    //         body:JSON.stringify({
    //             token:window.localStorage.getItem("token"),
    //         }),
    //     }).then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data,"userData")
    //         this.setState({ userData: data.data })
    //     })
    // }
   
        return (
            <div className='profile'>
                <p>
                    Full Name
                </p>
                
                <div>
                    {/* {this.state.userData.fullname} */}
                </div>

                <div>
                    Email
                </div>
                <div>
                    {/* {this.state.userData.email} */}
                </div>

                <div>
                    <button onClick={handleClick}>Log out</button>    
                </div> 
            </div>
            
        );
    
}

export default ProfilePage;