import React, { useState } from 'react';

const bookData = [
    {
        title: "Responsive Web Design with HTML5 and CSS",
        description: "Harness the latest capabilities of HTML5 and CSS to create a single UI that works flawlessly on mobile phones, tablets, and desktops — plus everything in-between Key Features Understand what responsive web design is and its significance for modern web development Explore the latest developments in responsive web design including variable fonts, CSS Scroll Snap, and more Get to grips with the uses and benefits of the new CSS Grid layout Book Description Responsive Web Design with HTML5 and CSS, Third Edition is a renewed and extended version of one of the most comprehensive and bestselling books on the latest HTML5 and CSS tools and techniques for responsive web design."
    },
    {
        title: "Front End Development A Complete Guide",
        description: "Would you develop a Front End Development Communication Strategy? Which models, tools and techniques are necessary? How do you measure improved Front End Development service perception, and satisfaction? What qualifies as competition? What new services of functionality will be implemented next with Front End Development ? Defining, designing, creating, and implementing a process to solve a challenge or meet an objective is the most valuable role… In EVERY group, company, organization and department. Unless you are talking a one-time, single-use project, there should be a process."
    },
];

function Carousel() {
    const [openSections, setOpenSections] = useState([0]);
    const [allowMultiple, setAllowMultiple] = useState(false);

    const toggleSection = index => {
        // Handle the case where multiple sections can be open simultaneously
        if (allowMultiple) {
            setOpenSections(prev => {
                // Check if the section is already open
                const isSectionOpen = prev.includes(index);
                if (isSectionOpen) {
                    // If open, close it by filtering it out
                    return prev.filter(i => i !== index);
                } else {
                    // If not open, add it to the list of open sections
                    return [...prev, index];
                }
            });
        } else {
            // Handle the case where only one section can be open at a time
            setOpenSections(prev => {
                // Toggle the section: if it's open, close it; if it's closed, open it as the only open section
                return prev.includes(index) ? [] : [index];
            });
        }
    };
    

    return (
        <main style={{ width: '50%', margin: '40px auto', position: 'relative' }}>
            <h1 style={{ textAlign: 'center' }}>Amazon Book Titles</h1>
            <div>
                {bookData.map((book, index) => (
                    <div key={index}>
                        <div 
                            style={{ 
                                cursor: 'pointer', 
                                padding: '10px', 
                                backgroundColor: '#f1f1f1', 
                                borderBottom: '1px solid #ccc' }}
                            onClick={() => toggleSection(index)}
                        >
                            <div>{book.title}</div>
                            <div>{openSections.includes(index) ? '-' : '+'}</div>
                        </div>
                        {openSections.includes(index) && (
                            <div style={{ 
                                padding: '10px', 
                                backgroundColor: '#fff' }}>
                                {book.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <label>
                <input
                    type="checkbox"
                    checked={allowMultiple}
                    onChange={() => setAllowMultiple(!allowMultiple)}
                /> Multiple
            </label>
        </main>
    );
}




export default Carousel;
