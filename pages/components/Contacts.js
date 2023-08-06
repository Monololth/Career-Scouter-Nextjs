import styles from '/styles/Home.module.css';
const ContactDetails = ({ CD }) => {
    const contacts = [
        { /* In here. teachers and other persons related to school can be added using following structure */
        name: 'Example Class 001',
        id: 1,
        personnel: [
            {
            name: 'Arja Vale',
            job: "Teacher",
            phone: "+358 99 999 9999",
            email: "a.vale@school.fi",
            photo: "/teacher1.png"
            },
            {
            name: 'Valtteri Tekoäly',
            job: "Teacher",
            phone: "+358 00 000 0000",
            email: "v.tekoaly@school.fi",
            photo: "/teacher2.png"
            },
            {
                name: "Sanna Apulainen",
                job: "Student Tutor",
                phone: "+358 10 000 0100",
                email: "s.avustaja@school.fi",
                photo: "/studenttutor1.png"
            }
        ]
        }, 
        /* Here begins another class where different teachers can be added that are or not affiliated with other courses */
        {
        name: "Example Class 002",
        id: 2,
        personnel: [
            {
                name: 'Valtteri Tekoäly',
                phone: "+358 00 000 0000",
                email: "v.tekoaly@school.fi",
                photo: "/teacher2.png"
            },
            {
                name: "Sanna Apulainen",
                job: "Student Tutor",
                phone: "+358 10 000 0100",
                email: "s.avustaja@school.fi",
                photo: "/studenttutor1.png"
            }
        ]
        }
        
    ]

    /* Below is the method for going though the data and present them on the site */

    const Contacts = () => {
        return (
            <>
            {contacts.map((data => (
            <>
            <h1 className={styles.title}>{data.name}</h1>
            <div className={styles.grid}>
                {data.personnel.map((pparts => {
                return (
                    <a className={styles.card}>
                        <img src={pparts.photo} alt="Teacher" className={styles.portrait} />
                        <p>{pparts.name}</p>
                        <p>{pparts.job}</p>
                        <p>{pparts.phone}</p>
                        <p>{pparts.email}</p>
                    </a>
                )}))}
            </div>
            </>
            )))}
            </>
        )
    }

    return (
        <div>
            <Contacts contacts={contacts}/>
        </div>
        )
}

export default ContactDetails