import image1 from "../public/images/image.png";
import image2 from "../public/images/imagen2.png";
import image3 from "../public/images/imagen3.png";

const MemoCodeComponent = () => {
  return (
    <>
      <p>
        This was my first React js project. I was just finishing learning React
        from a course at Free Code Camp and I want to test the new knowledge. A
        few days later I was watching a Youtube video of a YouTuber called “Hola
        Mundo”. In this video, the Youtuber talked about how to get an
        entry-level position in tech and mentioned some project ideas that
        people can use to show off their knowledge. One of these project ideas
        was a memory game, thus how Memo Code was born.
      </p>
      <p>
        To be realistic this is the most simple application made it whit react
        that you can make. It’s a simple page that displays some boxes (using a
        CSS grid) and when some of them get clicked, it turns up. On a state,
        the app keeps the “id” of the first box clicked, if the second box
        clicked by the user has the same “id”, the two boxes keep turning up,
        but if the second “id” it’s not equal to, both boxes go down again and a
        new attempt beginning.
      </p>
      <p>
        To add more complexity I decided to add a chronometer to know how much
        time takes for the player to finish the game. Also, I included a “tries”
        value to represent the attempts when the boxes don’t match. And finally,
        to add an extra feature, when the game is over, the player can introduce
        his name and save it on local storage, so he/she can get his/her
        previous results or the results from his/her friends.
      </p>
    </>
  );
};

const FilmaniaComponent = () => {
  return (
    <>
      <p>
        One of my greatest passions is cinema. I love to watch movies and I
        enjoy learning about direction, photography, scripts, and everything
        that makes up a movie. It is one of my hobbies. That’s why I decided to
        create Filmanía.
      </p>
      <p>
        Filmanía it’s my blog and it’s the place where I post my opinions,
        recommendations, tops, and different things about movies that I’ve seen.
      </p>
      <p>
        The frontend of this project was made with Nextjs (deployed on Vercel)
        using static pages and server-side rendering. This is where I started. I
        wanted to do something like an old Newspaper, so I got inspired by some
        designs from Dribble and then I did this design with Adobe XD. After
        that, I started building the components, the CSS, and some of the
        frontend logic.
      </p>
      <p>Then I continued with the backend.</p>
      <p>
        On the backend, we have Strapi (deployed on Heroku; it’s the free tier
        of Heroku, that’s why when you click on one of the sections takes time
        to load the server-side render. ), who is a very powerful open-source
        headless CMS. I had to modify the code of Strapi to add GraphQL and
        Contentful. I needed GraphQL because the API response of Strapi returns
        a lot of information and, if I just needed to display a few posts, I’d
        have a lot of information that I wouldn’t use. And I added Contentful
        because I needed a place where I could store images with responsive
        sizes.
      </p>
      <p>
        And finally, I completed the project by getting the data with static
        pages in the simple blog post and the “home” page, and with server-side
        rendering in the “section” pages.
      </p>
    </>
  );
};

const BeatComponent = () => {
  return (
    <>
      <p>
        This was my most complex project. I always studied and did different
        things on my own without really knowing how much time I invest in it.
        That’s why I created Beat App.
      </p>
      <p>
        With Beat, you can have a record of your actions, track your activities,
        set goals, and complete them with real metrics. You can add some daily
        tasks and when you go to start that task, you can start a timer to keep
        track of the time you spend on it. And when you finish, you will have
        different charts with information and analytics about your activities.
      </p>
      <p>
        All this project was deployed in an EC2 server of AWS. I used Docker
        Compose to handle the containers.
      </p>
      <p>
        On the UI container, we have an NGINX container who expose to port 80
        with the build made on the node image of my React project. The React
        (with TypeScript) project it’s all the frontend made it with Tailwind
        CSS, using JWT (cookie for 1 day and refresh token every 15 minutes),
        fetching the data with Axios and displaying it with Chart.Js.
      </p>
      <p>
        On the backend container, we have node js with TypeScript and it’s a
        CRUD. With this backend, you can create users, handle login, logout and
        the requests (with cookies and refresh tokens), create tasks, create a
        new instance of a task and stop it, change goals and fetch all the data
        parsed for the UI charts. All this is connected with the PostgreSQL
        container.
      </p>
      <p>
        The PostgreSQL container it’s just the DB that’s connected to the
        backend container.
      </p>
      <p>
        The NGINX container exposes port 80 which listens to port 3000 of the UI
        and port 3001 of the backend. The first one it’s exposed in the path “/”
        and the second in the path “/backend/”.
      </p>
      <p>
        The last 2 containers are in charge of automating SSL certificates and
        exposing port 80 (connected to the previous NGINX with the frontend and
        backend) and 433, redirecting traffic from the former to the latter.
      </p>
    </>
  );
};

