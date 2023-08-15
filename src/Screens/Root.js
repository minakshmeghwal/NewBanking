import React from 'react'

function Root() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 px-8 md:px-36">
    <div></div>
    <div className="mx-4 my-4 md:my-20 p-4 md:p-10 col-span-2 bg-primary rounded-lg">
      <h1 className="text-3xl text-center md:text-3xl font-bold tracking-wide leading-norma">
        iBanking
      </h1>
      <p className="font-light text-sm text-gray-700 text-center">Log In Account</p>
      {/* <p className="font-bold text-red-700 text-center">{message}</p> */}
      <input
        className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
        autocomplete="off"
        placeholder="Email"
        onChange={(e) => {
          // setEmail(e.target.value);
        }}
        autoComplete="off"
      />
      <input
          className="h-12 w-full p-3 mt-4 border-2 border-secondary bg-white rounded-md"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            // setPassword(e.target.value);
          }}
          autoComplete="off"
        />
        <br />
        <a
          className="ml-1 mt-0 text-s text-gray-500 underline cursor-pointer" 
        >
          Create Account
        </a>
        <br/>
        <button
          className="my-6 w-full h-12 bg-tertiary rounded-md md:rounded-full text-primary shadow-lg"
          
        >
          LogIn
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

export default Root
