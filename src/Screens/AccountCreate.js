import React, { useState } from 'react'
import axios from 'axios';

const AccountCreate = () => {
    const [accountHolderName,setAccountHolderName]=useState("");
    const [fatherName,setFatherName]=useState("");
    const [motherName,setMotherName]=useState("");
    const [gender,setGender]=useState("");
    const [dob,setDob]=useState("");
    const [email,setEmail]=useState("");
    const [mobileNumber,setMobileNumber]=useState("");
    const [panNumber,setPanNumber]=useState("");
    const [adharNumber,setAdharNumber]=useState("");
    const [accountType,setAccountType]=useState("");
    const [password,setPassword]=useState("");
    const [state,setState]=useState("");
    const [district,setDistrict]=useState("");
    const [address,setAddress]=useState("");
    const [branch,setBranch]=useState("");




    const submitDetails=async()=>{

        if(accountHolderName || fatherName || motherName || gender || dob || email||
            mobileNumber || panNumber || adharNumber || accountType || password ||
            state || district || address || branch)
            {
                // toast({
                //     title: "Please fill all the feilds",
                //     status: "warning",
                //     duration: 5000,
                //     isClosable: true,
                //     position: "top",
                //   });
                //   return;

                return;
            }
            const userData = JSON.stringify({
                accountHolderName: accountHolderName,
                fatherName: fatherName,
                motherName:motherName,
                gender:gender,
                dob:dob,
                email: email,
                mobileNumber:mobileNumber,
                panNumber:panNumber,
                adharNumber:adharNumber,
                accountType:accountType,
                password: password,
                state:state,
                district:district,
                address:address,
                branch:branch
              });

            try {
            //     const config = {
            //       headers: {
            //         "Content-type": "application/json",
            //         Authorization: `Bearer ${userToken}`,
            //       },
            //     };
            //     const { data } = await axios.post("localhost:8080/account",
            //       {
            //         body: userData,
            //       },
            //       config
            //     );
          
            // console.log("data get",data);
                
            }catch(error){
                console.log("error in creating account")
            }
        }
    
              
    

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-1 px-6 md:px-36 ">
   
    <div className="col-span-2 bg-primary rounded-lg flex flex-col flex justify-between items-center">
      <h1 className="my-5 text-3xl text-center md:text-3xl font-bold tracking-wide leading-norma">
        Account Create
      </h1>
      <div className="flex gap-x-4" >
      <div className="w-full" >
      <input
        className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
        autocomplete="off"
        placeholder="AccountHolderName"
        onChange={(e) => {
          setAccountHolderName(e.target.value);
        }}
        autoComplete="off"
      />
        <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="FatherName"
          onChange={(e) => {
            setFatherName(e.target.value);
          }}
          autoComplete="off"
        />
        <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="MotherName"
          onChange={(e) => {
            setMotherName(e.target.value);
          }}
          autoComplete="off"
        />
        

        <div  className="flex justify-end items-center p-3  h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md">  
        <select className="h-full w-full " onChange={(e)=> setGender(e.target.value)}>
        <option value={gender}>Male</option>
        <option value={gender}>Female</option>
        </select> 
        </div>
        


       <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          
          type="date"
          placeholder="DOB"
          onChange={(e) => {
            setDob(e.target.value);
          }}
          autoComplete="off"
        />
       <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="Mobile"
          onChange={(e) => {
            setMobileNumber(e.target.value);
          }}
          autoComplete="off"
        />
       <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="PAN"
          onChange={(e) => {
            setPanNumber(e.target.value);
          }}
          autoComplete="off"
        />
        <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="AdharNumber"
          onChange={(e) => {
            setAdharNumber(e.target.value);
          }}
          autoComplete="off"
        />
        </div>
        <div className="w-full">
        <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="Email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoComplete="off"
        />
         <div  className="flex justify-end items-center p-3  h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md">  
        <select className="h-full w-full " onChange={(e) =>setAccountType(e.target.value)}>
        <option value={accountType}>Saving</option>
        <option value={accountType}>Current</option>
        </select> 
        </div>

        <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          autoComplete="off"
        />
        {/* <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="Retype-Password"
          type="password"
          onChange={(e) => {
            setRePassword(e.target.value);
          }}
          autoComplete="off"
        /> */}
        <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="State"
          onChange={(e) => {
            setState(e.target.value);
          }}
          autoComplete="off"
        />
        <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="District"
          onChange={(e) => {
            setDistrict(e.target.value);
          }}
          autoComplete="off"
        />
        <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          autoComplete="off"
        />
        <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="Branch"
          onChange={(e) => {
            setBranch(e.target.value);
          }}
          autoComplete="off"
        />
        </div>
        </div>
        <button
          className="place-items-center my-10 w-1/4 h-12 bg-tertiary rounded-md md:rounded-full text-primary shadow-lg"  
          onClick={
           ()=>{
                submitDetails();
           }
          }   
        >
          Submit
        </button>
        <div className="px-2">
        <hr className="border-gray-400" /></div>
        {/* <Link to="/signup">
          <button className="my-6 w-full h-12 bg-secondary rounded-md  md:rounded-full shadow-lg">
            SignUp
          </button>
        </Link> */}
      </div>
      <div className="md:py-32 hidden md:block">
        {/* <img src={Office} alt="office" /> */}
      </div>
    </div>
  )
}

export default AccountCreate
