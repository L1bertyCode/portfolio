interface MainPageProps { };
import { Projects } from "@/widgets/Projects";
import s from "./MainPage.module.scss";
import { Banner } from "@/widgets/Banner";
import { Skills } from "@/widgets/Skills";
import { Contacts } from "@/widgets/Contacts";

const MainPage = (props: MainPageProps) => {
  return (
    <div className={s.MainPage}>
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
};
export default MainPage;