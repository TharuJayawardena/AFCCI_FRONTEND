import React from "react";
import Typography from "@mui/material/Typography";


export default function KnowledgeCard(props = {
    imgPath: String
}) {
    return (
        <div className="card mb-4 mt-5">
            <img className="card-img-top" src={props.imgPath} style={{
                marginTop: '20px',
                marginLeft: '20px',
                marginRight: '20px',
                width: '260px',
                height: '200px'
            }} />
            <div className="card-body text-left" >
                
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

                <Typography gutterBottom size="10px" component="div" color="#6A489C">
                    Read more
                </Typography>

            </div>
        </div>
    );

};
