import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SiteContext = createContext();

const initialDataeng = {
  baslik: {
    hero: "Creative thinker Minimalism lover",
    heroabout:
      "Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
    profile: "Profile",
    skills: "Skills",
    projects: "Projects",
    hireme: "Hire Me",
    profile: "Profile",
    aboutme: "About Me",
    birthday: "Birthday",
    city: "City of Residence",
    education: "Education",
    role: "Preference role",
    footer: "Let’s work together on your next product.",
    footerlink: "Personal Blog",
  },
};
const initialDatatr = {
  baslik: {
    hero: "Yaratıcı düşünür Minimalizm aşığı",
    heroabout:
      "Merhaba, ben Almila. Full-stack geliştiriciyim. Harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir ön uç ürünleri hazırlayacak bir Geliştirici arıyorsanız. Haydi el sıkışalım.",
    profile: "Profil",
    skills: "Yetenekler",
    projects: "Projeler",
    hireme: " Beni İşe Al",
    aboutme: "Hakkımda",
    birthday: "Doğum Günü",
    city: "İkametgah Şehri",
    education: "Eğitim Durumu",
    role: "Tercih Ettiği Rol",
    footer: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    footerlink: "Kişisel Sayfam",
  },
};

export const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useState("TÜRKÇE");
  const [theme, setTheme] = useState("DARK");
  const [store, setStore] = useState(initialDataeng);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`https://654b8b475b38a59f28ef48e5.mockapi.io/Projects/`)
      .then((response) => {
        console.log("dataver", response);
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("istek sonlandırıldı");
      });
  }, []);

  useEffect(() => {
    if (lang === "ENG") {
      setStore(initialDatatr);
    }
    if (lang === "TÜRKÇE") {
      setStore(initialDataeng);
    }
  }, [lang]);

  return (
    <SiteContext.Provider
      value={{ lang, theme, setLang, setTheme, store, setStore, projects }}
    >
      {children}
    </SiteContext.Provider>
  );
};
