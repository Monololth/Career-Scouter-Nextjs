import styles from '/styles/Home.module.css';

function loadJSONFile(file, callback) {
    fetch(file)
      .then(response => response.json())
      .then(data => {
        callback(null, data);
      })
      .catch(error => {
        callback(error);
      });
  }
  
  // Usage:
  loadJSONFile('careerpath_data_en.json', (error, data) => {
    if (error) {
      console.error('Error loading JSON file:', error);
      return;
    }
  
    // Use the data array here
    console.log("Data loaded:", data);
  });

function handleClick(event, path) {
    event.preventDefault();
    getID(path);
  }
  
  function getID(id) {
    if (process.browser) {
      var scrollDiv = document.getElementById(id).offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    }
  }

  function isNotURL(str) {
    // Regular expression pattern to match against common URL formats
    const urlPattern = /^(https?:\/\/)?(www\.)?([^\s.]+\.\S{2,}|localhost[\:?\d]*)\S*$/;
  
    // Return true if the string does not match the URL pattern, indicating it's not a URL
    return !urlPattern.test(str);
  }

const CareersData = ({ CareerD }) => {
    const careers = [
        { /* In here. teachers and other persons related to school can be added using following structure */
        name: 'Career List',
        id: 1,
        careerdata: [
            {
                name: "Test A",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus consequat consequat. Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique. Proin nec augue. Quisque aliquam tempor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis. Pellentesque cursus sagittis felis. Pellentesque porttitor, velit lacinia egestas auctor, diam eros tempus arcu, nec vulputate augue magna vel risus. Cras non magna vel ante adipiscing rhoncus. Vivamus a mi. Morbi neque. Aliquam erat volutpat. Integer ultrices lobortis eros.",
                videolink: "https://www.youtube.com/embed/0FM8jYcS238"
            },
            {
                name: "Test E",
                description: 'Arja Vale',
                videolink: "Teacher"
            },
            {
                name: "Test B",
                description: 'Arja Vale',
                videolink: "Teacher"
            },
            {
                name: "Test D",
                description: 'Arja Vale',
                videolink: "Teacher"
            },
            {
                name: "Test C",
                description: 'Arja Vale',
                videolink: "Teacher"
            }
        ]
        }
        
    ]

    /* Below is the method for going though the data and present them on the site */

    const sortedCareerData = [...careers[0].careerdata].sort((a, b) => a.name.localeCompare(b.name));

    const CareerData = () => {
        return (
            <>
            <h1 id="top" className={styles.title}>
                Career page
            </h1>
            <p className={styles.description}>
                Here you can find information about possible Career Paths and learn about them and what they require.
            </p>

                <div className={styles.career_page_wrapper}>
                <div className={styles.grid_column_left}>
                    <div className={styles.card_career_list}>
                        <h3>Career List</h3>
                        {sortedCareerData.map((parts => {
                        return (
                                    <p className={styles.generic_button_base}>
                                        <a onClick={(e) => handleClick(e, parts.name)} className={styles.generic_button_object}>
                                        Scroll to {parts.name}
                                        </a>
                                    </p>  

                        )}))}
                    </div>
                </div>
                <div className={styles.grid_column_right}>
                    {sortedCareerData.map((parts => {
                        return(      
                            <div className={styles.card_career}>  
                                <h3 id={parts.name}>{parts.name}</h3>
                                    <p className={styles.career_card_paragraph}>
                                    {parts.description}
                                    </p>

                                    {isNotURL(parts.videolink) ? (
                                        null
                                    ) : <><h3>Video about {parts.name}</h3> <div className={styles.autoresizableiframe}><iframe className={styles.careervideo} frameborder="0" allowfullscreen="" src={parts.videolink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div></> }


                                    <p className={styles.generic_button_base}>
                                        <a onClick={(e) => handleClick(e, "top")} className={styles.generic_button_object}>
                                            Back to top
                                        </a>
                                    </p>
                            </div>
                        )}))}        
                </div>
            </div>
            </>
        )
    }

    return (
        <div>
            <CareerData careers={careers}/>
        </div>
        )
}

export default CareersData