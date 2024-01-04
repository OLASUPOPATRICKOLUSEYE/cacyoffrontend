// All In Home
import homeannouncement from './home/homeannouncement';
import homecommunitysection from './home/homecommunitysection';
import homecontactsection from './home/homecontactsection';
import homeeventsection from './home/homeeventsection';
import homehero from './home/homehero';
import homesermonsection from './home/homesermonsection';
import homeservicesection from './home/homeservicesection';

// All In About
import aboutwelcome from './about/aboutwelcome';
import aboutchurchhistory from './about/aboutchurchhistory';
import aboutmission from './about/aboutmission';
import aboutfacility from './about/aboutfacility';
import aboutleadershipteam from './about/aboutleadershipteam';
import aboutstatementoffaith from './about/aboutstatementoffaith'
import aboutvision from './about/aboutvision'
import aboutinvolvement from './about/aboutinvolvement';

// All In Sermons 
import audio from './sermon/audio';
import video from './sermon/video';
import text from './sermon/text';

// All In Contact
import contact from './contact/contact';

// All In Gallery
import gallery from './familygallery/gallery';

// All In Donation
import donation from './donation/donation';

// All In Membership
import personalinfo from './membership/personalinfo';
import educationinfo from './membership/educationinfo';
import spiritualinfo from './membership/spiritualinfo';
import soulwining from './membership/soulwining';

// All In Footer
import footer from './footer';
import contactForm from './contactForm';

export const schemaTypes = [
    
    //home
    homeannouncement,
    homehero,
    homeservicesection,
    homeeventsection,
    homesermonsection,
    homecommunitysection,
    homecontactsection,
    footer,

    // about    
    aboutchurchhistory,
    aboutwelcome,
    aboutmission,
    aboutvision,
    aboutleadershipteam,
    aboutstatementoffaith,
    aboutinvolvement,
    aboutfacility,

    // sermon
    audio,
    video,
    text,

    // Contact
    contact,

    // Gallery
    gallery,

    // donation
    donation,

    //.    membership
    personalinfo,
    educationinfo,
    spiritualinfo,
    soulwining,

    // Save Data
    contactForm
]
