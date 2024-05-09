import { useNavigation } from "react-router-dom";
import {
  Loading,
  Navbar,
  Hero,
  About,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from "../components";
import { customFetch } from "../utils/data";

const url = "/portfolio";

const portfolioQuery = {
  queryKey: ["portfolio"],
  queryFn: () => {
    return customFetch(url);
  },
};

export const loader = (queryClient) => {
  return async () => {
    const { data: projects } = await queryClient.ensureQueryData(
      portfolioQuery
    );
    const skills = [
      "All",
      ...new Set(
        projects
          .map((project) => {
            return project.skills;
          })
          .flat()
      ),
    ];
    return { skills, projects };
  };
};

const Home = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
