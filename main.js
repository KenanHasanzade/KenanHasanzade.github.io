
const resume = {
    firstName: 'Kenan',
    lastName: 'Hasanzade',
    jobTitle: 'Front-end Developer',
    city: 'Baku',
    country: 'Azerbaijan',
    phone: '+994993440034',
    email: 'kenanhsn034@gmail.com',
    education: [
      {
        school: 'ASOIU',
        degree: 'Bachelor',
        graduationDate: '2020',
        description: 'Software Engineering'
      },
      {
        school: 'WSB University',
        degree: 'Bachelor',
        graduationDate: '2023',
        description: 'Computer Science,Data scientist'
      },
    ],
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/KenanHasanzade'
      },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/kenan-hasanzade/'
      }
    ],
    skills: [
      'HTML',
      'Css',
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'Figma',
      'Redux',
      'Bootstrap',
      'MaterialUi'
    ],
    languages: ['English', 'Russian', 'Turkish'],
    professionalSummary: `I’m a Frontend Developer with a strong understanding of Responsive Web Design.

    I am Highly Skilled in HTML, CSS, JavaScript, SAAS, Bootstrap, Material UI, SCSS, Responsive Web Design, React.js, Redux, jQuery, Figma,. I possess good written and oral communication skills, which enable me to explain complex web app issues in easy-to-understand terms.`,
    employmentHistory: [
      {
        jobTitle: 'Front-End Developer',
        startDate: 'May 2023',
        endDate: 'Present',
        employer: 'Fraktal Technologies ',
        city: 'Baku',
        achievements: [
          'As an experienced front-end developer specializing in React.js, I excel at crafting visually appealing and user-friendly websites. With proficiency in HTML, CSS, and JavaScript, I transform design concepts into seamless, responsive interfaces. I leverage React.js to develop dynamic and interactive web applications, ensuring cross-browser compatibility and optimal performance. Collaborating closely with designers and back-end developers, I consistently deliver high-quality projects within deadlines, combining technical expertise with strong teamwork.'
        ]
      },
      {
        jobTitle: 'Front-End Developer',
        startDate: 'June 2022  ',
        endDate: ' May 2023',
        employer: 'Ateshgah Insurance Company',
        city: 'Baku',
        achievements: [
          'Collaborated with designers, back-end developers, and other stakeholders to develop user-friendly, visually appealing web applications and online platforms ' ]
      },
      {
        jobTitle: 'IT Specialist',
        startDate: 'November 2020',
        endDate: 'June 2022',
        employer: 'Nobel Hotel',
        city: 'Baku',
        achievements: [
         'Managed and maintained computer systems, software, and hardware. Provided technical support to hotel staff and guests for issues related to computers, software. Working on Linux' ]
      }
    ],
    photo: './myphoto.jpg',
  }
  
  const formatResume = (r) => ({
    ...r,
    address: [
      r.country,
      r.city,
      r.postalCode
    ].filter(Boolean).join(', ')
  })
  
  new Vue({
    el: "#app",
    data: formatResume(resume)
  });
  
  /**
   * Wait for animatable-component to be loaded (Only for VanillaJS)
   **/
  function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
  }
  if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
  } else animatableLoaded()