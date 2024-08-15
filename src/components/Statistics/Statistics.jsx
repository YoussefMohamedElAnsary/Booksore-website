import './Statistics.css';
import Navbaradmin from "../../components/NavAndFooter/NavAdmin"
// import Genre_txt from './Genre_txt.jsx';
import {  useState } from 'react';
import Footer from "../NavAndFooter/Footer.jsx";
import Book from "../Home/Book.jsx";
import testbook from '../../components/assets/testbook.jpg';
const Statistics = () => {
    
    const [books, setBooks] = useState([
        { book_cover: testbook, title: 'Moghamrat Anso', author: 'Anso', price: '250' },
        { book_cover: testbook, title: 'Moghamrat Anso', author: 'Anso', price: '250' },
        { book_cover: testbook, title: 'Moghamrat Maryam', author: 'Anso', price: '250' },
        { book_cover: testbook, title: 'Moghamrat Maryam', author: 'Anso', price: '250' }
      ]);
   

    return (
    <div className="Statsmain">
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
       <div className="AdminNav"> <Navbaradmin/> </div>
       
       <div> 
        <h3 className="Statsheading"> Statistics:
         </h3> 
         </div>

         <div className="StatsBox">

            <div className="Typechart">
            <button type="submit" className="General" >Geners</button>
            <button type="submit" className="Sales" >Sales</button>   

            </div>


            <div className="aboutstats">
                All Time
            </div>


           <div className="barchart">
           <div className="Shapeparts">
            <div className="Shape1"></div>
            <div className="ChartText"> 60% <br/> Language </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape2"></div>
            <div className="ChartText"> 80% <br/> Horror </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape3"></div>
            <div className="ChartText"> 40% <br/> Psychology </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape4"></div>
            <div className="ChartText"> 70% <br/> Mystery </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape5"></div>
            <div className="ChartText"> 90% <br/> Romance </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape6"></div>
            <div className="ChartText"> 20% <br/> Classic </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape7"></div>
            <div className="ChartText"> 70% <br/> Fantasy </div>

            </div>

           </div>
           
            
          
         </div>
 
  
       <div className="Performancebox">
        
            <h4 className="TitleText">
                Performance
            </h4>

            <div className="Parts">
            <div className="percentage"> +24% </div>
            <p className="text">Orders Placed By Customers</p> 
            </div>

            <div className="Parts">
            <div className="percentage"> 2% </div>
            <p className="text">Refund for orders that don't reach the customer</p> 
            </div>
           
            <div className="Parts">
            <div className="percentage"> 98% </div>
            <p className="text">Completed Orders</p> 
            </div>
            
        </div>

        <div className="TopBooksBox">
           
           <div className="Organzie">

           <div className="TitleText">Top Books </div>
           
           <div className="List">
           <select className="SList" name="Months" id="Months">
       <option value="January">January</option>
       <option value="Feburary">Feburary</option>
       <option value="March">March</option>
       <option value="April">April</option>
       <option value="May">May</option>
       <option value="June">June</option>
       <option value="July">July</option>
       <option value="Septembr">September</option>
       <option value="October">October</option>
       <option value="November">November</option>
       <option value="December">December</option>

           </select>

           </div>
          



           </div>
            
         
            

           
           
            <div className="TopBookspart">
            <div className='book'> <Book book={books[0]}/> 
            <h3 className="topbookpercent"> 24% </h3>
            </div> 
                <div className='book'> <Book book={books[1]}/>  <h3 className="topbookpercent"> 24% </h3> </div> 
                <div className='book'> <Book book={books[2]}/>  <h3 className="topbookpercent"> 24% </h3> </div> 
                <div className='book'> <Book book={books[3]}/>  <h3 className="topbookpercent"> 24% </h3> </div> 
            </div>

        </div>

        <div className="Footer"> <Footer/></div>
      
        
    

        

       

    </div>
    )
}
export default Statistics