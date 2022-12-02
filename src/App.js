import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import {Dashboard} from "./component/Dashboard";
import {useSnackbar} from "notistack"

const App = () => {
  const [userData, setUserData] = useState([]);
  const [userDataOriginal, setUserDataOriginal] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userDataPerPage] = useState(10);
  const {enqueueSnackbar} = useSnackbar();


  useEffect(() => {
    performApiCall();
  }, []);


  /**
   * performApiCall() fetches data from assigned url and 
   * sets the userData and uerOriginalData value to array returned by 
   * response
   */
  const performApiCall = async () => {
    try {
      const response = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
      setUserData(response.data);
      setUserDataOriginal(response.data);
    } catch (error) {
      enqueueSnackbar("Something went wrong. Please check your JSON link", {variant: "error"});
      console.log(error);
    }
  };

  

  /**
   * It takes in user input as a string and returns an array of items that include the search items
   *
   */
  const handleSearch = (userInput) => {
    if(userInput === ""){
      setUserData(userDataOriginal)
    }
    else{
      console.log(userInput)
      const filteredData = userDataOriginal.filter((item)=>{
       return(
        item.name.toLowerCase().includes(userInput.toLowerCase()) ||
        item.email.toLowerCase().includes(userInput.toLowerCase()) ||
        item.role.toLowerCase().includes(userInput.toLowerCase())
       )
      })
      setUserData(filteredData)
    }
  }

  // get last index as per pageNumber
  const userDataLastIndex = currentPage * userDataPerPage;
  // get first index as per last index and per page count
  const userDataFirstIndex = userDataLastIndex - userDataPerPage;
  // slice array of userData from firstrIndex to lastIndex
  const userDataCurrent = userData.slice(userDataFirstIndex, userDataLastIndex);

  // onCLick of pagination bar set the value of current page to thew value of number clicked
  const handlePaginationClick = (event, value) => {
    const pageNumber = value;
    if (pageNumber !== undefined) {
      setCurrentPage(pageNumber);
    }
  };


  return (
    <div>
        <Container sx={{mt : 5}}>
          <Dashboard
            userDataAll={userData}
            userData={userDataCurrent}
            setUserData={setUserData}
            handlePaginationClick={handlePaginationClick}
            userDataPerPage={userDataPerPage}
            totalUserData={userData.length}
            handleSearch={handleSearch}
          />
        </Container>
    </div>
  );
}

export {App};
