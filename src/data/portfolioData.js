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
    }
    // Add more academic items below following the same structure.
  ],

  extracurricular: [
    {
      title: "Robotics — FTC Team Vector 5233",
      subtitle: "Team Captain & multi-year competitor",
      bullets: [
        "Led mechanical, electrical, and programming subteams.",
        "Hosted scrimmages and performed outreach to younger students."
      ]
    },
    {
      title: "Boy Scouts — Eagle Scout",
      subtitle: "Leadership & long-term community project",
      bullets: [
        "Earned Eagle Scout (2023) and multiple national awards.",
        "Planned and executed a multi-week Philmont backpacking High Adventure trip."
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
      title: "Baseball — Player & Umpire",
      subtitle: "Longstanding involvement in baseball",
      bullets: [
        "Played recreationally and travel baseball from age 5 to 17.",
        "Seven years as a baseball umpire; now also a trainer."
      ]
    }
  ],

  skills: [
    {
      title: "Programming & Embedded Systems",
      subtitle: "Python, C, C++, Arduino, Raspberry Pi",
      bullets: [
        "Built projects using Raspberry Pi and microcontrollers.",
        "Created a wallpaper rotation algorithm in Python."
      ]
    },
    {
      title: "Writing & Communication",
      subtitle: "Published author and magazine contributor",
      bullets: [
        "Published an article in a fly fishing magazine.",
        "Staff writer for the Collegiate Times and contributor to Engineers Forum."
      ]
    }
  ]
}

export default data
