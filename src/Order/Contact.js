import React,{useState} from 'react'

const Contact = () => {

  const [phone, setPhone] = useState("")
  const [about, setAbout] = useState("")

  const [myfile, setMyfile] = useState('');
  const [myfileName, setMyFileName] = useState('');



    const handleChange2 = (e) => {
    setMyfile(e.target.files[0])
    setMyFileName(e.target.files[0].name)
    
  };

      const handleChange = (e) => {
  setPhone(e.target.value)
    
  };
      const handleChange1 = (e) => {
setAbout(e.target.value)
    
  };

  const formSubmit = e => {
  e.preventDefault();
  
    console.log("value", phone,about,myfile,myfileName)
}



      return (
            <>
                 
  <div class="container">
    <div class="section">
      <h5 class="pagetitle">Contact Us</h5>
          </div>
  </div>
  




  
<div class="container">
  <div class="section">

    <div class="map-wrap contactus">
      <i class="mdi mdi-map-marker-outline "></i>
      <img class="responsive-img z-depth-1" src="assets/images/contact-map.jpg"/>

    </div>

    <div class="card contactus">
      <div class="row ">
                <div class="col s12 pad-0"><h5 class="bot-20 sec-tit  ">Address</h5>      <div>FF 1, Softtech Empire, Sector-8, Tech Street, New York City, USA - 32342</div>
      </div>
    </div>
        </div>



  </div>
</div>


<div class="container">
  
  <form onChange={formSubmit}>
    <div class="form-group">
      <label for="email">Phone:</label>
      <input type="text" class="form-control" onChange={handleChange} value={phone} placeholder="Enter email" />
    </div>
    <div class="form-group">
      <label for="pwd">About Your Product:</label>
                <input type="text" onChange={handleChange1} value={about} class="form-control" placeholder="weight and what type of product"/>
    </div>
   
    <button type="submit" class="btn btn-default">Submit</button>
            
    </form>
            
</div>

            </>
      )
}



export default Contact
