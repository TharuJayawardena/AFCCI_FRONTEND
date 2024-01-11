import React from "react";
import Typography from "@mui/material/Typography";


export default function KnowledgeCard(props = {
    imgPath: String
}) {
    return (
        <div className="container">
            <div className="card mt-5">
                <img className="card-img-top"  src={props.imgPath} style={{
                    // marginTop: '15px',
                    // marginLeft: '15px',
                    // marginRight: '15px',
                    // marginBottom: '20px',
                   
                   
                }} />
                <div className="card-body text-left">

                    <Typography gutterBottom variant="h6" fontSize="17px" component="div" color="#000000">
                        10 essintials tips for starting a small buisness
                    </Typography>
                    <Typography variant='body' color="#000000">
                        13-Sep-2023
                    </Typography>


                    <br />
                    <Typography variant="body" color="#000000" size='16px' className="mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in interdum velit. Pellentesque
                        habitant morbi tristique senectus
                    </Typography>

                    <Typography gutterBottom size="10px" fontSize="12px" component="div" color="#4e8fbe" className="mt-3">
                        <b>Read more</b>
                    </Typography>

                </div>
            </div>
        </div>
    );

};
