import React from "react";

function contact () {
    return (
        <div class="container">
            <div style="text-align:center">
                <h2>Contact Us</h2>
                    <p>Visit our instagram page for more cute picture</p>
            </div>
            <div class="row">
                <div class="column">
                    <img src="./public/Spunky_Tanadi.jpg" style="width:100%" />
                </div>
                <div class="column">
                    <form action="/action_page.php">
                        <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default Contact;