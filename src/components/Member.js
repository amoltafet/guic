import React from "react";
import erich from "../images/erich.jpeg";
function Member() {
    return(
        <div>
            <div class="row">
                <div className="col">
                <div class="about-card">
                        <h5 class="card-title">Erich Lang</h5>
                        <img src={erich} alt="Erich Lang" class="img-thumbnail"/>
                        <p class="card-text">President</p>
                        <a href="./" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="spacer"/>
                    <div class="about-card">
                        <h5 class="card-title">Ethan Davis</h5>
                        <img src={erich} alt="Erich Lang" class="img-thumbnail" />
                        <p class="card-text">Vice President</p>
                        <a href="./" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="spacer"/>
                    <div class="about-card">
                                <h5 class="card-title">Alan Vestergaard</h5>
                                <img src={erich} alt="Erich Lang" class="img-thumbnail"/>

                                <p class="card-text">Treasurer</p>
                                <a href="./" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
    
            <div className="col">
                <div class="about-card">
                    <h5 class="card-title">Kalim Rehemtullah</h5>
                    <img src={erich} alt="Erich Lang" class="img-thumbnail" />

                    <p class="card-text">Controller</p>
                    <a href="./" class="btn btn-primary">Go somewhere</a>
                </div>   
                <div className="spacer"/> 
                <div class="about-card">
                    <h5 class="card-title">Stijn de Jong</h5>
                    <img src={erich} alt="Erich Lang" class="img-thumbnail" />
                    <p class="card-text">Communicator</p>
                    <a href="./" class="btn btn-primary">Go somewhere</a>
                </div>
                <div className="spacer"/>
                <div class="about-card">
                            <h5 class="card-title">Leah Matthews</h5>
                            <img src={erich} alt="Erich Lang" class="img-thumbnail"  />
                            <p class="card-text">Creative Director</p>
                            <a href="./" class="btn btn-primary">Go somewhere</a>
                </div>

            </div>
        </div>
    </div>

    );
}

export default Member;