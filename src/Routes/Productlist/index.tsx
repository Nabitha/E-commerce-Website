import chair from "../../Assets/images/chair.svg"
import soba from "../../Assets/images/soba.svg"
import watch from "../../Assets/images/watch.svg"
import whitechair from "../../Assets/images/whiteChair.svg"
import bag from "../../Assets/images/bag.svg"
import grid from "../../Assets/images/grid-view-.svg"
import list from "../../Assets/images/list-view.svg"
import color from "../../Assets/images/color.svg"
import bluecart from "../../Assets/images/blue_cart.svg"
import blueheart from "../../Assets/images/blue-heat.svg"
import bluepluse from "../../Assets/images/blue-pluse.svg"
const Productlist = () =>{
    return(<>
{/* full div  */}
<div>
    {/* head  */}
    <div className="flex space-x-36 justify-center p-4">
        {/* heading  */}
        <div>
            <div className="text-indigo-900 font-medium text-lg">Ecommerce Acceories & Fashion item </div><div className="text-gray-400 font-normal text-sm         ">About 9,620 results (0.62 seconds)</div>
        </div>
        <div className="flex space-x-20 text-blue-800 font-normal">
            <div>Per Page: <input type="number" className="w-16 border border-gray-300"/> </div>
            <div><form >
                <label >Sort By:</label>
                <select name="sort" id="sort" className="border border-gray-300 mx-2">
                    <option value="BestMarch">BestMarch</option>
                    <option value="BestApril">BestApril</option>
                    <option value="Besttoday">Today</option>
                    <option value="Bestmonth">BestMonth</option>
                </select></form> </div>
            <div className="flex items-center gap-2 self-start space-x-2 mx-2">View: <img src={grid} /><img src={list} /></div>
            <div> <input type="text" className="w-30 border border-gray-300"/></div>
        </div>


    </div>
    {/* products  */}
    <div className="grid grid-cols-4 space-x-2 space-y-5 place-items-center">
        {/* 1 Product */}
        <div>
            {/* image  */}
            <div className="group relative bg-gray-100 grid place-items-center hover:bg-gray-300 h-60 w-60 ">
          <div className="absolute left-4 bottom-3 grid space-y-2 hidden group-hover:grid ">
           <img src={bluecart} className="rounded-full hover:bg-white p-2"/>
           <img src={bluepluse} className="rounded-full hover:bg-white p-2"/>
          <img src={blueheart} className="rounded-full hover:bg-white p-2"/>
          </div>
          <img src={chair} className="w-44"/>
          </div>

            {/* description  */}
            <div className="grid place-items-center ">
                <div className="text-indigo-900 font-bold">Vel elit euismod</div>
                <div><img src={color} /></div>
                <div><span className="text-indigo-900 font-normal">$26.00 </span><span className="text-pink-500">$42.00</span></div>
            </div>
        </div>
        {/* 2 Product */}
        <div>
            {/* image  */}
            <div className="bg-gray-100 hover:bg-gray-300 grid place-items-center h-60 w-60">
                <img src={soba} className="w-44"/>
            </div>
            {/* description  */}
            <div className="grid place-items-center ">
                <div className="text-indigo-900 font-bold">Vel elit euismod</div>
                <div><img src={color} /></div>
                <div><span className="text-indigo-900 font-normal">$26.00 </span><span className="text-pink-500">$42.00</span></div>
            </div>
        </div>
        {/* 3 Product */}
        <div>
            {/* image  */}
            <div className="bg-gray-100 hover:bg-gray-300 grid place-items-center h-60 w-60">
                <img src={whitechair} className="w-44"/>
            </div>
            {/* description  */}
            <div className="grid place-items-center ">
                <div className="text-indigo-900 font-bold">Vel elit euismod</div>
                <div><img src={color} /></div>
                <div><span className="text-indigo-900 font-normal">$26.00 </span><span className="text-pink-500">$42.00</span></div>
            </div>
        </div>
        {/* 4 Product */}
        <div>
            {/* image  */}
            <div className="bg-gray-100 hover:bg-gray-300 grid place-items-center h-60 w-60">
                <img src={bag}  className="w-44"/>
            </div>
            {/* description  */}
            <div className="grid place-items-center ">
                <div className="text-indigo-900 font-bold">Vel elit euismod</div>
                <div><img src={color} /></div>
                <div><span className="text-indigo-900 font-normal">$26.00 </span><span className="text-pink-500">$42.00</span></div>
            </div>
        </div>
        {/* 5 Product */}
        <div>
            {/* image  */}
            <div className="bg-gray-100 hover:bg-gray-300 grid place-items-center h-60 w-60">
                <img src={watch}  className="w-44"/>
            </div>
            {/* description  */}
            <div className="grid place-items-center ">
                <div className="text-indigo-900 font-bold">Vel elit euismod</div>
                <div><img src={color} /></div>
                <div><span className="text-indigo-900 font-normal">$26.00 </span><span className="text-pink-500">$42.00</span></div>
            </div>
        </div>
    </div>
</div>



</>)}
export default Productlist