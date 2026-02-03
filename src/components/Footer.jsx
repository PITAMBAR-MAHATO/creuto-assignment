import React from 'react';

const Footer = () => {
    const links = [
        "Meta", "About", "Blog", "Jobs", "Help", "API", "Privacy", "Terms", "Locations", "Instagram Lite", "Threads", "Contact Uploading & Non-Users", "Meta Verified"
    ];

    return (
        <footer className="px-4 ">
            <div className="flex flex-wrap justify-center gap-4 mb-3">
                {links.map((link) => (
                    <a key={link} href="#" className="text-xs text-gray-500 hover:underline">{link}</a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
