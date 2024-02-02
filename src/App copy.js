
import Header from './Header';
import Banner from './banner';
import Home from './Home';
import Footer from './Footer';
import './bootstrap.min.css';
import './bootstrap-theme.min.css';
import './custom.css';

import MyForm from './Form';
import React, { useState } from "react";
import { ethers } from "ethers";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
});

// Button handler button for handling a
// request event for metamask
const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
        // res[0] for fetching a first wallet
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((res) =>
                accountChangeHandler(res[0])
            );
    } else {
        alert("install metamask extension!!");
    }
};

// getbalance function for getting a balance in
// a right format with help of ethers
const getbalance = (address) => {
  console.log("get")
    // Requesting balance method

    await provider.getBalance(address, "latest")
    window.ethereum
        .request({
            method: "eth_getBalance",
            params: [address, "latest"],
        })
        .then((balance) => {
            // Setting balance

            console.log(ethers.utils.formatEther(balance))
            setdata({
                Balance: ethers.utils.formatEther(balance),
            });
        });
};

// Function for getting handling all events
const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
        address: account,
    });

    console.log(data.address)
    // Setting a balance
    getbalance(account);
    console.log(data.Balance)

};


  return (
    <div className="App">
      <Header />
      <Banner />
      {/* <Home /> */}

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
            <Button className="btn-primary mbpx-20" onClick={btnhandler}>
              Connect MetaMask Wallet 
                 {data.Balance}
            </Button>
          
                 
            <MyForm />
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

      <Footer />
    </div>
  );
}

export default App;
