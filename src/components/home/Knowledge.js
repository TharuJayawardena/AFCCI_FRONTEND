import React from 'react';
import KnowledgeCard from './KnowledgeCard';
const Knowledge = () => {
    return (

        <div class="container mt-5 mb-5">
            <div class="text-center">
                <h6 style={{color:"#166caa"}}><b>Unlock Insights</b></h6>
                <p style={{fontSize:"30px", fontWeight:"10px"}}><b>Knowledge</b><span style={{color:"#0a98ff"}}><b> Hub</b></span></p>
                <p>Explore our repostry of valubele insighs and resources to stay informed and empowered<p>in your buisness journey</p></p>
            </div>
<div className="row justify-content-center">

   
   <div className=' col-lg-3 col-md-4'>
        <KnowledgeCard imgPath="copy2.png"/>
    </div>

    <div className='col-lg-3 col-md-4'>
        <KnowledgeCard imgPath="buisness.png"/>
    </div>
    <div className='col-lg-3 col-md-4'>
        <KnowledgeCard imgPath="women.png"/>
    </div>
   
 
</div>


<div class="d-flex justify-content-center">
<button type="button" class=" btn mt-5">View All</button>
</div>
</div>




    );
};

export default Knowledge;