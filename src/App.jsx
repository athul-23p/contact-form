import styles from "./App.module.css";
import ContactList from "./components/ContactList";
const initState = [
  {
    id: 111,
    first_name: "Annete",
    last_name: "Murphy",
    phone: "9876541230",
    img: "https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg",
    email: "sara.cruz@example.com",
  },
  {
    id: 222,
    first_name: "Theresa",
    last_name: "Watson",
    phone: "5479236412",
    img: "https://www.cnet.com/a/img/resize/19b841ad4e179a5835c1cfbe664649412b4a7d9c/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg?auto=webp&width=940",
    email: "michael.mitchel@example.com",
  },
  {
    id: 333,
    first_name: "Cody",
    last_name: "Howard",
    phone: "8456325416",
    img: "https://static.vecteezy.com/system/resources/thumbnails/002/002/247/small_2x/beautiful-black-woman-avatar-character-icon-free-vector.jpg",
    email: "glen.lane@example.com",
  },
  {
    id: 444,
    first_name: "Max",
    last_name: "Lane",
    phone: "6874592604",
    img: "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
    email: "dwight.fleming@example.com",
  },
  {
    id: 555,
    first_name: "Marvin",
    last_name: "Fisher",
    phone: "7643269410",
    img: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
    email: "kelly.howard@example.com",
  },
  {
    id: 666,
    first_name: "Brooklyn",
    last_name: "Mccoy",
    phone: "5976321450",
    img: "https://static.vecteezy.com/system/resources/thumbnails/002/002/363/small_2x/man-avatar-character-isolated-icon-free-vector.jpg",
    email: "chad.stephens@example.com",
  },
];
function App() {
  return (
    <div className={styles.App}>
      <ContactList contacts={initState} />
    </div>
  );
}

export default App;
