// This file exports a JavaScript object containing the content for the site.
// Using a JS file (instead of raw JSON) allows comments and easier edits later.
const data = {
  academic: [
    {
      title: "AP Scores",
      subtitle: "High School",
      date: "",
      description: "",
      bullets: [
        "AP Calculus AB - Score 5 (2023)",
        "AP Calculus BC - Score 5 (2024)",
        "AP Physics 1 - Score 3 (2024)",
        "AP Physics C: Mechanics - Score 5 (2024)",
        "AP Computer Science Principles - Score 4 (2024)",
        "AP English Literature and Composition - Score 3 (2024)",
        "AP English Language and Composition - Score 4 (2024)"
      ]
    },
    {
      title: "Awards",
      subtitle: "",
      date: "",
      bullets: [
        "AP Scholar with Distinction (2024)",
        "Dean's List (Fall 2024)",
        "Dean's List (Spring 2025)"
      ]
    }
    // Add more academic items below following the same structure.
  ],
academic_projects: [
    {
      title: "Infrared Radio Teletype",
      subtitle: "ECE 2804 - Integrated Desing Project",
      date: "",
      description: "Partner based project using Sophomore level ECE skills. My project was to implement an IR Radio Teletype to communicate over 5 feet with strct limitations (0.4mA current max, no lenses/optical enhancments, limited frequncy bandwidth).",
      bullets: [
      ]
    },
    {
      title: "Football Simulator",
      subtitle: "ECE 2514 - Computational Engineering",
      date: "",
      description: "This project was repeated multiple times with different specifications to emphasise the best design practices for different applications. Iterations included pointer and reference designs, FSM designs, and OOP designs.",
      bullets: [
      ]
    },
    {
      title: "CPU",
      subtitle: "ECE 2544 - Digital Systems (FGPAs)",
      date: "",
      description: "Designed and implemented fully functional CPU with 15 different operations (including arithmetic and move operators), registers, etc. In another noteable project, I encoded and decoded cryptographic messages using Verilog.",
      bullets: [
      ]
    },
        {
      title: "Pixel Monarch",
      subtitle: "ECE 2564 - Embedded Systems",
      date: "",
      description: "Implemented a MSP432 based video game using C programming and embedded harward.",
      bullets: [
      ]
    }
    // Add more academic items below following the same structure.
  ],
  notable_courses: [
    {
      title: "Introduction To Engineering",
      subtitle: "Virginia Tech — Freshman-level condensed course",
      date: "",
      description: "Learned engineering problem solving, design methods, CAD, Matlab, programming, and professional expectations.",
      bullets: [
        "Project-based learning with emphasis on teamwork and ethics."
      ]
    },
    {
      title: "Digital Systems (FPGAs)",
      subtitle: "Verilog, CPU design, and low-level programming",
      date: "",
      bullets: [
        "Designed a functional CPU using FPGA toolchain.",
        "Worked from transistor level design up through registers."
      ]
    },
    {
      title: "Physics (Electricity and Magnetism)",
      subtitle: "Circuits, Maxwell, Faraday, Lenz, Electromagnetics, and Optics",
      date: "",
      bullets: [
        "Physics is my favorite subject and I hope to puruse a Minor or Master's for it!"
      ]
    },
     {
      title: "Introduction to ECE",
      subtitle: "Circuit basics, capacitors, inductors, and labs.",
      date: "",
      bullets: [
        "This class (and the Professor) helped me discover my love for ECE in my first semester."
      ]
    }
    // Add more academic items below following the same structure.
  ],

  extracurricular: [
    {
      title: "Robotics — FTC Team Vector 5233",
      subtitle: "Team Captain & multi-year competitor",
      bullets: [
        "Led mechanical, electrical, and programming subteams.",
        "Hosted scrimmages and performed outreach to younger students.",
        "Spread STEM awareness"
      ]
    },
    {
      title: "Boy Scouts — Eagle Scout",
      subtitle: "Leadership & long-term community projects",
      bullets: [
        "Earned Eagle Scout (2023) and multiple national awards.",
        "Planned and executed a multi-week Philmont backpacking High Adventure trip."
      ]
    },
    {
      title: "Virginia Tech Game Development Club",
      subtitle: "Video game design.",
      bullets: [
        "Learned programming skills nessecary to create captivating video games.",
        "Learned values outside of techincal skills that make video games stand out."
      ]
    },
    {
      title: "Pickleball Club",
      subtitle: "",
      bullets: [
        "Weekly practices",
        "Bi-weekly competitions",
        "3.06 DUPR Rating"
      ]
    },
    {
      title: "AI/ML Club",
      subtitle: "",
      bullets: [
        "CNN, GNN, Reinforcment learning, Immitation learning",
      ]
    },
    {
      title: "Colligate Times",
      subtitle: "Campus Newpaper",
      bullets: [
        "Opinions Contributer",
        "Notable Article: Life on Campus without Socail Media: https://www.collegiatetimes.com/opinion/campus-life-without-social-media/article_620a7d0e-f338-4237-9559-7d30253ab650.html"
      ]
    },
    {
      title: "Engineer's Forum Magazine",
      subtitle: "Campus Magazine",
      bullets: [
        "Notable Article: Studying for VT Physics the Right Way."
      ]
    },
    {
      title: "Entreprenurship Club",
      subtitle: "",
      bullets: [
        "Engaed with fellow Hokie startups."
      ]
    },
    {
      title: "IEE@VT",
      subtitle: "",
      bullets: [
        "ECE Networking"
      ]
    }
  ],

  athletics: [
    {
      title: "Varsity Cross Country & Track",
      subtitle: "Team Captain — State Championship (senior year)",
      bullets: [
        "Led team for three seasons; coached high jump when needed.",
        "Set a school record in high jump."
      ]
    },
    {
      title: "Baseball - Player & Coach",
      subtitle: "Longstanding involvement in baseball",
      bullets: [
        "Played recreationally and travel baseball from age 5 to 17.",
        "Coached for multiple teams starting at age 12."
      ]
    }
  ],

  skills: [
    {
      title: "Programming & Embedded Systems",
      subtitle: "Python, C, C++, Arduino, Raspberry Pi, R, MATLAB, HTML, CSS",
      bullets: [
        "Built projects using Raspberry Pi and microcontrollers.",
        "Created a desktop wallpaper rotation algorithm in Python.",
        "Data analysis and interpretation with R and MATLAB",
        "AI/ML/CV projects"
      ]
    },
    {
      title: "Writing & Communication",
      subtitle: "Published author and magazine contributor",
      bullets: [
        "Published an article in a fly fishing magazine.",
        "Staff writer for the Collegiate Times and contributor to Engineers Forum."
      ]
    },
    {
      title: "AI/ML/CV",
      subtitle: "Discovering the world of AI.",
      bullets: [
        "Implementing personal projects to be used in real world applications"
      ]
    }
  ],

  personal_projects: [
    {
      title: "Programming & Embedded Systems",
      subtitle: "Python, C, C++, Arduino, Raspberry Pi, R, MATLAB, HTML, CSS",
      bullets: [
        "Built projects using Raspberry Pi and microcontrollers.",
        "Created a desktop wallpaper rotation algorithm in Python.",
        "Data analysis and interpretation with R and MATLAB",
        "AI/ML/CV projects"
      ]
    }
  ]

}

export default data
