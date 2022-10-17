import React from 'react';
import './about.scss'

export default function About() {
    return (
        <>
            <div class="container">
                <div class="circles"></div>
                <div class="details-container">
                    <div class="avatar">
                        <img src="https://i.suar.me/l3zYA/l" class="img-fluid" alt="" />
                    </div>
                    <div class="about">
                        <div class="name">
                            <p>
                                Hello There!
                            </p>
                            <h1>
                                I'm Ram Sharma
                            </h1>
                        </div>
                        <div class="about-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto ut accusamus maxime laborum vel et consectetur, eveniet nobis, iure aperiam. Fuga illo impedit hic possimus tempora asperiores. Dicta, esse!
                            </p>
                            <button>Download Resume</button>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="skills-container">
                    <button>
                        Reader
                    </button>
                    <button>
                        Coder
                    </button>
                    <button>
                        Designer
                    </button>
                </div>
            </div>
        </>
    )
}