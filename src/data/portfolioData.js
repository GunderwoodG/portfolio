// This file exports a JavaScript object containing the content for the site.
// Using a JS file (instead of raw JSON) allows comments and easier edits later.
import codefest from '../assets/codefest.png'
import ctart from'../assets/ct_art.png'
import vtq from '../assets/cert_VTQ.png'
import fallfest from '../assets/cert_fallfest.png'

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
      ],
      details: {
        images: [],
        tags: [],
        longText: ""
      }
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
    },
    {
      title: "Fall 2024",
      subtitle: "First Semester Courses (19 Credit Hours)",
      date: "",
      description: "",
      bullets: ["ENGE 1414 - Introduction To Engineering (4 Credits)","ECE 1004 - Introduction to Electrical and Computer Engineering (3 Credits)","MATH 2204 - Introduction to Multivariable Calculus (Calc 3) (3 Credits)","PHYS 2306 - Foundations of Physics II (Electricity and Magnetism) (4 Credits)","ENGR 1054 - Gallileo Seminar (2 Credits)","MATH 2114 - Linear Algebra (Transfer Credit from LSU) (3 Credits)"],
      details: {
        bullets: [
        {
          "title": "ENGE 1414 - Introduction To Engineering",
          "subpoints": [
            "Project-based learning with emphasis on teamwork and ethics.",
            "Freshman-level condensed course",
            "Learned engineering problem solving, design methods, CAD, Matlab, programming, and professional expectations.",
            "4 Credit Hours"
          ]
        },
        {
          "title": "ECE 1004 - Introduction to Electrical and Computer Engineering",
          "subpoints": [
            "Freshman-level course",
            "Included hands-on labs with circuits and Arduino.",
            "3 Credit Hours"
          ]
        },
        {
          "title": "MATH 2204 - Introduction to Multivariable Calculus (Calc 3)",
          "subpoints": [
            "Sophomore-level course",
            "3 Credit Hours"
          ]
        },
        {
          "title": "PHYS 2306 - Foundations of Physics II (Electricity and Magnetism)",
          "subpoints": [
            "Sophomore-level course",
            "Included lab component with experiments related to electromagnetism.",
            "4 Credit Hours"
          ]
        },
        {
          "title": "ENGR 1054 - Gallileo Seminar",
          "subpoints": [
            "Two Semester Seminar Course",
            "Professional development, ethics, and communication skills for engineers.",
            "2 Credit Hours"
          ]
        },
        {
          "title": "MATH 2114 - Linear Algebra (Transfer Credit from LSU)",
          "subpoints": [
            "Class taken during Fall Semester 2024 at VT",
            "Online course through LSU",
            "3 Credit Hours",
            "\"Self Taught\""
          ]
        }
      ]
      }
    },
    {
      title: "Spring 2025",
      subtitle: "Second Semester Courses - Sophomore by Credit (21 Credit Hours)",
      date: "",
      description: "",
      bullets: ["ECE 2024 - Circuits and Devices (3 Credits)","ECE 2514 - Computational Engineering (3 Credits)","ECE 2544 - Digital Systems (FPGAs) (3 Credits)","MATH 2214 - Differential Equations (3 Credits)","MGT 2064 - Foundations of Entrepreneurship (3 Credits)","ITDS 1114 - Design Appreciation (3 Credits)","ARCH 1044 - Life in the Built Environment (3 Credits)"],
      details: {
        bullets: [
        {
          "title": "ECE 2024 - Circuits and Devices",
          "subpoints": [
            "Sophomore-level course",
            "Included hands-on labs with circuits (diode bridges, rectifiers, LEDs, op-amps).",
            "3 Credit Hours"
          ]
        },
        {
          "title": "ECE 2514 - Computational Engineering",
          "subpoints": [
            "Introduction to C++",
            "Sophomore-level course",
            "3 Credit Hours"
          ]
        }
        ,
        {
          "title": "ECE 2544 - Digital Systems (FPGAs)",
          "subpoints": [
            "Introduction to Verilog and FPGA design",
            "Project based course",
            "Sophomore-level course",
            "3 Credit Hours"
          ]
        },
        {
          "title": "MATH 2214 - Differential Equations",
          "subpoints": [
            "Sophomore-level course",
            "3 Credit Hours"
          ]
        },
        {
          "title": "MGT 2064 - Foundations of Entrepreneurship",
          "subpoints": [
            "Sophomore-level course",
            "3 Credit Hours"
          ]
        },
        {
          "title": "ITDS 1114 - Design Appreciation",
          "subpoints": [
            "General Education Course",
            "3 Credit Hours"
          ]
        },
        {
          "title": "ARCH 1044 - Life in the Built Environment",
          "subpoints": [
            "General Education Course",
            "3 Credit Hours"
          ]
        }
      ]
      }
    },
    {
      title: "Fall 2025",
      subtitle: "Third Semester Courses - Junior by Credit (17 Credit Hours)",
      date: "",
      description: "",
      bullets: ["ECE 2214 - Physical Electronics (3 Credits)","ECE 2564 - Embedded Systems (3 Credits)","ECE 2714 - Signals and Systems (3 Credits)","ECE 2804 - Integrated Design Project (3 Credits)","ECE 3514 - Data Structures and Algorithms (3 Credits)","STAT 4714 - Introduction to Probability and Statistics for Engineers (2 Credits)"],
      details: {
        bullets: [
        {
          "title": "ECE 2214 - Physical Electronics",
          "subpoints": [
            "Sophomore-level course",
            "Included hands-on labs with circuits (MOSFETS).",
            "3 Credit Hours"
          ]
        },
        {
          "title": "ECE 2564 - Embedded Systems",
          "subpoints": [
            "MSP432 Microcontroller programming in C",
            "Sophomore-level course",
            "Project heavy course",
            "3 Credit Hours"
          ]
        },
        {
          "title": "ECE 2714 - Signals and Systems",
          "subpoints": [
            "Coninuous and discrete signals analysis",
            "Convolution, Fourier Series, Fourier Transforms",
            "Sophomore-level course",
            "3 Credit Hours"
          ]
        },
        {
          "title": "ECE 2804 - Integrated Design Project",
          "subpoints": [
            "Sophomore-level course",
            "Partner based (intensive) project",
            "3 Credit Hours"
          ]
        },
        {
          "title": "ECE 3514 - Data Structures and Algorithms",
          "subpoints": [
            "Junior-level course",
            "3 Credit Hours"
          ]
        },
        {
          "title": "STAT 4714 - Introduction to Probability and Statistics for Engineers",
          "subpoints": [
            "3 Credit Hours"
          ]
        }
      ]
      }
    }
    // Add more academic items below following the same structure.
  ],
