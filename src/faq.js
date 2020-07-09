import React from 'react';
import './App.css'

function FAQ() {
    return (
            <div>
                <header className="sammy-header">
                    <h1>FAQ</h1>
                    <p>How do I use my playground?</p>
                    <ol className="Answer">
                        <li>Join the react-playground git repository in reclass' git organization</li>
                        <li>Connect to the repo, create a branch and make sure that you are able to pull from the repo</li>
                        <li>Run "npm install" in IDE console</li>
                        <li>navigate to team/ <p>{"{your playground}"}</p> folder</li>
                        <li>Run "npm run dev" in IDE console, after a while a tab directing to "localhost:3000" should pop up</li>
                        <li>Make any changes your want! The .js file is your .html file and anything you use such as images, css, goes into your src folder in the same directory as your name</li>
                        <li>When you are done, run "npm run build" in IDE console</li>
                        <li>Git add everything you changed, including the build folder, commit, and push it into your branch in github</li>
                        <li>Once github finalizes and updates changes to master, <a href="https://react-playground1.herokuapp.com/">Heroku</a> will automatically update</li>
                        <br></br>
                        Any questions? Contact Yi on our Slack!
                    </ol>
                </header>
            </div>
    );
}

export default FAQ