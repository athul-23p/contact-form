import styles from "./App.module.css";
import ContactList from "./components/ContactList";
const initState = [
  {
    id: 111,
    first_name: "Annete",
    last_name: "Murphy",
    phone: "9876541230",
    img: "https://via.placeholder.com/150/0000FF/808080?Text=profile_pic",
    email: "sara.cruz@example.com",
  },
  {
    id: 222,
    first_name: "Theresa",
    last_name: "Watson",
    phone: "5479236412",
    img: "https://via.placeholder.com/150/0000FF/808080?Text=profile_pic",
    email: "michael.mitchel@example.com",
  },
  {
    id: 333,
    first_name: "Cody",
    last_name: "Howard",
    phone: "8456325416",
    img: "https://via.placeholder.com/150/0000FF/808080?Text=profile_pic",
    email: "glen.lane@example.com",
  },
  {
    id: 444,
    first_name: "Max",
    last_name: "Lane",
    phone: "6874592604",
    img: "https://via.placeholder.com/150/0000FF/808080?Text=profile_pic",
    email: "dwight.fleming@example.com",
  },
  {
    id: 555,
    first_name: "Marvin",
    last_name: "Fisher",
    phone: "7643269410",
    img: "https://via.placeholder.com/150/0000FF/808080?Text=profile_pic",
    email: "kelly.howard@example.com",
  },
  {
    id: 666,
    first_name: "Brooklyn",
    last_name: "Mccoy",
    phone: "5976321450",
    img: "https://via.placeholder.com/150/0000FF/808080?Text=profile_pic",
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