academic_projects: [
    {
      title: "Infrared Radio Teletype",
      subtitle: "ECE 2804 - Integrated Design Project",
      date: "",
      description: "Partner based project using Sophomore level ECE skills. My project was to implement an IR Radio Teletype to communicate over 5 feet with strict limitations (0.4mA current max, no lenses/optical enhancments, limited frequncy bandwidth).",
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
      bullets: [ "https://github.com/GunderwoodG/ECE2654-Project1-PixelMonarch"
      ]
    },
    {
      title: "Touhou",
      subtitle: "ECE 2564 - Embedded Systems",
      date: "",
      description: "Implemented another MSP432 based video game using C programming and embedded harward.",
      bullets: [ "Used skills learned in class and from my extracuricular VTGD",
        "Github coming soon..."
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
        "Learned values outside of technical skills that make video games stand out."
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
        "Notable Article: Life on Campus without Social Media: https://www.collegiatetimes.com/opinion/campus-life-without-social-media/article_620a7d0e-f338-4237-9559-7d30253ab650.html"
      ],
      details: {
        images: [ctart]
      }
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
        "Engaged with fellow Hokie startups."
      ]
    },
    {
      title: "IEE@VT",
      subtitle: "",
      bullets: [
        "ECE Networking"
      ]
    },
    {
      title: "VThacks13",
      subtitle: "Prompt Composer",
      description: "Created a project in a weekend with a team of three.",
      bullets: [
        "https://github.com/GunderwoodG/vthacks_ai_team2_forked"
      ]
    },
    {
      title: "Marriott Codefest 2025",
      subtitle: "Design Based Personalized Travel Experience",
      description: "Created a project in a weekend with a team of five.",
      bullets: [
        "https://github.com/GunderwoodG/code-fest-2025_forked"
      ],
      details: {
        images: [codefest],
        tags: [],
        longText: ""
      }
    },
    {
      title: "Game Jam 2025",
      subtitle: "Mario's Mayhem Two",
      description: "Solo dev on a computer vision (CV) controlled retro video game",
      bullets: [
        "https://github.com/GunderwoodG/GameJamExternalScript",
        "Collaborators welcomed!"
      ]
    },
    {
      title: "Qiskit Fall Fest 2025",
      subtitle: "VTQ Hackathon",
      description: "",
      bullets: [
        "Learned basics of quantum computing and theory",
        "Learned Qiskit framework"
      ],
      details: {
        images: [vtq, fallfest],
        tags: [],
        longText: ""
      }
    },
    {
      title: "VT Incubator Program",
      subtitle: "Startup Accelerator",
      description: "",
      bullets: [
        "Accepted into VT's startup incubator program for my baseball swing analyzer startup.",
        "Networking with other entrepreneurs and mentors."
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
      title: "Underwood Bat Co.",
      subtitle: "Family Business Est. 2022",
      bullets: [
        "Handmade wood baseball bats"
      ]
    },
    {
      title: "Baseball Swing Analyzer",
      subtitle: "New Venture",
      bullets: [
        "Using CV to give feedback to player's on their swing.",
        "Making affordable coaching available to all."
      ]
    }
  ],

  athletics: [
    {
      title: "Varsity Cross Country",
      subtitle: "Team Captain — State Championship (senior year)",
      bullets: [
        "Led team for three seasons"
      ]
    },
    {
      title: "Varsity Indoor Track and Field",
      subtitle: "Team Captain",
      bullets: [
        "Led team for three years",
        "Coached the high jump my senior year",
        "Set school high jump record (2023)"
      ]
    },
    {
      title: "Varsity and Club Baseball - Player & Coach",
      subtitle: "Longstanding involvement in baseball",
      bullets: [
        "Played recreationally and travel baseball from age 5 to 17.",
        "Coached for multiple teams starting at age 12.",
        "Varsity player and team captain for three season"
      ]
    }
  ],

  workexperience: [
    {
      title: "Baseball Umpire",
      subtitle: "2019 - Present",
      bullets: [
        "Responsible for enforcement and officiation of safety, sportsmanship, and the rules of baseball and softball for players aged eight to twenty-two.",
        "Trainer and recruiter for future umpires.",
        "Managed conflicts and ensured a positive experience for all participants."
      ]
    },
    {
      title: "Baltimore Sailing Center",
      subtitle: "Summer 2021 - 2022",
      bullets: [
        "Instructed students aged eight to sixteen for two summers on common outdoor first aid and environmental practices in addition to various fishing and fly fishing skills."
      ]
    },
    {
      title: "Handshake AI Fellowship",
      subtitle: "2025",
      bullets: [
        "Completed AI projects, data annotation, and ML implementation.",
        "Project Spectra",
        "Project Alexandria"
      ]
    }
  ]

}

export default data
