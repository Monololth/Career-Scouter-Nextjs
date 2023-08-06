import styles from '../styles/Home.module.css';
import { Dropdown } from "@nextui-org/react";
import CD from './components/Contacts.js'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Contact() {
  return (
    <div className={styles.container}>

      <Header />
      <Nav />

      {/* Main content begins here */}
      <main className={styles.content_wrapper}>

            <h1 className={styles.title}>
            <highlight>Contact</highlight>
            </h1>

            <p className={styles.description}>
                Here you can find your tutor and teacher contacts to get help with something.  
                < br/>
                Choose your class from dropdown below to see your teachers!
            </p>

            {/* Experiemental feature for student to choose their own class and then site showing their own teachers and tutors. */}

            <Dropdown>
                <Dropdown.Button flat>Choose your class</Dropdown.Button>
                    <Dropdown.Menu aria-label="Classes">
                        <Dropdown.Item key="class1">Class 1</Dropdown.Item>
                        <Dropdown.Item key="class2">Class 2</Dropdown.Item>
                        <Dropdown.Item key="class3">Class 3</Dropdown.Item>
                        {/*<Dropdown.Item key="delete" color="error">Delete file</Dropdown.Item> */}
                    </Dropdown.Menu>
            </Dropdown>

            {/* Experiemental Stuff ends */}

            <div>
              <CD />
            </div>
        </main>

        <Footer />

    </div>
  )
}