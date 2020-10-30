import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.css";
import Header from "../components/Header";

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <Header />

      <div className={styles.about__content}>
        <img
          src="https://media.wired.com/photos/5aa1ea433ea6d47cc89340be/16:9/w_2400,h_1350,c_limit/StarWars-JohnFavreau.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          neque purus, dictum id egestas sed, condimentum in leo. Nulla lobortis
          elit et nisi euismod volutpat. Nam ornare fermentum feugiat. Quisque
          ac bibendum urna. Nulla condimentum elementum velit eget fringilla.
          Quisque dui augue, ornare eu accumsan ac, volutpat ac tellus. Donec
          nunc elit, sodales id leo ac, auctor tincidunt ipsum. Sed ut odio quis
          ex ornare consectetur nec et metus. Nunc fermentum est a molestie
          cursus. Sed bibendum volutpat facilisis. Pellentesque eu ligula arcu.
          Vivamus venenatis ultricies mollis. Sed lobortis ante et quam mollis,
          quis consectetur enim iaculis. Suspendisse fringilla quam sit amet leo
          rhoncus semper eu sit amet nunc. Maecenas neque justo, dictum a mauris
          id, convallis euismod enim. Aliquam elit purus, laoreet eget ultricies
          non, tempor id enim. Sed non tellus et odio aliquet ullamcorper non
          vel dui. Morbi maximus luctus massa, porta sodales magna congue et.
          Mauris laoreet vitae ipsum sit amet ullamcorper. Morbi consequat
          posuere tempus. Vivamus at nibh erat. Phasellus pellentesque erat sed
          fringilla lobortis. Praesent sollicitudin, lorem porttitor congue
          hendrerit, eros magna dignissim mauris, eget varius neque mi tincidunt
          elit. Cras id sollicitudin nulla, sed eleifend ipsum. Integer aliquam
          tincidunt justo, tincidunt hendrerit enim facilisis at. Maecenas
          viverra ligula ipsum, ultricies tristique ipsum tincidunt nec. Quisque
          non lacus a erat lacinia sodales sit amet ut ligula. Donec ex nulla,
          placerat in rutrum ac, vulputate et ligula. Praesent sed ex placerat,
          fermentum mi sit amet, pellentesque ipsum. Curabitur porttitor tortor
          at finibus scelerisque. Sed blandit neque in arcu tincidunt, in
          hendrerit odio placerat.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default about;
