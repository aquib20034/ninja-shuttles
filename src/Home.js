// Home.js
import React, { useState } from 'react';
import MyForm from './Form';
import { Button } from "react-bootstrap";

const { ethers } = require("ethers");



// import { ethers } from "ethers";
// const provider = new ethers.BrowserProvider(window.Ethereum)
const Home = () => {
// const provider = new ethers.providers.Web3Provider(window.ethereum)
const provider = ((window.ethereum != null) ? new ethers.providers.Web3Provider(window.ethereum) : ethers.providers.getDefaultProvider());

  // const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [userBalance, setUserBalance] = useState(0);
  const connectwalletHandler = () => {
    console.log("connectwalletHandler")
      if (window.ethereum) {
        console.log("if")
          provider.send("eth_requestAccounts", []).then(async () => {
              await accountChangedHandler(provider.getSigner());
          })
      } else {
          // setErrorMessage("Please Install Metamask!!!");
          alert("Please Install Metamask!!!");
      }
  }

  const accountChangedHandler = async (newAccount) => {
      const address       = await newAccount.getAddress();
      setDefaultAccount(address);
      const balance       = await newAccount.getBalance()
      const result        = ethers.BigNumber.from(balance);
      const numberString  = ethers.utils.formatEther(result);
      setUserBalance(numberString);
      // setUserBalance(ethers.formatEther(balance));
      await getuserBalance(address)
  }

  const getuserBalance = async (address) => {
      const balance = await provider.getBalance(address, "latest")
      
    checkAddress(address);
  }

  const isAddressWhiteListed = async (address) => {
    try {
      const apiUrl = 'http://ninja.onezerowaves.com';

      const apiLink = apiUrl+`/?address=${encodeURIComponent(address)}`;
      console.log("apiLink", apiLink)
      const response = await fetch(apiLink);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Check if the data contains information about the whitelist status
      // You might need to customize this part based on the actual API response
      if (data && data.success) {
        setIsActive(true);
        return true; // Address is whitelisted
      } else {
        setIsActive(false);
        return false; // Address is not whitelisted
      }
    } catch (error) {
      console.error('Error:', error.message);
      throw error; // Re-throw the error for the caller to handle
    }
  };
  
  // Example usage
  const checkAddress = async (addressToCheck) => {
    // const addressToCheck = '0x44d374ED62d4738b86439123E9862424d3f2Fa90';
  
    try {
      const isWhitelisted = await isAddressWhiteListed(addressToCheck);
      console.log(`Is the address whitelisted? ${isWhitelisted}`);
    } catch (error) {
      console.error('Error while checking address:', error.message);
    }
  };

   // State to store the input value
   const [inputValue, setInputValue] = useState('');

   // Function to handle input changes
   const handleInputChange = (e) => {
     setInputValue(e.target.value);
   };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have an API endpoint to send the data
      const apiUrl = 'http://ninja.onezerowaves.com';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inj_address: inputValue,
          whitelisted_address: defaultAccount,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      alert(data.message)
      // console.log('API Response:', data);

      // You can reset the input values after successful submission
      setInputValue('');
      // setAddress('');
    } catch (error) {
      console.error('Error submitting data:', error.message);
    }
  };
 
  
  

  return (
    <>
    <section className="main-text">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>ERC Token Whitelisting</h2>
            <p>Vivamus convallis quis est a placerat. Nulla dapibus nulla at metus rutrum dignissim. Nam maximus semper feugiat. Sed nec felis ultricies, pulvinar quam eu, euismod orci. Quisque eu placerat eros. Sed sollicitudin, urna vitae tristique interdum, urna arcu sagittis dui, vitae venenatis dui justo et ipsum. Aliquam vel erat eu justo malesuada suscipit quis non velit. Vestibulum diam felis, imperdiet ut fringilla a, volutpat quis lorem. Donec mattis id nunc ullamcorper hendrerit. Etiam lectus leo, mollis nec orci id, tempor sodales quam. Ut egestas ullamcorper lorem, vitae convallis ipsum ornare sit amet. Proin et lobortis nibh.
            <br/><br/>Fusce rhoncus, ante et pellentesque euismod, nisi leo posuere libero, sit amet luctus velit sem a lectus. Praesent eu euismod odio, a tempor elit. Curabitur maximus ultrices urna, vel interdum justo efficitur vel. Sed porta, justo id pellentesque congue, nunc sem gravida justo, vitae mollis tellus odio ut odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id faucibus tortor. Nulla eu sem ac justo hendrerit lacinia sed vitae nulla.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="form-sec">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            
            <Button
              className="btn-primary mbpx-20"
              style={{ background: defaultAccount ? "#A5CC82" : "black" }}
              onClick={connectwalletHandler}>
                {defaultAccount ? "Connected!!" : "Connect MetaMask Wallet"}
            </Button>

              <h3>
                        Wallet Amount: {userBalance} Eth 
                    </h3>
            {/* <MyForm /> */}

            <form onSubmit={handleSubmit}>
            {isActive ? (
                <div>

              <label>


                  <input
                    type="text"
                    placeholder="Enter INJ Wallet Address"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
             
              </label>
              <button type="submit" className="btn-primary">Submit</button>
              </div>

              ) : (
                ""
              )}
            </form>
            
          </div>
        </div>
      </div>
    </section>

    <section className="main-sec">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 class="text-center">Subtitle</h2>
          </div>

          <div className="col-sm-12 mbpx-40">
            <div className="row va-ctr">
                <div className="col-sm-5">
                  <figure>
                    <img src="https://placehold.co/600x400" />
                  </figure>
                </div>
                <div className="col-sm-7">
                  <p>Vivamus convallis quis est a placerat. Nulla dapibus nulla at metus rutrum dignissim. Nam maximus semper feugiat. Sed nec felis ultricies, pulvinar quam eu, euismod orci. Quisque eu placerat eros. Sed sollicitudin, urna vitae tristique interdum, urna arcu sagittis dui, vitae venenatis dui justo et ipsum. Aliquam vel erat eu justo malesuada suscipit quis non velit. Vestibulum diam felis, imperdiet ut fringilla a, volutpat quis lorem. Donec mattis id nunc ullamcorper hendrerit. Etiam lectus leo, mollis nec orci id, tempor sodales quam. Ut egestas ullamcorper lorem, vitae convallis ipsum ornare sit amet. Proin et lobortis nibh.
            <br/><br/>Fusce rhoncus, ante et pellentesque euismod, nisi leo posuere libero, sit amet luctus velit sem a lectus. Praesent eu euismod odio, a tempor elit. Curabitur maximus ultrices urna, vel interdum justo efficitur vel. Sed porta, justo id pellentesque congue, nunc sem gravida justo, vitae mollis tellus odio ut odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id faucibus tortor. Nulla eu sem ac justo hendrerit lacinia sed vitae nulla.</p>
                </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="row va-ctr">
                
                <div className="col-sm-7">
                  <p>Vivamus convallis quis est a placerat. Nulla dapibus nulla at metus rutrum dignissim. Nam maximus semper feugiat. Sed nec felis ultricies, pulvinar quam eu, euismod orci. Quisque eu placerat eros. Sed sollicitudin, urna vitae tristique interdum, urna arcu sagittis dui, vitae venenatis dui justo et ipsum. Aliquam vel erat eu justo malesuada suscipit quis non velit. Vestibulum diam felis, imperdiet ut fringilla a, volutpat quis lorem. Donec mattis id nunc ullamcorper hendrerit. Etiam lectus leo, mollis nec orci id, tempor sodales quam. Ut egestas ullamcorper lorem, vitae convallis ipsum ornare sit amet. Proin et lobortis nibh.
            <br/><br/>Fusce rhoncus, ante et pellentesque euismod, nisi leo posuere libero, sit amet luctus velit sem a lectus. Praesent eu euismod odio, a tempor elit. Curabitur maximus ultrices urna, vel interdum justo efficitur vel. Sed porta, justo id pellentesque congue, nunc sem gravida justo, vitae mollis tellus odio ut odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id faucibus tortor. Nulla eu sem ac justo hendrerit lacinia sed vitae nulla.</p>
                </div>
                <div className="col-sm-5 text-right">
                  <figure>
                    <img src="https://placehold.co/600x400" />
                  </figure>
                </div>
            </div>
          </div>


        </div>
      </div>
    </section>

    <section className="btm-sec">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 class="text-left">Subtitle</h2>
          </div>

          <div className="col-sm-12">
            <div className="row va-ctr">
                
                <div className="col-sm-7">
                  <p>Vivamus convallis quis est a placerat. Nulla dapibus nulla at metus rutrum dignissim. Nam maximus semper feugiat. Sed nec felis ultricies, pulvinar quam eu, euismod orci. Quisque eu placerat eros. Sed sollicitudin, urna vitae tristique interdum, urna arcu sagittis dui, vitae venenatis dui justo et ipsum. Aliquam vel erat eu justo malesuada suscipit quis non velit. Vestibulum diam felis, imperdiet ut fringilla a, volutpat quis lorem. Donec mattis id nunc ullamcorper hendrerit. Etiam lectus leo, mollis nec orci id, tempor sodales quam. Ut egestas ullamcorper lorem, vitae convallis ipsum ornare sit amet. Proin et lobortis nibh.
            <br/><br/>Fusce rhoncus, ante et pellentesque euismod, nisi leo posuere libero, sit amet luctus velit sem a lectus. Praesent eu euismod odio, a tempor elit. Curabitur maximus ultrices urna, vel interdum justo efficitur vel. Sed porta, justo id pellentesque congue, nunc sem gravida justo, vitae mollis tellus odio ut odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id faucibus tortor. Nulla eu sem ac justo hendrerit lacinia sed vitae nulla.</p>
                </div>
                <div className="col-sm-5 text-right">
                  <figure>
                    <img src="https://placehold.co/600x400" />
                  </figure>
                </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  
  </>
  );
};

export default Home;
