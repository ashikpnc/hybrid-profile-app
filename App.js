import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View,ImageBackground, ScrollView, Pressable } from 'react-native';
import profilePic from './assets/ashik-profile.jpg'
import bgImg from "./assets/bg-img.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';


export default function App() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#18392b",
      }}
    >
      <ImageBackground
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          paddingTop: 60,
          paddingHorizontal: 30,
        }}
        source={bgImg}
      >
        <Text
          style={{
            color: "#023020",
            fontSize: 50,
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Muhammed <Text style={{ color: "#d8fcd8" }}>Ashik</Text>
        </Text>
        <Image
          style={{
            width: "100%",
            height: 200,
            borderRadius: 15,
          }}
          source={profilePic}
        ></Image>
        <Text style={{ fontSize: 22, color: "#023020", fontWeight: "400" }}>
          <Text>
            Innovative Software Engineer Transforming Visions into Reality
            Welcome to the digital realm where Muhammed Ashik, a seasoned
            software engineer, orchestrates the symphony of code to craft
            seamless web and mobile applications. With a profound expertise in
            JavaScript and a flair for cutting-edge technologies, Ashik is a
            driving force in the ever-evolving landscape of software
            development.
          </Text>
          <Text style={{ color: "#d8fcd8" }}>
            Technical Prowess: Ashik's technical acumen shines brightly in his
            ability to create captivating web applications that blend
            functionality with aesthetics. Proficient in React and React Native,
            he masterfully brings ideas to life, delivering hybrid mobile
            applications that transcend platform boundaries. His command over
            JavaScript is not just a skill; it's an art form, evident in the
            fluidity and efficiency of the code he produces.{" "}
          </Text>
          <Text>
            Backend Wizardry: In the backend realm, Muhammed Ashik is a Node.js
            virtuoso. With a solid foundation in server-side development, he
            utilizes Node.js and Express.js to construct robust and scalable
            REST API servers. His code architecture is not just about
            functionality; it's a testament to his commitment to creating
            systems that stand the test of time.
          </Text>
          <Text style={{ color: "#d8fcd8" }}>
            Design Excellence:** Ashik's proficiency extends beyond mere coding;
            he is an architect of user experiences. Proficient in HTML, CSS, and
            Material-UI (MUI), he crafts interfaces that seamlessly blend
            functionality and aesthetics. Responsive design is not an
            afterthought but a fundamental aspect of his development philosophy,
            ensuring a seamless user experience across devices.
          </Text>
          <Text>
            Innovative Problem Solver:** In the dynamic world of software
            engineering, problem-solving is an art, and Ashik is a maestro. His
            solutions are not just fixes; they are elegantly engineered pathways
            to efficiency and excellence. Facing challenges head-on, he
            navigates complexities with finesse, turning roadblocks into
            stepping stones toward progress.
          </Text>
          <Text style={{ color: "#d8fcd8" }}>
            Passion for Learning:** Beyond his impressive skill set, Muhammed
            Ashik is a perpetual learner, always staying ahead of the curve in
            the rapidly evolving tech landscape. His insatiable curiosity and
            commitment to staying abreast of emerging technologies ensure that
            his projects are not just up-to-date but are often trailblazers in
            the industry.
          </Text>
          <Text>
            Collaborative Team Player:** In the collaborative world of software
            development, Ashik stands out as a team player. His excellent
            communication skills, coupled with his ability to articulate complex
            technical concepts in simple terms, make him an invaluable asset in
            team environments.
          </Text>
          <Text style={{ color: "#d8fcd8" }}>
            Conclusion:** Muhammed Ashik is not just a software engineer; he is
            a catalyst for digital innovation. His portfolio is a testament to a
            journey marked by excellence, creativity, and a relentless pursuit
            of mastery in the craft of software development. If you are seeking
            a dynamic professional to transform your vision into a technological
            reality, Muhammed Ashik is the name to remember.
          </Text>
        </Text>
        <View>
          <Pressable>
            <FontAwesomeIcon icon={faMugSaucer} />
          </Pressable>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}