const data = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    id: 1,
  },
  {
    title: "Technologies",
    skills: [
      "Node Js",
      "Express",
      "Tailwind Css",
      "GraphQL",
      "Strapi",
      "Docker",
      "Docker-Compose",
      "Git",
      "Linux",
    ],
    id: 2,
  },
  { title: "Frameworks", skills: ["React Js", "Next Js"], id: 3 },
  {
    title: "Related Knowledge",
    skills: ["Calculus I & II", "Algebra & Geometry", "Ecommerce & Marketing"],
    id: 4,
  },
];

const dataProject01 = [
  {
    title: "FrontEnd",
    skills: ["React Js", "TypeScript", "Tailwind Css", "Chart.Js"],
    id: 1,
    openItem: true,
  },
  {
    title: "BackEnd",
    skills: ["Node Js", "TypeScript", "Express", "PostgreSQL", "JWT"],
    id: 2,
    openItem: true,
  },
  {
    title: "Deploy",
    skills: ["NGINX", "Docker", "Docker Compose", "AWS", "SSL Certificates"],
    id: 3,
    openItem: true,
  },
];
const dataProject02 = [
  {
    title: "FrontEnd",
    skills: [
      "Next Js",
      "GraphQL",
      "Markdown",
      "CSS",
      "Apollo",
      "Framer Motion",
    ],
    id: 1,
    openItem: true,
  },
  {
    title: "BackEnd",
    skills: ["Strapi", "GraphQL", "PostgreSQL", "Contentful"],
    id: 2,
    openItem: true,
  },
  {
    title: "Deploy",
    skills: ["Vercel", "Heroku"],
    id: 3,
    openItem: true,
  },
];
const dataProject03 = [
  {
    title: "FrontEnd",
    skills: ["React Js", "CSS"],
    id: 1,
    openItem: true,
  },
  {
    title: "Deploy",
    skills: ["Git Hub"],
    id: 2,
    openItem: true,
  },
];

const projects = [
  {
    title: "Beat",
    number: "01.",
    text: "This is my most complex project. With Beat you can get real metrics of your daily activities.",
    image: image1,
    layoutId: "imageOne",
    data: dataProject01,
    link: "https://www.beatapp.live/",
    repository: "https://github.com/NicolasBiondini/beat-app",
    component: <BeatComponent />,
  },
  {
    title: "Filmanía",
    number: "02.",
    text: "Filmanía is the name of my personal blog, and it is the place where I publish some posts talking about cinema.",
    image: image2,
    layoutId: "imageTwo",
    data: dataProject02,
    link: "https://filmania-frontend.vercel.app/",
    repository: "https://github.com/NicolasBiondini/filmania-frontend",
    component: <FilmaniaComponent />,
  },
  {
    title: "Memo Code",
    number: "03.",
    text: "Memo Code is a simple memory game related to software development.",
    image: image3,
    layoutId: "imageThree",
    data: dataProject03,
    link: "https://nicolasbiondini.github.io/memo-code/",
    repository: "https://github.com/NicolasBiondini/memo-code",
    component: <MemoCodeComponent />,
  },
];

module.exports = {
  data,
  dataProject01,
  projects,
};
