import one from "./assests/images/d1.jpg"
import two from "./assests/images/d2.jpg"
import three from "./assests/images/d3.jpg"
import four from "./assests/images/d4.jpg"
import five from "./assests/images/d5.jpg"
import six from "./assests/images/d6.jpg"

function Product() {
    return (
      <div class="products">
        <div class="box">
  
          <img src={one} alt=""></img>
          <p>Lavender River View</p>
        </div>
  
  
        <div class="box">
          <img src={three} alt="" ></img>
          <p>Mountain View Extreme</p>
        </div>
        <div class="box">
          <img src={two} alt=""></img>
          <p>Winter green leaf</p>
        </div>
  
        <div class="box">
          <img src={four} alt=""></img>
          <p>Winter green leaf</p>
        </div>
        <div class="box">
          <img src={five} alt=""></img>
          <p>Dark green leaf</p>
        </div>
        <div class="box">
          <img src={six} alt=""></img>
          <p>Colourfull green leaf</p>
        </div>
      </div>
  
    )
  }
  export default Product