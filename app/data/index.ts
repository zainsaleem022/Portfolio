export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 0,
    title: "My Skills",
    description: "I constantly try to improve",
    className: "lg:col-span-5 md:col-span-6 md:row-span-2 lg:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 1,
  //   title: "I prioritize client collaboration, fostering open communication ",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "justify-end",
  //   img: "/b1.svg",
  //   spareImg: "",
  // },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 lg:row-span-3",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/encoded_code.png",
  //   spareImg: "/b4.svg",
  // },

  {
    id: 5,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "md:col-span-3 md:row-span-2 relative",
    imgClassName:
      "absolute w-60 right-3 top-14 sm:w-60 sm:right-10 sm:top-10  md:w-80 lg:w-60 md:top-36 md:right-8 lg:top-8 lg:right-16",
    titleClassName: "flex md:justify-start lg:justify-center sm:justify-start",
    img: "/encoded_code.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WhatsUp - Real Time Chat Application",
    des: "Built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring secure JWT authentication and a responsive design using Chakra UI. It leverages Socket.io for instant messaging, includes features like typing indicators, and offers a modern, intuitive user interface.",
    img: "chat_app.png",
    iconLists: [
      "/react.svg",
      "/bootstrap.svg",
      "/materialui.svg",
      "/socket.svg",
      "/nodejs.svg",
      "/mongodb.svg",
    ],
    link: "https://whatsup-kxff.onrender.com/",
    github_link: "https://github.com/zainsaleem022/Real-Time-Chat-App-MERN",
  },
  {
    id: 2,
    title: "FYP Management System",
    des: "It is a comprehensive project developed using .NET Web Forms and MS SQL Server, designed to efficiently manage Final Year Project (FYP) details and groups. Accessible by four distinct roles students, committee members, panel members, and supervisors the system offers tailored interfaces for each role. Users can register, log in, and utilize the platform to assign supervisors and panels to FYPs. Furthermore, panels can provide feedback, evaluate, and grade FYPs, streamlining the entire FYP management process with precision and ease of use.",
    img: "/fypms1.png",
    iconLists: ["/dotnet.svg", "/sqlserver.svg"],
    link: "https://github.com/zainsaleem022/FYP_Management_System",
    github_link: "https://github.com/zainsaleem022/FYP_Management_System",
  },
  {
    id: 3,
    title: "EduSync - Online Class Management System",
    des: "Developed an online classroom management system using Java, FXML, and MySQL. Facilitated communication among parents, students, and teachers, enabling teachers to post assignments and announcements, and students to view, interact, and upload solutions.",
    img: "/edu.png",
    iconLists: ["/java.svg", "/mysql.svg"],
    link: "https://github.com/zainsaleem022/EduSync",
    github_link: "https://github.com/zainsaleem022/EduSync",
  },
  {
    id: 4,
    title: "BFit - Workout Tracking Fitness Website",
    des: "This is a comprehensive fitness website built using the MERN stack (MongoDB, Express.js, React, Node.js) to help users set, track, and achieve their exercise goals. Users can set their weekly exercise goals, log their daily workouts, and monitor their progress through an intuitive interface. The platform features an extensive exercise library, allowing users to explore various exercises and mark their favorites for easy access.",
    img: "/bfit.png",
    iconLists: [
      "/react.svg",
      "/bootstrap.svg",
      "/materialui.svg",
      "/nodejs.svg",
      "/mongodb.svg",
    ],
    link: "https://github.com/zainsaleem022/Fitness-Website",
    github_link: "https://github.com/zainsaleem022/Fitness-Website",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Development Intern @ -> Zigron [On-site]",
    desc: [
      "Assisted in the development of web-based platforms using MERN Stack, MEAN Stack, and Next.js.",
      "Enhanced interactivity and optimizations across various applications.",
      "Worked with technologies like Redis, GraphQL, JWT, and OAuth Authentications.",
      "Developed scalable APIs using Node.js and reverse proxy servers like NGINX.",
      "Dockerized and deployed websites on AWS EC2 and Vercel.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "MERN Stack Development Intern @ -> CodeAlpha [Remote]",
    desc: [
      "Got a strong grip on full stack development using MERN stack by developing basic web app like a todo list manager to developing advanced real time chat application using Scockets",
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: [
  //     "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   ],
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: [
  //     "Developed and maintained user-facing features using modern frontend technologies.",
  //   ],
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/zainsaleem022",
  },
  {
    id: 2,
    img: "/twit.svg",
    // link: "https://github.com/zainsaleem022",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/zain-saleem-b052a024a/",
  },
];
