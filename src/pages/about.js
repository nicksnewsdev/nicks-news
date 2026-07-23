export const ABOUT = () => {
    return `
    <link rel="stylesheet" href="src/pages/about.css">
    <div class='about'>
        <div class='about_header'>
            <div class='header_bar'>
                <div class='box header_logo'>
                    <img src='src/logo.png' class='header_image'>
                </div>
                <div class='box header_socials'>
                    <a href='https://github.com/nicksnewsdev' target='_blank' rel='noopener noreferrer' class='socials_icon'><svg class='icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 0.1 -1.4 -0.5 -2 2.8 -0.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2 4.2 4.2 0 0 0 -0.1 -3.2s-1.1 -0.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0 -0.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6 -0.6 0.6 -0.6 1.2 -0.5 2V21"></path></svg></a>
                    <a href='https://www.linkedin.com/in/nicks-news-20b6a0298/' target='_blank' rel='noopener noreferrer' class='socials_icon'><svg class='icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2z"></path><path d="m8 11 0 5"></path><path d="m8 8 0 0.01"></path><path d="m12 16 0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg></a>
                    <a href='https://www.youtube.com/@nicksnewsdev' target='_blank' rel='noopener noreferrer' class='socials_icon'><svg class='icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4H6a4 4 0 0 1 -4 -4V8z"></path><path d="m10 9 5 3 -5 3z"></path></svg></a>
                    <a href='https://www.twitch.tv/nicksnewsdev' target='_blank' rel='noopener noreferrer' class='socials_icon'><svg class='icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c0.266 0 0.52 -0.105 0.707 -0.293l2.415 -2.414c0.187 -0.188 0.293 -0.442 0.293 -0.708V5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z"></path><path d="m16 8 0 4"></path><path d="m12 8 0 4"></path></svg></a>
                    <span class='header_socials_handle'>@nicksnewsdev</span>
                </div>
            </div>
            <div class='header_content'>
                <div class='box'>
                    <h1>About</h1>
                    <p> 
                        I am an 18-year-old programmer based in Brandenburg, Germany with an interest in computer science and low-level game design. Looking ahead, I aim to transition into software development.
                    </p>
                </div>
                <div class='box'>
                    <h1>Technologies</h1>
                    <p>
                        I have experience with a variety of programming languages like Lua, Python and Typescript. However, I am currently aiming to improve my programming expertise by learning C++ and Rust. I do not support excessive use of artificial intelligence for programming.
                    </p>
                </div>
            </div>
        </div>
        <div class='about_section'>
            <div class='box section_content'>
                <h1>Philosophy</h1>
                <p class='bullet'>I believe a systems reliability is capped by the transparency of its dependencies.</p>
                <p class='bullet'>I aim to build simple abstractions that prioritize the specific requirements of the project over general-purpose functionality.</p>
                <p class='bullet'>I treat hardware resources as finite assets, where efficiency is a technical requirement.</p>
            </div>
            <div class='box section_bar'>
                <svg class='header_image section_icon' viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-rule="evenodd" d="M7.333 3.233c-1.463-.681-3.68-1.043-5.755.653A.667.667 0 0 0 1.333 4.402v8.265a.667.667 0 0 0 1.089.516c1.824-1.49 3.823-.873 4.911-.17V3.233zm1.333 0v9.779c1.089-.704 3.087-1.32 4.912.17a.667.667 0 0 0 1.088-.516V4.402a.667.667 0 0 0-.244-.516c-2.076-1.696-4.293-1.334-5.756-.653z" clip-rule="evenodd" stroke-width="0"></path></svg>
            </div>
        </div>
        <div class='about_section'>
            <div class='box section_bar'>
                <svg class='header_image section_icon' viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" fill-rule="evenodd" d="M3.333 13.333a2 2 0 0 1-2-2V4.667a2 2 0 0 1 2-2h9.334a2 2 0 0 1 2 2v6.666a2 2 0 0 1-2 2H3.333zM5.083 5.48a.667.667 0 1 0-.833 1.04l2.5 2a2 2 0 0 0 2.5 0l2.5-2a.667.667 0 1 0-.833-1.04l-2.5 2a.667.667 0 0 1-.834 0l-2.5-2z" clip-rule="evenodd" stroke-width="0"></path></svg>
            </div>
            <div class='box section_content'>
                <h1>Contact</h1>
                <p>For professional requests, you can reach me at <span class='credit'>contact@nicks.news</span></p>
                <p>If your reason for contacting me is non-professional, you can reach me through any of my social media accounts.</p>
                <p>Misuse or unecesarry messaging will lead to communication cutoffs.</p>
            </div>
        </div>
    </div>
    `;
};
